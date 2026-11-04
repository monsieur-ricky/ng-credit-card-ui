# Credit Card UI

A demo project showcasing a **Credit Card UI Component** built with Angular 22. This project focuses on using modern Angular practices by **not using Zone.js** for change detection and leveraging the **CSS `@property`** feature for smooth transition effects between different card styles.

## Key Features:

- **Interactive Credit Card Form**: Users can enter card details (number, name, expiry and  date) and see them reflected in real-time on a credit card UI. The card also displays the correct card brand based on the entered number.
- **Customizable Styles**: Allows users to switch between predefined card styles with smooth transitions.
- **Zone.js-Free Angular**: Demonstrates the use of Angular without Zone.js using only Signals.
- **Modern CSS Techniques**: CSS `@property` is used to create seamless transitions between different card styles with `background: linear-gradient()`.

## Live Demo
Try out the live demo: https://monsieur-ricky.github.io/ng-credit-card-ui/

## Video Demo
Watch the video demo below:

[![Watch the video](https://img.youtube.com/vi/DlGMc5Xir5I/0.jpg)](https://www.youtube.com/watch?v=DlGMc5Xir5I)

## Prerequisites

- **Node.js 24 LTS** (24.18.0 pinned in `.nvmrc`; run `nvm install` and `nvm use` if using nvm). Angular also supports Node `^22.22.3` or `>=26.0.0`.
- **npm** (included with Node.js). Angular CLI 22 is installed locally with the project; no global CLI is required.
- A modern browser that supports CSS `@property` (e.g., Chrome, Edge, or Safari)


## Running Demo Locally

1. Clone the Repository:
   ```bash
   git clone git@github.com:monsieur-ricky/ng-credit-card-ui.git
   ```

2. Install Dependencies:
   ```bash
   cd ng-credit-card-ui
   npm ci
   ```

3. Start the development server:
   ```bash
    npm start
   ```

4. Open your browser and navigate to: [http://localhost:4200](http://localhost:4200)


## Validation and builds

```bash
npm ci
npm audit
npm run typecheck
npm test
npm run build
npm run build -- --configuration development
```

The default production build prerenders the home page into `dist/ng-credit-card-ui/browser/`. The checked-in `docs/` directory is the separately published GitHub Pages site and is not automatically updated by a build.

An optional Express 5 server is also available:

```bash
npm run build -- --configuration production,ssr
npm run test:ssr
npm run serve:ssr:ng-credit-card-ui
```

The server listens on `http://localhost:4000` (or the `PORT` environment variable). For deployment, set `ALLOWED_HOSTS` to a comma-separated list of trusted hostnames (without schemes or ports); the default only permits `localhost` and `127.0.0.1` for SSR. Host validation remains enabled to protect against SSRF. Rebuild with `npm run build` to return to the default static output.

CI runs clean installation, the full dependency audit, type checking, 11 regression tests, static/development/server builds, and a server smoke test (rendering, assets, and untrusted host rejection). Scheduled Dependabot version updates are disabled; dependency updates should be proposed manually in PRs and validated before merging. The upgrade plan and validation results are recorded in [UPGRADE_PLAN.md](UPGRADE_PLAN.md).

## Contributing
Contributions are welcome! Please open an issue or submit a pull request to suggest features, fix bugs, or enhance the demo.

**Feel free to share your thoughts or suggest improvements!**
