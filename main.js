import getInfo from './info-view.js';
import reserveTicket from './reserve.js';

getInfo();

/**
const birthdayInput = document.querySelector('.intro #birth-date');
const phoneNumberInput = document.querySelector('.intro #phone-number');

 * Adds forward slashes for the birth date input
 * @param {object} event - The action for key up
birthdayInput.onkeyup = function onBirthdayInputType(event) {
  if ((birthdayInput.value.length === 2 || birthdayInput.value.length === 5)
  && birthdayInput.value !== ''
  && event.key !== 'Backspace') {
    birthdayInput.value += '/';
  }
};

/**
 * Adds '-' for the phone number input
 * @param {object} event - The action for key up
phoneNumberInput.onkeyup = function onPhoneNumberInputType(event) {
  if ((phoneNumberInput.value.length === 3 || phoneNumberInput.value.length === 7)
  && phoneNumberInput.value !== ''
  && event.key !== 'Backspace') {
    phoneNumberInput.value += '-';
  }
};


const formName = document.querySelector('.intro #name');
const formPhone = document.querySelector('.intro #phone-number');
const formEmail = document.querySelector('.intro #email');
const formDateOfBirth = document.querySelector('.intro #birth-date');
const formTransactionImage = document.querySelector('.intro #venmo-image');
const formBusWaiver = document.querySelector('.intro #bus-waiver');
const formBusWaiverText = document.querySelector('.intro .file-text-wavier ');
const formTransactionText = document.querySelector('.intro .file-text-venmo');
*/
const formSubmitButton = document.querySelector('.intro #submit-button');
const formBudgetedExpenseYes = document.querySelector('.intro #budgeted-expense-yes');
const formBudgetedExpenseNo = document.querySelector('.intro #budgeted-expense-no');
const formOfficerName = document.querySelector('.intro #officer-name');
const formOfficerPosition = document.querySelector('.intro #officer-position');
const formDirectDeposit = document.querySelector('.intro #direct-deposit');
const formCheck = document.querySelector('.intro #check');
const formAddress = document.querySelector('.intro #address');

/**
 * Changes the text of the file upload to the name of the file
formBusWaiver.onchange = function formBusWaiverOnChange() {
  let fileName = '';
  fileName = this.files[0].name;
  formBusWaiverText.textContent = fileName;
};

/**
 * Changes the text of the file upload to the name of the file
formTransactionImage.onchange = function formTransactionImageOnChange() {
  let fileName = '';
  fileName = this.files[0].name;
  formTransactionText.textContent = fileName;
};
*/
/**
 * Submit form when submit button is clicked
 */

formBudgetedExpenseYes.onclick = function formBudgetedExpenseYesButtonOnclick() {
  formOfficerName.style.visibility = 'hidden';
  formOfficerPosition.style.visibility = 'hidden';
  formBudgetedExpenseNo.checked = false;
  formOfficerName.style.height = '0';
  formOfficerName.style.overflow = 'hidden';
  formOfficerName.style.opacity = '0';
  formOfficerName.style.margin = '0';
  formOfficerName.style.padding = '0';
  formOfficerPosition.style.height = '0';
  formOfficerPosition.style.overflow = 'hidden';
  formOfficerPosition.style.opacity = '0';
  formOfficerPosition.style.margin = '0';
  formOfficerPosition.style.padding = '0';
};

formBudgetedExpenseNo.onclick = function formBudgetedExpenseNoButtonOnclick() {
  formOfficerName.style.visibility = 'visible';
  formOfficerPosition.style.visibility = 'visible';
  formBudgetedExpenseYes.checked = false;
  formOfficerName.style.height = '55px';
  formOfficerName.style.overflow = 'visible';
  formOfficerName.style.opacity = '1';
  formOfficerName.style.margin = '8px auto';
  formOfficerName.style.padding = '12px 0px';
  formOfficerPosition.style.height = '55px';
  formOfficerPosition.style.overflow = 'visible';
  formOfficerPosition.style.opacity = '1';
  formOfficerPosition.style.margin = '8px auto';
  formOfficerPosition.style.padding = '12px 0px';
};

formDirectDeposit.onclick = function formBudgetedExpenseYesButtonOnclick() {
  formAddress.style.visibility = 'hidden';
  formCheck.checked = false;
  formAddress.style.height = '0';
  formAddress.style.overflow = 'hidden';
  formAddress.style.opacity = '0';
  formAddress.style.margin = '0';
  formAddress.style.padding = '0';
};

formCheck.onclick = function formBudgetedExpenseNoButtonOnclick() {
  formAddress.style.visibility = 'visible';
  formDirectDeposit.checked = false;
  formAddress.style.height = '55px';
  formAddress.style.overflow = 'visible';
  formAddress.style.opacity = '1';
  formAddress.style.margin = '8px auto';
  formAddress.style.padding = '12px 0px';
};

formSubmitButton.onclick = function formSubmitButtonOnclick() {
  reserveTicket(
    formName,
    formEmail,
    formPhone,
    formDateOfBirth,
    formTransactionImage,
    formBusWaiver,
  );
};
