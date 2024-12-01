# Credit Card UI

A demo project showcasing a **Credit Card UI Component** built with Angular 19. This project focuses on using modern Angular practices by **not using Zone.js** for change detection and leveraging the **CSS `@property`** feature for smooth transition effects between different card styles.

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

- **Node.js** (v20.15.0 or higher recommended)
- **Angular CLI** (v19+)
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
   ng start
   ```

4. Open your browser and navigate to: [http://localhost:4200](http://localhost:4200)


## Contributing
Contributions are welcome! Please open an issue or submit a pull request to suggest features, fix bugs, or enhance the demo.

**Feel free to share your thoughts or suggest improvements!**
