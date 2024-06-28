//Write your solution in this file!
var customerName = "bob";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName;
}
function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "betty";

function changeLeastFavoriteCustomer() {
  const leastFavoriteCustomer = "ann";
  // This will throw an error because you cannot reassign a constant
  throw new TypeError("Assignment to constant variable.");
}

// upperCaseCustomerName();

// setBestCustomer();

// overwriteBestCustomer();

// try {
//   changeLeastFavoriteCustomer();
// } catch (error) {
//   console.error(error);
// }
