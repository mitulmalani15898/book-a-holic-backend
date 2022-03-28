// Author: Prit Thakkar (B00890731)
const cardRegex = "^(3|4|5){1}[0-9]{14,15}$";
const isCardValid = (paymentDetails) => {
  const validCard = paymentDetails.cardNumber.match(cardRegex);
  if (valid === null) {
    return false;
  }
  if (paymentDetails.securityCode.length != 3) {
    return false;
  }
  if (!isDateValid(paymentDetails.expiry)) {
    return false;
  }
  return true;
};
const isDateValid = (date) => {
  return new Date(date.toDateString()) < new Date(new Date().toDateString());
};

exports.isCardValid = isCardValid;
