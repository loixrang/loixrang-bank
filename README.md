# Loixrang Bank

A frontend banking simulation built with JavaScript, Vite, and Tailwind CSS.

Loixrang Bank is a browser-based banking interface created as a JavaScript learning project. It simulates common banking operations such as depositing money, withdrawing funds, transferring money, viewing account balances, and checking transaction history.

> **Note:** This is a frontend simulation for learning purposes. It does not connect to a real banking system and should not be used with real financial information.

## Features

* User login system
* Account balance management
* Show and hide account balance
* Deposit functionality with validation
* Withdrawal functionality with PIN validation
* Insufficient funds checking
* Bank transfer functionality
* Predefined accounts for testing transfers
* Transaction history
* Persistent data using LocalStorage
* Responsive layout for desktop and mobile
* Mobile navigation menu
* Interactive UI and transaction states

## Built With

* HTML5
* JavaScript (ES Modules)
* Tailwind CSS
* Vite
* LocalStorage API

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your computer.

### Clone the repository

```bash
git clone https://github.com/loixrang/loixrang-bank.git
cd loixrang-bank
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will provide a local development URL, usually:

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

## Data Persistence

The application currently uses the browser's LocalStorage API instead of a backend database.

The application stores information such as:

* Username
* Account balance
* Login state
* Transaction history

This allows account information and transaction history to remain available after refreshing the page or reopening the application in the same browser.

Logging out clears the application's stored LocalStorage data.

## Demo Accounts

The transfer system includes predefined accounts that can be used for testing.

| Name         | Bank     | Account Number |
| ------------ | -------- | -------------- |
| Peter Parker | FCMB     | `1234`         |
| Bruce Wayne  | WEMA     | `2345`         |
| Clark Kent   | Fidelity | `5678`         |
| Lois Lane    | Access   | `6789`         |

These are dummy accounts defined in the frontend and are not real banking accounts.

## Security Notice

This project is a frontend learning project and is not a real banking application.

Account information and transaction data are stored in LocalStorage, while the banking logic runs entirely in client-side JavaScript. As a result, the application does not provide the security required for handling real financial information.

Do not enter real:

* Bank account information
* Banking PINs
* Passwords
* Financial information
* Personally identifiable information

A production banking application would require a secure backend, proper authentication and authorization, encrypted communication, server-side transaction validation, secure credential handling, a database, and additional security controls.

## Project Purpose

This project was built to practice and improve my JavaScript skills, particularly:

* DOM manipulation
* Event listeners
* Functions
* Objects and arrays
* Array methods
* Form validation
* Conditional logic
* LocalStorage
* Dynamic element creation
* State management
* ES modules
* Responsive UI development
* Vite
* Tailwind CSS

The project was developed incrementally, with each feature building on the previous version.

## Future Improvements

Some features I may add in future versions include:

* Backend integration
* Database persistence
* Proper authentication
* Password and PIN hashing
* Multiple user profiles
* Account creation
* Transaction timestamps
* Transaction categories
* Transaction search and filtering
* Transfer confirmation screens
* Dark mode
* Spending analytics
* API integration
* Automated tests
* Improved accessibility

## Live Demo

https://loixrang-bank.vercel.app

## Author

**Loixrang**

Built as a JavaScript learning project and progressively developed into a functional frontend banking simulation.
