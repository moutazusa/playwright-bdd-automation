Playwright Automation

This project contains a small TypeScript and Playwright test suite using SauceDemo.

Test Coverage
Successful user login
Invalid login error validation
Add product to cart
Project Structure

playwright-bdd-automation/

├── tests/

└── saucedemo.spec.ts

├── helpers/

└── login.ts

├── playwright.config.ts

├── package.json

├── package-lock.json

└── README.md

Prerequisites

Make sure the following are installed:

Git
Node.js
npm
Setup - Windows

Open PowerShell and run:

git clone https://github.com/moutazusa/playwright-bdd-automation.git

cd playwright-bdd-automation

npm install

npx playwright install

Setup - Mac

Open Terminal and run:

git clone https://github.com/moutazusa/playwright-bdd-automation.git

cd playwright-bdd-automation

npm install

npx playwright install

Run Tests - Windows

Run all tests in headless mode:

npx playwright test

Run all tests in headed mode:

npx playwright test --headed

Run Tests - Mac

Run all tests in headless mode:

npx playwright test

Run all tests in headed mode:

npx playwright test --headed

Failure Screenshots and Traces

The Playwright configuration captures:

Screenshots when a test fails
Traces when a test fails

Failure screenshots and traces are saved locally in the test-results/ folder.

Reusable Helper

The project includes a reusable login helper that is used by multiple tests to reduce duplicated code and make the tests easier to maintain.