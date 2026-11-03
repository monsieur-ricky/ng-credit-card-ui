# Angular and dependency security upgrade

## Baseline (2026-11-03)

- Manifest and lockfile target Angular 20.2, but the local install is stale (Angular 19).
- `npm ci` fails because the manifest and lockfile disagree on TypeScript and Node types.
- Lockfile audit: 47 vulnerable packages (4 critical, 32 high, 10 moderate, 1 low).
- No automated test target or CI workflow exists.
- The application prerenders static pages; `docs/` contains the separately published GitHub Pages build.

## Plan

1. Repair the install baseline and apply official Angular migrations one major at a time (20 → 21 → 22).
2. Update to current stable Angular 22 patches and compatible TypeScript/Node LTS versions. Remove unused retired Angular packages, update other dependencies, and resolve audit findings without forced peer dependencies.
3. Preserve the zoneless UI and static prerendering. Validate any retained server code against the updated APIs.
4. Add reproducible install/build/security checks, document runtime requirements, and verify card interactions.
5. Commit on a dedicated branch and open a pull request against `main`. Do not merge or publish the generated `docs/` site as part of this upgrade.

## Acceptance criteria

- A fresh `npm ci` succeeds without peer dependency bypasses.
- Production and development builds succeed, including prerendering.
- Full and production-only dependency audits report no known vulnerabilities, or any remaining findings are explicitly documented.
- Automated regression checks pass and the card UI retains its existing behavior.
- A pull request records changes, validation, and any remaining limitations.

## Implementation and validation results

- Applied official Angular 20 → 21 → 22 migrations without forcing peer dependencies.
- Upgraded framework packages to 22.2.4, CLI/build/SSR to 22.2.5, TypeScript to 6.0.3, Express to 5.3.0, and supporting packages to compatible current releases.
- Removed unused `@angular/animations`, its provider, and `@angular/platform-browser-dynamic` (retired in Angular 22). CSS effects remain unchanged.
- Kept migration-generated eager change detection, legacy optional-navigation semantics, and the incremental hydration opt-out to preserve existing behavior. Added the server bootstrap context required for SSR.
- Pinned Node 24.18.0 LTS, declared Angular's supported Node range, and repaired the lockfile.
- Corrected Express 5 wildcard syntax. Added an explicit optional SSR build configuration so the existing server command has a matching build. Configured trusted SSR hostnames using `ALLOWED_HOSTS` rather than bypassing host validation.
- Added CI and weekly Dependabot PRs; no auto-merge or deployment workflow was added. The published `docs/` files remain unchanged.

Validated locally with Node 24.18.0 / npm 11.16.0:

| Check | Result |
| --- | --- |
| Fresh `npm ci` | Pass |
| `npm audit` | 0 vulnerabilities (down from 47) |
| `npm audit --omit=dev` | 0 vulnerabilities |
| `npm run typecheck` | Pass, including optional server source |
| `npm test` | 11 tests pass across 3 suites |
| `npm run build` | Pass; 1 static route prerendered |
| Development build | Pass; 1 static route prerendered |
| Production SSR build | Pass |
| `npm run test:ssr` after SSR build | Pass: rendered home, image serving, untrusted hostname rejection |
| `git diff --check` | Pass |

The regression tests cover form-to-card updates, style selection, expiration formatting, supported brand detection, empty inputs, CCV rendering, and numeric input filtering. They run in jsdom, not a real browser; visual animation behavior has not been manually verified. Audit results reflect the advisories available on the review date and are not a guarantee against future vulnerabilities.
