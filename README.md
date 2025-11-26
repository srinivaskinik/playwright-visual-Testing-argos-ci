# 🎭 Playwright + Argos CI — Visual Testing Demo (POM)

This repository demonstrates how to implement **Visual Regression Testing** using:

- ✅ Playwright
- ✅ Page Object Model (POM)
- ✅ Argos CI for Visual Testing
- ✅ GitHub Actions for CI automation

It is a minimal, production-style setup designed to help you onboard quickly with Argos visual testing on Playwright.

---

## 🚀 Tech Stack

| Tool | Purpose |
|------|--------|
| Playwright | Test automation framework |
| Argos CI | Visual regression platform |
| POM | Test structure and abstraction |
| GitHub Actions | CI pipeline |
| TypeScript | Type safety |

---

## 📦 Installed Dependencies

```json
{
  "@argos-ci/cli": "^3.2.1",
  "@argos-ci/core": "^1.3.0",
  "@argos-ci/playwright": "^6.3.3",
  "@playwright/test": "^1.44.0",
  "typescript": "^5.0.0"
}
✅ Project Setup
1️⃣ Install dependencies
npm install

2️⃣ Install Playwright browsers
npx playwright install

✅ Running Tests Locally

Run all tests:

npm test


Run only visual tests:

npx playwright test --grep "@visual"


Run all others:

npx playwright test --grep-invert "@visual"

✅ Argos Visual Snapshot

In your visual test:

import { argosScreenshot } from "@argos-ci/playwright";

await argosScreenshot(page, "Home Page");

📁 Where Screenshots Are Stored

By default, Argos snapshots are written to:

./screenshots


If you want to explicitly control output path:

await argosScreenshot(page, "Login Page", { root: ".argos" });


Then upload from:

npx argos upload .argos

✅ CI Configuration (GitHub Actions)

Example upload step:

- name: Upload to Argos
  run: npx argos upload ./screenshots
  env:
    ARGOS_TOKEN: ${{ secrets.ARGOS_TOKEN }}
    ARGOS_BRANCH: ${{ github.ref_name }}
    ARGOS_COMMIT: ${{ github.sha }}
    ARGOS_BUILD_NAME: "Playwright Visual Tests"

🔐 Add GitHub Secret

Go to:

GitHub → Settings → Secrets → Actions → New Secret


Add:

ARGOS_TOKEN


(Available from your Argos dashboard)

✅ Approving Baselines

After first run:

Visit Argos Dashboard

Review screenshots

Approve baseline

Future diffs will highlight regressions

🧪 Example Tagging

To separate visual tests:

test("@visual homepage", async ({ page }) => { ... });

✅ Best Practices

✔ Use fixed viewport
✔ Disable animations
✔ Unique screenshot names
✔ Separate @visual tests
✔ Run visual tests last
✔ Upload only snapshot folder

🧠 Common Issues
.argos not found

✅ You didn’t configure root → default is ./screenshots

Upload fails

✅ Check token
✅ Upload correct directory
✅ Verify screenshots exist

Empty Argos build

✅ Tests didn’t execute
✅ Wrong @grep
✅ Missing screenshot call

✅ Project Scripts
npm test

📣 Want to commit improvements?

Pull requests are welcome!

📄 License

MIT
