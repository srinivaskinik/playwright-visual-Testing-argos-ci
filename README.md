# Playwright POM Visual Regression Demo

## 🚀 Overview
This sample project demonstrates:
- Playwright end-to-end testing
- Page Object Model (POM)
- Visual Regression Testing
- GitHub Actions CI
- Argos CI Screenshot Comparison

Perfect for demos, training, and showing before/after UI changes.

---

## 📁 Project Structure
```
playwright-pom-visual-demo/
├── package.json
├── playwright.config.ts
├── tsconfig.json
├── tests/
│   ├── todo.spec.ts
│   └── visual-change.spec.ts
├── pages/
│   └── todoPage.ts
└── .github/
    └── workflows/
        └── playwright.yml
```

---

## 🛠️ Setup Instructions

### 1. Install Dependencies
```bash
npm install
npx playwright install --with-deps
```

### 2. Run Tests Locally
```bash
npx playwright test
```

---

## 🔍 Visual Regression Demo Steps

### Baseline Run
- `todo.spec.ts` captures baseline screenshots
- Argos saves them as the initial baseline

### Visual Change Run
`visual-change.spec.ts` injects CSS:
```css
h1 { color: red !important }
.new-todo { border: 3px solid red !important }
```

This intentionally creates a visual difference so Argos can detect it.

---

## ☁️ GitHub Actions CI
Workflow file: `.github/workflows/playwright.yml`

Automatically runs:
- Playwright tests
- Uploads screenshots to Argos

---

## 🖼️ Argos CI
Create an Argos project and add:
- `ARGOS_TOKEN` as a GitHub repository secret

---

## 📦 Zip Download
Included below in ChatGPT message (scroll down).

---

## 📜 License
MIT License
