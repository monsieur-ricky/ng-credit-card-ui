import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { request } from 'node:http';

const port = '4107';
const server = spawn(process.execPath, ['dist/ng-credit-card-ui/server/server.mjs'], {
  env: { ...process.env, PORT: port, ALLOWED_HOSTS: 'localhost,127.0.0.1' },
});
let errors = '';
server.stderr.on('data', (data) => { errors += data; });
const timeout = setTimeout(() => {
  console.error('SSR smoke test timed out', errors);
  server.kill();
  process.exit(1);
}, 20_000);

try {
  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.once('exit', (code) => reject(new Error(`SSR server exited early: ${code}\n${errors}`)));
    server.stdout.once('data', resolve);
  });

  const home = await fetch(`http://localhost:${port}/`);
  assert.equal(home.status, 200);
  const html = await home.text();
  assert.match(html, /Jon Snow/);
  assert.match(html, /01\/30/);

  const image = await fetch(`http://localhost:${port}/assets/images/visa.webp`);
  assert.equal(image.status, 200);
  assert.match(image.headers.get('content-type'), /image\/webp/);
  await image.arrayBuffer();

  // Send a real untrusted Host header; do not disable Angular's SSRF protection.
  const untrustedStatus = await new Promise((resolve, reject) => {
    const req = request({ hostname: 'localhost', port, path: '/', headers: { host: 'untrusted.example' } }, (res) => {
      res.resume();
      res.on('end', () => resolve(res.statusCode));
    });
    req.on('error', reject);
    req.end();
  });
  assert.ok(untrustedStatus >= 400, 'SSR must reject an untrusted hostname');
  console.log('SSR smoke test passed: rendered home, static image, untrusted host rejection');
} catch (error) {
  console.error(errors);
  throw error;
} finally {
  clearTimeout(timeout);
  server.kill();
}
