// Task 1: Variables snd Data Types

let employeeName = "Anthony Smith";
const employeeID = 333;
var isActive = true;

console.log(employeeName, typeof(employeeName));
console.log(employeeID, typeof(employeeID));
console.log(isActive, typeof(isActive)); 



// Task 2: Compound Data Types
let products = ["Mascara", "Lipstick", "Blush"];
const productDetails = {
    price: 34.00,
    name: products, 
    inStock: 300,

}
console.log(products, productDetails);



// Task 3: Assignment Operators

let accountBalance = 7350;

accountBalance += 500;
accountBalance -= 175;
accountBalance *= 4;
accountBalance /= 3;
accountBalance %= 1;
console.log(accountBalance);

// Task 4: Comparison Operators
let employeeScore1 = 5679
let employeeScore2 = 7054
console.log(employeeScore1 < employeeScore2);
console.log(employeeScore1 > employeeScore2);
console.log(employeeScore1 <= employeeScore2);
console.log(employeeScore1 <= employeeScore2);
console.log(employeeScore1 === employeeScore2);
console.log(employeeScore1 !== employeeScore2);