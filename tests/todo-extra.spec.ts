name: Visual Testing with Argos

on:
  workflow_dispatch:
  push:
    branches: [ main ]
  pull_request:

jobs:
  visual-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18

      - name: Install dependencies
        run: npm ci

      - name: Install Playwright browsers
        run: npx playwright install --with-deps

      # IMPORTANT: Run only NON-snapshot tests in CI
      - name: Run Playwright tests excluding local snapshot tests
        run: npx playwright test --grep-invert @snapshot

      - name: Upload visual results to Argos CI
        run: npx argos upload ./tests
        env:
          ARGOS_TOKEN: ${{ secrets.ARGOS_TOKEN }}
