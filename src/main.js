let amount = JSON.parse(localStorage.getItem("balance"));
let newBalance;
let loginStatus = JSON.parse(localStorage.getItem('loggedIn'));
let userName = localStorage.getItem("name")
let transHistory = JSON.parse(localStorage.getItem("history")) || []
const $ = id => document.getElementById(id);
const elements = {
  transferAmount: $("tr-amount"),
  btn: $("tr-btn"),
  actNum: $("act-num"),
  bankName: $("bank"),
  checkBtn: $("check-act"),
  msg: $("message"),
  nextBtn: $("start-transfer"),
  trScreen: $("tr-screen"),
  addAmount: $("tr-amount-add"),
  addBtn: $("add-btn"),
  transOp: document.querySelectorAll(".transfer-op"),
  withOp: document.querySelectorAll(".withdraw-op"),
  depOp: document.querySelectorAll(".deposit-op"),
  trans: $("transfer"),
  with: $("withdraw"),
  dep: $("deposit"),
  placeHolder: $("holder-text"),
  viewBalance: $('view-balance'),
  withAmt: $('wd-amount'),
  withBtn: $('wd-btn'),
  withPin: $('wd-pin'),
  recentActBtn: document.querySelectorAll(".transHistory"),
  listRecent: $("list"),
  recentHistory: $("history"),
  homePage: document.querySelectorAll(".homePage"),
  hamburgerMenuBtn: $("hamMenu"),
  hamburgerMenu: $("mobile-menu"),
  loginPageBtn: $("login-btn"),
  loginPage: $("loginPage"),
  mainPage: $("main"),
  loginUsername: $("username"),
  userNameValue: $("user-name-value"),
  loginBalance: $("balance-value"),
  balance: $("balance"),
  logOut: document.querySelectorAll('.logout')
}


if (loginStatus) {
  elements.loginPage.classList.add("hidden");
  elements.mainPage.classList.remove("hidden");
  elements.balance.textContent = amount;
  elements.userNameValue.textContent = userName
  elements.bankName.value = ''
  elements.actNum.value = ''
  elements.withPin.value = ''
  elements.withAmt.value = ''
  elements.addAmount.value = ''
} else {
  elements.loginPage.classList.remove("hidden");
  elements.mainPage.classList.add("hidden")
  elements.loginUsername.value = ''
  elements.loginBalance.value = ''
}


elements.loginPageBtn.addEventListener('click', () => {
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
  } else {
    let loggedIn = true;
    elements.userNameValue.textContent = initUserName;
    elements.balance.textContent = initUserBalance;
    elements.loginPage.classList.add("hidden");
    elements.mainPage.classList.remove("hidden")
    errorMessage(elements.loginBalance, elements.loginUsername, "blue", "blue")
    localStorage.setItem("name", initUserName)
    localStorage.setItem("balance", JSON.stringify(initUserBalance));
    localStorage.setItem("loggedIn", JSON.stringify(loggedIn))
  }
})

elements.hamburgerMenuBtn.addEventListener('click', () => {
  elements.hamburgerMenu.classList.toggle('hidden')
})
elements.hamburgerMenu.addEventListener('click', () => {
  elements.hamburgerMenu.classList.add('hidden')
})
document.addEventListener("click", (e) => {
  if (!elements.hamburgerMenu.contains(e.target) && !elements.hamburgerMenuBtn.contains(e.target)) {
    elements.hamburgerMenu.classList.add("hidden");
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

elements.transOp.forEach(transOpt => {
  transOpt.addEventListener('click', () => {
    activityBtn(elements.trans, elements.transOp,"active-trans")
  })
})

elements.withOp.forEach(withOpt => {
  withOpt.addEventListener('click', () => {
    activityBtn(elements.with, elements.withOp, "active-with")
  })
})

elements.depOp.forEach(depOpt => {
  depOpt.addEventListener('click', () => {
    activityBtn(elements.dep, elements.depOp, "active-dep")
  })
})

function activityBtn(page, option, class1) {
  elements.msg.classList.remove("hidden")
  elements.msg.textContent = ''
  elements.placeHolder.classList.add("hidden")
  // Hide all pages
  elements.dep.classList.add("hidden")
  elements.with.classList.add("hidden")
  elements.trans.classList.add("hidden")

  // Show selected page
  page.classList.remove("hidden")
  elements.depOp.forEach(el => el.classList.remove("active-dep"))
  elements.withOp.forEach(el => el.classList.remove("active-with"))
  elements.transOp.forEach(el => el.classList.remove("active-trans"))
  option.forEach(el => el.classList.add(class1))
  elements.recentHistory.classList.add("hidden")
  elements.recentActBtn.forEach(el => el.classList.remove("active-link"))
  elements.homePage.forEach(el => el.classList.remove("active-link"))
  elements.msg.style.textAlign = 'left'
  elements.msg.style.padding = '0'
}

const Persons = {
  Samuel: {
    fullname: 'Samuel Anietie Akpabio',
    accountNumber: '1234',
    bank: 'FCMB'
  },
  Francis: {
    fullname: 'Francis Ini Ibiok',
    accountNumber: '2345',
    bank: 'WEMA'
  },
  Edidiong: {
    fullname: 'Edidiong Nseobong Reuben',
    accountNumber: '5678',
    bank: 'Fidelity'
  },
  Ekemini: {
    fullname: 'Ekemini Sunday Umo',
    accountNumber: '6789',
    bank: 'Access'
  }
}

function test() {
  console.log("working")
}

function clr() {
  elements.dep.classList.add("hidden")
  elements.trans.classList.add("hidden")
  elements.with.classList.add("hidden")
  elements.depOp.classList.remove("active-dep")
  elements.depOp.forEach(depOp => {
    depOp.classList.remove('active-dep')
  })
  elements.withOp.forEach(withOp => {
    withOp.classList.remove('active-with')
  })
  elements.transOp.forEach(transOp => {
    transOp.classList.remove('active-trans')
  })
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
  const addValue = elements.addAmount.value;
  amount = JSON.parse(localStorage.getItem("balance"));

  if (addValue > 3000) {
    elements.msg.textContent = `Unsuccessful, your amount exceeded the limit of 3000`
    errorMessage(elements.addAmount)
    return
  } else if (addValue < 100) {
    elements.msg.textContent = `Unsuccessful, your amount is below N100`
    errorMessage(elements.addAmount)
    return
  } else if (addValue <= 3000 && addValue >= 100) {
    newBalance = amount + Number(addValue)
    elements.balance.textContent = `N${newBalance}`
    elements.msg.textContent = `You have successfully added N${Number(addValue)} to your balance`
    elements.msg.style.color = 'green'
    elements.addAmount.style.border = '2px solid green'
    elements.addAmount.style.outline = 'none'
    transHistory.push(`You deposited N${Number(addValue)}`)
    localStorage.setItem("history", JSON.stringify(transHistory))
    elements.balance.textContent = newBalance;
    localStorage.setItem("balance", JSON.stringify(newBalance))
    elements.addAmount.value = '';
  }
}

function transfer(clientName) {
  const trAmount = elements.transferAmount.value;
  amount = JSON.parse(localStorage.getItem("balance"));

  if (amount == 0) {
    elements.transferAmount.disabled = 'true'
    return elements.msg.textContent = `You have no money, fam`
  }

  if (trAmount < 100) {
    elements.msg.textContent = `Unsuccessfull! - amount below N100`
    errorMessage()
    elements.transferAmount.value = ''
    return
  } else if (trAmount > amount) {
    elements.msg.textContent = `Unsuccessfull! - Number above balance`
    errorMessage()
    elements.transferAmount.value = ''
    return
  } else if (trAmount <= amount && trAmount >= 100) {
    newBalance = amount - trAmount
    elements.balance.textContent = `N${newBalance}`;
    elements.msg.textContent = `Your transfer of N${trAmount} to ${clientName} has been succesfull`
    elements.msg.style.color = 'green'
    transHistory.push(`You transfered N${Number(trAmount)}`)
    localStorage.setItem("history", JSON.stringify(transHistory))
    elements.balance.textContent = newBalance;
    localStorage.setItem("balance", JSON.stringify(newBalance))
    elements.transferAmount.value = ''
    elements.actNum.value = ''
    elements.bankName.value = ''
    elements.nextBtn.classList.add('hidden')
    elements.trScreen.classList.add("hidden")
  }
}

function withdraw() {
  let value = Number(elements.withAmt.value);
  let pin = Number(elements.withPin.value);
  amount = JSON.parse(localStorage.getItem("balance"));

  if (value == '' || value < 100) {
    elements.msg.textContent = 'Enter a number above 100'
    errorMessage(elements.withAmt, elements.withPin, "red", "blue")
    return
  } else if (pin < 1000 || pin == '') {
    elements.withAmt.disabled = true
    elements.msg.textContent = 'Enter a 4 digit pin'
    errorMessage(elements.withPin, elements.withAmt, "red", "blue")
    return
  } else if (value > amount) {
    elements.withAmt.disabled = false
    elements.msg.textContent = `Insufficient funds`
    elements.withAmt.value = ''
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
    elements.withAmt.value = ''
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
        elements.nextBtn.classList.remove('hidden')
        elements.nextBtn.addEventListener('click', () => {
          elements.trScreen.classList.remove("hidden")
          elements.btn.addEventListener('click', () => {
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

elements.checkBtn.addEventListener('click', () => {
  checkButton()
})

elements.addBtn.addEventListener('click', () => {
  deposit()
})

elements.withBtn.addEventListener('click', () => {
  withdraw()
})

//to be modified

// elements.homePage.addEventListener('click', () => {
//   elements.homePage.classList.add("active-link")
//   elements.recentActBtn.classList.remove("active-link")
//   elements.placeHolder.classList.remove("hidden")
//   elements.recentHistory.classList.add("hidden")
//   clr()
//   elements.msg.textContent = ''
//   elements.msg.classList.add("hidden")
// })

//to be deleted:

// elements.homePageMobile.addEventListener('click', () => {
//   elements.homePageMobile.classList.add("active-link")
//   elements.recentActBtnMobile.classList.remove("active-link")
//   elements.placeHolder.classList.remove("hidden")
//   elements.recentHistory.classList.add("hidden")
//   clr()
//   elements.msg.textContent = ''
//   elements.msg.classList.add("hidden")
// })

//Transaction History
// elements.recentActBtn.addEventListener('click', () => {
//   transactions(elements.recentActBtn, elements.homePage)
// })

function transactions(btn, page) {
  transHistory = JSON.parse(localStorage.getItem("history")) || []
  elements.placeHolder.classList.add("hidden")
  btn.classList.add("active-link")
  page.classList.remove("active-link")
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

// elements.recentActBtnMobile.addEventListener('click', () => {
//   transactions(elements.recentActBtnMobile, elements.homePageMobile)
// })

elements.logOut.forEach(logout => {
  logout.addEventListener('click', () => {
    localStorage.clear()
    elements.loginPage.classList.remove("hidden");
    elements.mainPage.classList.add("hidden");
    elements.homePage.classList.add("active-link")
    elements.homePageMobile.classList.add("active-link")
    elements.recentActBtn.classList.remove("active-link")
    elements.recentActBtnMobile.classList.remove("active-link")
    elements.placeHolder.classList.remove("hidden")
    elements.recentHistory.classList.add("hidden")
    elements.loginUsername.value = ''
    elements.loginBalance.value = ''
    clr()
    elements.msg.textContent = ''
    elements.msg.classList.add("hidden")
  })
})
