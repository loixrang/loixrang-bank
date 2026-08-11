let amount;
let newBalance;
const $ = id => document.getElementById(id);
const elements = {
  transferAmount: $("tr-amount"),
  balance: $("balance"),
  btn: $("tr-btn"),
  actNum: $("act-num"),
  bankName: $("bank"),
  checkBtn: $("check-act"),
  msg: $("message"),
  nextBtn: $("start-transfer"),
  trScreen: $("tr-screen"),
  addAmount: $("tr-amount-add"),
  addBtn: $("add-btn"),
  transOp: $("transfer-op"),
  withOp: $("withdraw-op"),
  depOp: $("deposit-op"),
  trans: $("transfer"),
  with: $("withdraw"),
  dep: $("deposit"),
  placeHolder: $("holder-text"),
  viewBalance: $('view-balance'),
  withAmt: $('wd-amount'),
  withBtn: $('wd-btn'),
  withPin: $('wd-pin'),
  recentActBtn: $("transHistory"),
  listRecent: $("list"),
  recentHistory: $("history"),
  homePage: $("homePage"),
  hamburgerMenuBtn: $("hamMenu"),
  hamburgerMenu: $("mobile-menu")
}

elements.hamburgerMenuBtn.addEventListener('click', () => {
  test()
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

const transHistory = []

elements.viewBalance.addEventListener('click', () => {
  console.log('Reddit');
  // elements.balance.textContent = 'XXXXXXX'
})

elements.transOp.addEventListener('click', () => {
  activityBtn(elements.trans, elements.dep, elements.with, elements.transOp, elements.depOp, elements.withOp, "active-trans", "active-dep", "active-with")
})
elements.withOp.addEventListener('click', () => {
  activityBtn(elements.with, elements.dep, elements.trans, elements.withOp, elements.depOp, elements.transOp, "active-with", "active-dep", "active-trans")
})
elements.depOp.addEventListener('click', () => {
  activityBtn(elements.dep, elements.with, elements.trans, elements.depOp, elements.withOp, elements.transOp, "active-dep", "active-with", "active-trans")
})

function activityBtn(element1, element2, element3, element1a, element2a, element3a, class1, class2, class3) {
  elements.msg.classList.remove("hidden")
  elements.msg.textContent = ''
  elements.placeHolder.classList.add("hidden")
  element1.classList.remove("hidden")
  element2.classList.add("hidden")
  element3.classList.add("hidden")
  element1a.classList.add(class1)
  element2a.classList.remove(class2)
  element3a.classList.remove(class3)
  elements.recentHistory.classList.add("hidden")
  elements.recentActBtn.classList.remove("active-link")
  elements.homePage.classList.remove("active-link")
  elements.msg.style.textAlign = 'left'
  elements.msg.style.padding = '0'
}

const Persons = {
  Samuel: {
    fullname: 'Samuel Anietie Akpabio',
    accountNumber: '0167392038',
    bank: 'FCMB'
  },
  Francis: {
    fullname: 'Francis Ini Ibiok',
    accountNumber: '0167382038',
    bank: 'WEMA'
  },
  Edidiong: {
    fullname: 'Edidiong Nseobong Reuben',
    accountNumber: '0167372038',
    bank: 'Fidelity'
  },
  Ekemini: {
    fullname: 'Ekemini Sunday Umo',
    accountNumber: '0167362038',
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
  elements.withOp.classList.remove("active-with")
  elements.transOp.classList.remove("active-trans")
}

function deposit() {
  const addValue = elements.addAmount.value;
  amount = Number(elements.balance.textContent)

  if (addValue <= 3000 && addValue >= 100) {
    newBalance = amount + Number(addValue)
    elements.balance.textContent = `N${newBalance}`
    elements.msg.textContent = `You have successfully added N${Number(addValue)} to your balance`
    elements.msg.style.color = 'black'
    transHistory.push(`You deposited N${Number(addValue)}`)
    console.log(transHistory)
  } else if (addValue > 3000) {
    elements.msg.textContent = `Unsuccessful, your amount exceeded the limit of 3000`
    elements.msg.style.color = 'red'
    newBalance = amount;
    elements.balance.textContent = amount;
  } else if (addValue < 100) {
    elements.msg.textContent = `Unsuccessful, your amount is below N100`
    elements.msg.style.color = 'red'
    newBalance = amount;
    elements.balance.textContent = amount;
  }
  elements.balance.textContent = newBalance;
  elements.addAmount.value = '';
}

function transfer() {
  const trAmount = elements.transferAmount.value;
  amount = Number(elements.balance.textContent);

  if (amount == 0) {
    elements.transferAmount.disabled = 'true'
    return elements.trMsg.textContent = `You have no money, fam`
  }

  if (trAmount <= amount && trAmount >= 100) {
    newBalance = amount - trAmount
    elements.balance.textContent = `N${newBalance}`;
    elements.msg.textContent = `Your transfer has been succesfull`
    elements.msg.style.color = 'green'
    transHistory.push(`You transfered N${Number(trAmount)}`)
    console.log(transHistory)
  } else if (trAmount < 100) {
    elements.msg.textContent = `Your transfer is unsuccessfull!! - number below N100`
    elements.msg.style.color = 'red'
    newBalance = amount;
    elements.balance.textContent = amount;
  } else if (trAmount > amount) {
    elements.msg.textContent = `Your transfer is unsuccessfull!! - number above balance`
    elements.msg.style.color = 'red'
    newBalance = amount;
    elements.balance.textContent = amount;
  }
  elements.balance.textContent = newBalance;
  elements.transferAmount.value = ''
}

function checkButton() {
  let actNumber = elements.actNum.value;
  let selBank = elements.bankName.value

  if (actNumber == '') {
    elements.msg.textContent = 'Please enter an account number'
    elements.actNum.style.outline = '1px solid black'
    elements.actNum.style.border = '1px solid black'
  } else if (selBank == 'null') {
    elements.msg.textContent = 'Please select a bank'
    elements.bankName.style.outline = '1px solid black'
    elements.bankName.style.border = '1px solid black'
    elements.actNum.style.outline = '#5B35D5'
    elements.actNum.style.border = '#5B35D5'
  } else {
    elements.actNum.style.outline = 'none'
    elements.bankName.style.outline = 'none'
    elements.msg.textContent = 'Checking...'

    for (const [person, details] of Object.entries(Persons)) {
      if (actNumber == details.accountNumber && selBank == details.bank) {
        console.log('yay')
        elements.msg.textContent = details.fullname
        elements.msg.style.color = '#5B35D5'
        elements.nextBtn.classList.remove('hidden')
        elements.nextBtn.addEventListener('click', () => {
          elements.trScreen.classList.remove("hidden")
          elements.btn.addEventListener('click', () => {
            transfer()
          })
        })
        return
      } else {
        elements.msg.textContent = `The account doesn't exist`
        console.log('ney')
      }
    }
  }
}

elements.checkBtn.addEventListener('click', () => {
  checkButton()
})

// for (const [person, details] of Object.entries(Persons)) {
//   console.log(person);
//   console.log(details.fullname);
//   console.log(details.accountNumber);
//   console.log(details.bank);
// }

elements.addBtn.addEventListener('click', () => {
  deposit()
})

elements.withBtn.addEventListener('click', () => {
  let value = Number(elements.withAmt.value);
  let pin = Number(elements.withPin.value);
  amount = Number(elements.balance.textContent)

  if (value >= 100 && value <= amount && pin >= 1000) {
    elements.msg.textContent = `Withdrawal of N${value} is succesful`;
    newBalance = amount - value
    transHistory.push(`You withdrawed N${Number(value)}`)
    elements.msg.style.color = 'green'
    elements.withAmt.value = ''
    elements.withPin.value = ''
  } else if (value == '' || value < 100) {
    elements.msg.textContent = 'Ensure a amount'
    elements.msg.style.color = 'red'
    return
  } else if (pin < 1000 || pin == '') {
    elements.msg.textContent = 'Enter a 4 digit pin'
    elements.msg.style.color = 'red'
    return
  } else if (value > amount) {
    elements.msg.textContent = `Insufficient funds`
    elements.msg.style.color = 'red'
    elements.withAmt.value = ''
    elements.withPin.value = ''
    return
  }
  elements.balance.textContent = newBalance;
  console.log(transHistory)
})

elements.homePage.addEventListener('click', () => {
  elements.homePage.classList.add("active-link")
  elements.recentActBtn.classList.remove("active-link")
  elements.placeHolder.classList.remove("hidden")
  elements.recentHistory.classList.add("hidden")
  clr()
  elements.msg.textContent = ''
  elements.msg.classList.add("hidden")
})

//Transaction History
elements.recentActBtn.addEventListener('click', () => {
  elements.placeHolder.classList.add("hidden")
  elements.recentActBtn.classList.add("active-link")
  elements.homePage.classList.remove("active-link")
  elements.recentHistory.classList.remove("hidden")
  clr()
  const list = document.createElement('li');
  if (transHistory.length < 1) {
    elements.msg.classList.remove("hidden")
    elements.msg.textContent = `You have no recent activity`
    elements.msg.style.textAlign = 'Center'
    elements.msg.style.padding = '2em'
  } else {
    elements.listRecent.textContent = ''
    // for (let i = 0; i < transHistory.length; i++) {
    //   list.textContent = transHistory[i]
    //   elements.listRecent.append(list)
    //   elements.msg.classList.add("hidden")
    //   console.log(list.textContent)
    //   console.log(list)
    // }
    // transHistory.forEach(transaction => {
    //   elements.msg.classList.add("hidden")
    //   const list = document.createElement('li')
    //   list.textContent = transaction
    //   elements.listRecent.appendChild(list)
    // })
    for (let i = transHistory.length - 1; i >= 0; i--) {
      elements.msg.classList.add("hidden")
      const list = document.createElement('li')
      list.textContent = transHistory[i]
      elements.listRecent.appendChild(list)
    }
  }
})