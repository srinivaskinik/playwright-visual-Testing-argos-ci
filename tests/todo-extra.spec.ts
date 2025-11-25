name: Visual Regression with Playwright + Argos

on:
  workflow_dispatch:
  push:
    branches: [ main ]
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 18

      - name: Install Dependencies
        run: npm ci

      - name: Install Playwright Browsers
        run: npx playwright install --with-deps

      # 🚫 Do NOT update snapshots in CI — Argos handles comparison
      - name: Run Playwright Tests (without snapshots)
        run: npx playwright test --grep "@visual" --reporter=line

      # 🚀 Upload screenshots to Argos for comparison
      - name: Upload to Argos CI
        run: npx argos upload tests
        env:
          ARGOS_TOKEN: ${{ secrets.ARGOS_TOKEN }}
