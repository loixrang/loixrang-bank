# 🏦 Loixrang Bank

A frontend banking simulation built with **JavaScript, Vite, and Tailwind CSS**.

Loixrang Bank is a browser-based banking interface created as a JavaScript learning project. It simulates common banking operations such as depositing money, withdrawing funds, transferring money, viewing balances, and checking transaction history.

> **Note:** This is a frontend simulation for learning purposes. It does not connect to a real banking system and should not be used with real financial information.

## ✨ Features

- 🔐 **Login system**
  - Enter a username and starting balance
  - Login state is persisted with `localStorage`
  - Automatic login state restoration

- 💰 **Balance management**
  - View account balance
  - Hide/show balance
  - Balance updates automatically after transactions

- 💵 **Deposits**
  - Add money to the account
  - Minimum deposit validation
  - Maximum deposit limit
  - Balance updates immediately

- 💸 **Withdrawals**
  - Withdraw money from the account
  - PIN validation
  - Insufficient-funds checking
  - Balance updates after successful withdrawals

- 🔄 **Transfers**
  - Select a bank
  - Enter an account number
  - Verify account details
  - Transfer funds to predefined accounts
  - Balance updates after successful transfers

- 📜 **Transaction history**
  - Automatically records deposits, withdrawals, and transfers
  - Most recent transactions are displayed first
  - History persists between sessions

- 📱 **Responsive interface**
  - Desktop and mobile navigation
  - Responsive activity sections
  - Mobile hamburger menu
  - Adaptive UI across screen sizes

- 🎨 **Modern UI**
  - Tailwind CSS styling
  - Inter font
  - Rounded cards and controls
  - Backdrop blur effects
  - Interactive navigation and transaction states

## 🛠️ Built With

- **HTML5** — Application structure
- **CSS** — Custom styling
- **JavaScript (ES Modules)** — Application logic and interactions
- **Tailwind CSS v4** — Utility-first styling
- **Vite** — Development server and build tool
- **LocalStorage API** — Client-side persistence

## 📂 Project Structure

```text
bank-project/
├── public/
├── src/
│   ├── assets/
│   │   └── fonts/
│   │       └── Inter-VariableFont_opsz,wght.ttf
│   ├── main.js
│   └── style.css
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.ts
```

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed.

### Clone the repository

```bash
git clone https://github.com/loixrang/bank-project.git
cd bank-project
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will provide a local development URL, typically:

```text
http://localhost:5173
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## 💾 Data Persistence

Loixrang Bank currently uses the browser's **LocalStorage API** instead of a backend database.

The application stores information such as:

```text
name
balance
loggedIn
history
```

This allows the simulated account state and transaction history to remain available after refreshing the page or reopening the application in the same browser.

### Clearing application data

Logging out clears the application's stored LocalStorage data.

You can also manually clear the data through your browser's developer tools if you want to reset the application.

## 🏦 Demo Accounts

Transfers can be tested against the predefined accounts in the application:

| Name | Bank | Account Number |
|---|---|---:|
| Peter Parker | FCMB | `1234` |
| Bruce Wayne | WEMA | `2345` |
| Clark Kent | Fidelity | `5678` |
| Lois Lane | Access | `6789` |

> These are **dummy accounts defined in the frontend** and are not real banking accounts.

## 🔒 Important Security Notice

This project is a **frontend learning project**, not a real banking application.

It currently stores account information and transaction data in `localStorage` and performs all banking logic in client-side JavaScript. This means it does **not** provide the security guarantees required for a real financial application.

Do not enter real:

- Bank account information
- Banking PINs
- Passwords
- Financial information
- Personally identifiable information

A production banking application would require a secure backend, authentication, authorization, encrypted communication, server-side transaction validation, secure credential handling, a database, and significantly more security controls.

## 🎯 Purpose

This project was built to practice and demonstrate JavaScript concepts including:

- DOM manipulation
- Event listeners
- Functions
- Objects
- Arrays
- Array iteration
- Form validation
- Conditional logic
- LocalStorage
- Dynamic element creation
- State management
- Responsive UI interaction
- ES modules
- Working with Vite
- Tailwind CSS

The project also evolved incrementally, with its Git history documenting the development process from the initial banking UI through transaction functionality, LocalStorage persistence, mobile responsiveness, login functionality, and UI refinements.

## 🔮 Possible Future Improvements

- [ ] Add a real backend
- [ ] Add database persistence
- [ ] Implement proper authentication
- [ ] Hash passwords/PINs
- [ ] Add multiple user profiles
- [ ] Add account creation
- [ ] Add transaction timestamps
- [ ] Add transaction categories
- [ ] Add transaction search/filtering
- [ ] Add transfer confirmation screens
- [ ] Add dark mode
- [ ] Add charts and spending analytics
- [ ] Add proper API integration
- [ ] Add automated tests
- [ ] Improve accessibility
- [ ] Add deployment configuration

## 👨‍💻 Author

**Loixrang**

Built as a JavaScript learning project and progressively developed into a functional frontend banking simulation.
