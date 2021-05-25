var paycheck = 400;
var bankAccount = 1000;

var carPaymentIsPaid = false;
var carPayment = 450;

// Try to pay car payment with paycheck
if (paycheck >= carPayment) {
  paycheck -= carPayment;
  carPaymentIsPaid = true;
} else if (bankAccount >= carPayment) {
  bankAccount -= carPayment;
  carPaymentIsPaid = true;
} else {
}

if (carPaymentIsPaid) {
  console.log("Thank you for paying your car payment!");
} else {
  console.log("Please pay your car payment.");
}
console.log("- Paycheck = " + paycheck);
console.log("- bankAccount = " + bankAccount);
