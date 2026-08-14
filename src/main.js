let amount = JSON.parse(localStorage.getItem("balance"));
let newBalance;
let loginStatus = JSON.parse(localStorage.getItem('loggedIn'));
let userName = localStorage.getItem("name")
let transHistory = JSON.parse(localStorage.getItem("history")) || []
const $ = id => document.getElementById(id);
const q = el => document.querySelectorAll(el);
const buttons = {
  transfer: $("tr-btn"),
  deposit: $("add-btn"),
  withdraw: $('wd-btn'),
  logIn: $("login-btn"),
  check: $("check-act"),
  next: $("start-transfer"),
  menu: $("hamMenu"),
}
const pages = {
  transfer: $("transfer"),
  withdraw: $("withdraw"),
  deposit: $("deposit"),
  login: $("loginPage"),
  home: $("home"),
}
const amounts = {
  transferAmount: $("tr-amount"),
  depositAmount: $("tr-amount-add"),
  withdrawAmount: $('wd-amount'),
}
const options = {
  home: q(".homePage"),
  tranfer: q(".transfer-op"),
  withdraw: q(".withdraw-op"),
  deposit: q(".deposit-op"),
  history: q(".transHistory"),
  logOut: q('.logout')
}
const elements = {
  actNum: $("act-num"),
  bankName: $("bank"),
  msg: $("message"),
  trScreen: $("tr-screen"),
  placeHolder: $("holder-text"),
  viewBalance: $('view-balance'),
  withPin: $('wd-pin'),
  listRecent: $("list"),
  recentHistory: $("history"),
  hamburgerMenu: $("mobile-menu"),
  hamMenuText: $("chosen-activity"),
  loginUsername: $("username"),
  userNameValue: $("user-name-value"),
  loginBalance: $("balance-value"),
  balance: $("balance"),
}


if (loginStatus) {
  pages.login.classList.add("hidden");
  pages.home.classList.remove("hidden");
  buttons.menu.classList.add('active-link')
  elements.hamMenuText.textContent = 'Home'
  elements.balance.textContent = amount;
  elements.userNameValue.textContent = userName
  elements.bankName.value = ''
  elements.actNum.value = ''
  elements.withPin.value = ''
  amounts.withdrawAmount.value = ''
  amounts.depositAmount.value = ''
} else {
  pages.login.classList.remove("hidden");
  pages.home.classList.add("hidden")
  elements.loginUsername.value = ''
  elements.loginBalance.value = ''
}


buttons.logIn.addEventListener('click', () => {
  const initUserName = elements.loginUsername.value.trim();
  const initUserBalance = Number(elements.loginBalance.value);
  if ((initUserBalance == '' || initUserBalance == 0) && initUserName == '') {
    errorMessage(elements.loginUsername, elements.loginBalance, "red", "red")
    elements.loginUsername.focus()
    return
  } else if (/\d/.test(initUserName) || initUserName == '') {
    errorMessage(elements.loginUsername, elements.loginBalance, "red", "blue")
    elements.loginUsername.focus()
  } else if (isNaN(initUserBalance) || initUserBalance == '') {
    errorMessage(elements.loginBalance, elements.loginUsername, "red", "blue")
    elements.loginBalance.focus()
  } else if(initUserBalance <= 10000) {
    let loggedIn = true;
    elements.userNameValue.textContent = initUserName;
    elements.balance.textContent = initUserBalance;
    pages.login.classList.add("hidden");
    pages.home.classList.remove("hidden")
    errorMessage(elements.loginBalance, elements.loginUsername, "blue", "blue")
    localStorage.setItem("name", initUserName)
    localStorage.setItem("balance", JSON.stringify(initUserBalance));
    localStorage.setItem("loggedIn", JSON.stringify(loggedIn))
  } else {
    errorMessage(elements.loginBalance, elements.loginUsername, "red", "blue")
    elements.loginBalance.focus()
  }
})

buttons.menu.addEventListener('click', () => {
  elements.hamburgerMenu.classList.toggle('hidden')
  buttons.menu.classList.add('bg-transparent')
  buttons.menu.classList.add('text-[#5B35D5]')
})
elements.hamburgerMenu.addEventListener('click', () => {
  elements.hamburgerMenu.classList.add('hidden')
  buttons.menu.classList.remove('bg-transparent')
})
document.addEventListener("click", (e) => {
  if (!elements.hamburgerMenu.contains(e.target) && !buttons.menu.contains(e.target)) {
    elements.hamburgerMenu.classList.add("hidden");
    buttons.menu.classList.remove('bg-transparent')
  }
});


elements.viewBalance.addEventListener('click', () => {
  // elements.balance.textContent = 'XXXXXXX'
  if (elements.balance.textContent == 'xxxxxx') {
    elements.balance.textContent = JSON.parse(localStorage.getItem("balance"));
    elements.viewBalance.textContent = 'Hide Balance'
  } else {
    elements.balance.textContent = 'xxxxxx'
    elements.viewBalance.textContent = 'View Balance'
  }
})

options.tranfer.forEach(transOpt => {
  transOpt.addEventListener('click', () => {
    activityBtn(pages.transfer, options.tranfer, "active-trans", 'Transfer')
  })
})

options.withdraw.forEach(withOpt => {
  withOpt.addEventListener('click', () => {
    activityBtn(pages.withdraw, options.withdraw, "active-with", 'Withdraw')
  })
})

options.deposit.forEach(depOpt => {
  depOpt.addEventListener('click', () => {
    activityBtn(pages.deposit, options.deposit, "active-dep", 'Deposit')
  })
})

function activityBtn(page, option, class1, text) {
  elements.msg.classList.remove("hidden")
  elements.msg.textContent = ''
  elements.placeHolder.classList.add("hidden")
  clr()
  page.classList.remove("hidden")
  option.forEach(el => el.classList.add(class1))
  elements.recentHistory.classList.add("hidden")
  options.history.forEach(el => el.classList.remove("active-link"))
  options.home.forEach(el => el.classList.remove("active-link"))
  elements.msg.style.textAlign = 'left'
  elements.msg.style.padding = '0'
  buttons.menu.classList.add(class1)
  elements.hamMenuText.textContent = text
  document.title = `Loixrang Bank - ${text}`
}

const Persons = {
  Samuel: {
    fullname: 'Peter Parker',
    accountNumber: '1234',
    bank: 'FCMB'
  },
  Francis: {
    fullname: 'Bruce Wayne',
    accountNumber: '2345',
    bank: 'WEMA'
  },
  Edidiong: {
    fullname: 'Clark Kent',
    accountNumber: '5678',
    bank: 'Fidelity'
  },
  Ekemini: {
    fullname: 'Lois Lane',
    accountNumber: '6789',
    bank: 'Access'
  }
}

function test() {
  console.log("working")
}

function clr() {
  pages.deposit.classList.add("hidden")
  pages.withdraw.classList.add("hidden")
  pages.transfer.classList.add("hidden")
  options.deposit.forEach(el => el.classList.remove("active-dep"))
  options.withdraw.forEach(el => el.classList.remove("active-with"))
  options.tranfer.forEach(el => el.classList.remove("active-trans"))
  buttons.menu.classList.remove('active-dep')
  buttons.menu.classList.remove('active-with')
  buttons.menu.classList.remove('active-trans')
  buttons.menu.classList.remove('active-link')
}

function errorMessage(activeElement, oldElement, activeColor, oldColor) {
  //for deposit - general
  elements.msg.style.color = 'red'
  if (activeElement && oldElement) {
    activeElement.style.border = `2px solid ${activeColor}`
    activeElement.style.outline = 'none'
    oldElement.style.border = `2px solid ${oldColor}`
    oldElement.style.outline = `none`
    return
  } else if (activeElement && !oldElement) {
    //for withdrawal
    activeElement.style.border = `2px solid ${activeColor}`
    activeElement.style.outline = 'none'
  } else {
    test()
  }
}

function deposit() {
  const addValue = amounts.depositAmount.value;
  amount = JSON.parse(localStorage.getItem("balance"));

  if (addValue > 3000) {
    elements.msg.textContent = `Unsuccessful, your amount exceeded the limit of 3000`
    errorMessage(amounts.depositAmount)
    return
  } else if (addValue < 100) {
    elements.msg.textContent = `Unsuccessful, your amount is below N100`
    errorMessage(amounts.depositAmount)
    return
  } else if (addValue <= 3000 && addValue >= 100) {
    newBalance = amount + Number(addValue)
    elements.balance.textContent = `N${newBalance}`
    elements.msg.textContent = `You have successfully added N${Number(addValue)} to your balance`
    elements.msg.style.color = 'green'
    amounts.depositAmount.style.border = '2px solid green'
    amounts.depositAmount.style.outline = 'none'
    transHistory.push(`You deposited N${Number(addValue)}`)
    localStorage.setItem("history", JSON.stringify(transHistory))
    elements.balance.textContent = newBalance;
    localStorage.setItem("balance", JSON.stringify(newBalance))
    amounts.depositAmount.value = '';
  }
}

function transfer(clientName) {
  const trAmount = amounts.transferAmount.value;
  amount = JSON.parse(localStorage.getItem("balance"));

  if (amount == 0) {
    amounts.transferAmount.disabled = 'true'
    return elements.msg.textContent = `You have no money, go deposit some`
  }

  if (trAmount < 100) {
    elements.msg.textContent = `Unsuccessfull! - amount below N100`
    errorMessage()
    amounts.transferAmount.value = ''
    return
  } else if (trAmount > amount) {
    elements.msg.textContent = `Unsuccessfull! - Number above balance`
    errorMessage()
    amounts.transferAmount.value = ''
    return
  } else if (trAmount <= amount && trAmount >= 100) {
    newBalance = amount - trAmount
    elements.balance.textContent = `N${newBalance}`;
    elements.msg.textContent = `Your transfer of N${trAmount} to ${clientName} has been succesfull`
    elements.msg.style.color = 'green'
    transHistory.push(`You transfered N${Number(trAmount)} to ${clientName}`)
    localStorage.setItem("history", JSON.stringify(transHistory))
    elements.balance.textContent = newBalance;
    localStorage.setItem("balance", JSON.stringify(newBalance))
    amounts.transferAmount.value = ''
    elements.actNum.value = ''
    elements.bankName.value = ''
    buttons.next.classList.add('hidden')
    elements.trScreen.classList.add("hidden")
  }
}

function withdraw() {
  let value = Number(amounts.withdrawAmount.value);
  let pin = Number(elements.withPin.value);
  amount = JSON.parse(localStorage.getItem("balance"));

  if (value == '' || value < 100) {
    elements.msg.textContent = 'Enter a number above 100'
    errorMessage(amounts.withdrawAmount, elements.withPin, "red", "blue")
    return
  } else if (pin < 1000 || pin == '') {
    amounts.withdrawAmount.disabled = true
    elements.msg.textContent = 'Enter a 4 digit pin'
    errorMessage(elements.withPin, amounts.withdrawAmount, "red", "blue")
    return
  } else if (value > amount) {
    amounts.withdrawAmount.disabled = false
    elements.msg.textContent = `Insufficient funds`
    amounts.withdrawAmount.value = ''
    elements.withPin.value = ''
    elements.withPin.style.border = '2px solid blue'
    errorMessage()
    return
  } else if (value >= 100 && value <= amount && pin >= 1000) {
    elements.msg.textContent = `Withdrawal of N${value} is succesful`;
    newBalance = amount - value
    transHistory.push(`You withdrawed N${Number(value)}`)
    elements.msg.style.color = 'blue'
    elements.withPin.style.border = '2px solid blue'
    amounts.withdrawAmount.value = ''
    elements.withPin.value = ''
    elements.balance.textContent = newBalance;
    localStorage.setItem("history", JSON.stringify(transHistory))
    localStorage.setItem("balance", JSON.stringify(newBalance))
  }
}

function checkButton() {
  let actNumber = elements.actNum.value;
  let selBank = elements.bankName.value

  if (actNumber == '') {
    elements.msg.textContent = 'Please enter an account number'
    errorMessage(elements.actNum, elements.bankName, "red", "#5B35D5")
    return
  } else if (selBank == '') {
    elements.msg.textContent = 'Please select a bank'
    errorMessage(elements.bankName, elements.actNum, "red", "#5B35D5")
    return
  } else {
    elements.actNum.style.outline = 'none'
    elements.bankName.style.outline = 'none'
    elements.msg.textContent = 'Checking...'

    for (const [person, details] of Object.entries(Persons)) {
      if (actNumber == details.accountNumber && selBank == details.bank) {
        // console.log(person, details)
        elements.msg.textContent = details.fullname
        elements.bankName.style.border = '2px solid #5B35D5'
        elements.msg.style.color = '#5B35D5'
        elements.msg.style.padding = '0 2px'
        buttons.next.classList.remove('hidden')
        buttons.next.addEventListener('click', () => {
          elements.trScreen.classList.remove("hidden")
          buttons.transfer.addEventListener('click', () => {
            transfer(details.fullname)
          })
        })
        return
      } else {
        console.log(details.bank, details.accountNumber, selBank, actNumber)
        elements.msg.textContent = `This account doesn't exist`
        errorMessage()
        elements.bankName.style.border = '2px solid #5B35D5'
      }
    }
  }
}

buttons.check.addEventListener('click', () => {
  checkButton()
})

buttons.deposit.addEventListener('click', () => {
  deposit()
})

buttons.withdraw.addEventListener('click', () => {
  withdraw()
})


options.home.forEach(homePage => {
  homePage.addEventListener('click', () => {
    options.home.forEach(el => el.classList.add("active-link"))
    options.history.forEach(el => el.classList.remove("active-link"))
    elements.placeHolder.classList.remove("hidden")
    elements.recentHistory.classList.add("hidden")
    clr()
    elements.msg.textContent = ''
    elements.msg.classList.add("hidden")
    buttons.menu.classList.add('active-link')
    elements.hamMenuText.textContent = 'Home'
    document.title = 'Loixrang Bank'
  })
})

//Transaction History
options.history.forEach(recent => {
  recent.addEventListener('click', () => {
    transactions()
    recent.classList.add('active-link')
    options.home.forEach(el => el.classList.remove("active-link"))
    buttons.menu.classList.add('active-link')
    elements.hamMenuText.textContent = 'History'
    document.title = 'Loixrang Bank - History'
  })
})

function transactions() {
  transHistory = JSON.parse(localStorage.getItem("history")) || []
  elements.placeHolder.classList.add("hidden")
  elements.recentHistory.classList.remove("hidden")
  clr()
  elements.listRecent.textContent = ''
  if (transHistory.length < 1) {
    elements.msg.classList.remove("hidden")
    elements.msg.textContent = `You have no recent activity`
    elements.msg.style.textAlign = 'Center'
  } else {
    for (let i = transHistory.length - 1; i >= 0; i--) {
      elements.msg.classList.add("hidden")
      const list = document.createElement('li')
      list.textContent = transHistory[i]
      elements.listRecent.appendChild(list)
    }
  }
}

options.logOut.forEach(logout => {
  logout.addEventListener('click', () => {
    localStorage.clear()
    pages.login.classList.remove("hidden");
    pages.home.classList.add("hidden");
    options.home.forEach(el => el.classList.add("active-link"))
    options.history.forEach(el => el.classList.remove("active-link"))
    elements.recentHistory.classList.add("hidden")
    elements.placeHolder.classList.remove("hidden")
    elements.loginUsername.value = ''
    elements.loginBalance.value = ''
    clr()
    elements.msg.textContent = ''
    elements.msg.classList.add("hidden")
    buttons.menu.classList.add('active-link')
    elements.hamMenuText.textContent = 'Home'
    document.title = 'Loixrang Bank - Log in'
  })
})
