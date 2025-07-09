# orangeHrmsCypressDemo

# 🚀 Cypress Demo Project

This repository demonstrates **end-to-end testing** using [Cypress](https://www.cypress.io/).
It includes both passing and **intentionally failing** test cases to showcase Cypress’s reporting and debugging features.

---

## 📂 Project Repository

🔗 **GitHub:** [https://github.com/raisumit04/cypressDemo](https://github.com/raisumit04/cypressDemo)

---

## ⚙️ Getting Started

### 📦 Clone & Install

```bash
git clone https://github.com/raisumit04/cypressDemo.git
cd cypressDemo
npm install
```

---

## 🚀 Running Tests

### 🔬 Run Cypress Tests in the CLI

```bash
npx cypress run
```

This will run tests headlessly in the Electron browser by default.

### 🖥️ Run Tests in Cypress Test Runner (GUI)

For interactive mode (recommended while developing/debugging):

```bash
npx cypress open
```

This opens the Cypress Test Runner where you can pick tests and watch them run in real time.

---

## ⚠️ Intentionally Failing Tests

> 🚩 **Note:**
> This project contains some test cases that are **intentionally designed to fail**.
>
> They are included to:
>
> * Demonstrate Cypress’s screenshots and video capture on failures.
> * Show how failures appear in reports and logs.

---

## 🗂 Project Structure

```
cypressDemo/
├── cypress/
│   ├── e2e/            # Your test specifications
│   ├── fixtures/       # Test data files
│   └── support/        # Custom commands & setup
├── cypress.config.js   # Cypress configuration file
├── package.json
```

---

## 📝 Scripts

Common `npm` scripts:

| Command                | Description                   |
| ---------------------- | ----------------------------- |
| `npm run cypress:open` | Opens the Cypress GUI runner  |
| `npm run cypress:run`  | Runs tests headlessly via CLI |

(If these scripts aren’t set yet in your `package.json`, you can add them for convenience.)

---

## 📹 Test Artifacts

* 📸 **Screenshots** on failure: saved in `cypress/screenshots`
* 🎥 **Videos** of each test run: saved in `cypress/videos`

---

## 🤝 Contributing

Pull requests are welcome.
For major changes, please open an issue first to discuss what you would like to change.

---


✅ **Happy Testing with Cypress!** 🌿


