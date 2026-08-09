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
  trMsg: $("tr-message"),
  nextBtn: $("start-transfer"),
  trScreen: $("tr-screen"),
  addAmount: $("tr-amount-add"),
  addBtn: $("add-btn")
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
    elements.actNum.style.outline = 'none'
  } else {
    elements.actNum.style.outline = 'none'
    elements.bankName.style.outline = 'none'
    elements.msg.textContent = 'Checking...'

    for (const [person, details] of Object.entries(Persons)) {
      if (actNumber == details.accountNumber && selBank == details.bank) {
        console.log('yay')
        elements.msg.textContent = `Do you want to transfer to ${details.fullname}? If not, try again`

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
  const addValue = elements.addAmount.value;
  amount = Number(elements.balance.textContent)

  if (addValue <= 3000 && addValue >= 100) {
    newBalance = amount + Number(addValue)
    elements.balance.textContent = `N${newBalance}`
    elements.msg.textContent = `You have successfully added N${Number(addValue)} to your balance`
    elements.msg.style.color = 'black'
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
  elements.addAmount.value = ''

})