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
  withPin: $('wd-pin')
}

const transHistory = []

elements.viewBalance.addEventListener('click', () => {
  console.log('Reddit');
  // elements.balance.textContent = 'XXXXXXX'
})

elements.transOp.addEventListener('click', () => {
  test(elements.trans)
  elements.dep.classList.add("hidden")
  elements.with.classList.add("hidden")
  bg(elements.transOp, "active-trans")
  elements.depOp.classList.remove("active-dep")
  elements.withOp.classList.remove("active-with")
})
elements.withOp.addEventListener('click', () => {
  test(elements.with)
  elements.dep.classList.add("hidden")
  elements.trans.classList.add("hidden")
  bg(elements.withOp, "active-with")
  elements.depOp.classList.remove("active-dep")
  elements.transOp.classList.remove("active-trans")
})
elements.depOp.addEventListener('click', () => {
  test(elements.dep)
  elements.with.classList.add("hidden")
  elements.trans.classList.add("hidden")
  bg(elements.depOp, "active-dep")
  elements.transOp.classList.remove("active-trans")
  elements.withOp.classList.remove("active-with")
})

function bg(element, className) {
  element.classList.toggle(className)
}

function test(id) {
  elements.msg.classList.remove("hidden")
  elements.placeHolder.classList.add("hidden")
  id.classList.toggle("hidden");
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

function deposit() {
  const addValue = elements.addAmount.value;
  amount = Number(elements.balance.textContent)

  if (addValue <= 3000 && addValue >= 100) {
    newBalance = amount + Number(addValue)
    elements.balance.textContent = `N${newBalance}`
    elements.msg.textContent = `You have successfully added N${Number(addValue)} to your balance`
    elements.msg.style.color = 'black'
    transHistory.push(`You deposited N${Number(addValue)}`)
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
    transHistory.push(`You transfered N${Number(amount)}`)
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
    transHistory.push(`You withdrawed N${Number(amount)}`)
    elements.msg.style.color = 'green'
    elements.withAmt.value = ''
    elements.withPin.value = ''
  } else if (value == '' || value < 100) {
    elements.msg.textContent = 'Ensure a valid account number'
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