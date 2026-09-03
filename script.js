// Question 1 

// function calculateBalance(balance, withdrawalAmount) {
//     return balance - withdrawalAmount;
// }

// let balance = 1000;
// let withdrawalAmount = 400;

// if (withdrawalAmount > balance  ) {
//     console.log("Insufficient funds");
// }

//     else if (balance > withdrawalAmount){
//         let remainingBalance = calculateBalance(balance, withdrawalAmount);

//         console.log("Total amount : " + balance);
//         console.log("Withdrawal amount: " + withdrawalAmount);
//         console.log("Remaining balance: " + remainingBalance);
//     }







// Question 2

// function shoppingBill(productName, productPrice, quantity, premiumCustomer){
//     let totalPrice = productPrice * quantity;
//     let discount = 0;
//     let premiumCustomerDiscount = 0;

// if(quantity === 0){
//     console.log("Please select atleast 1 quantity");
// }

// if(quantity === 6){
//     discount = 5000;
// }

//  if (premiumCustomer === "yes"){
// premiumCustomerDiscount = 5000;
// }

//     let finalAmount = totalPrice - discount - premiumCustomerDiscount;
//     return {
//         discount: discount,
//         premiumCustomerDiscount: premiumCustomerDiscount,
//         finalAmount: finalAmount
//     };
// }

// let productName = "Asus laptop";
// let productPrice = 20000;
// let quantity = 6;
// let premiumCustomer = "yes";

// if (quantity >= 1){

//        let bill = shoppingBill(
//         productName,
//         productPrice,
//         quantity,
//         premiumCustomer
//     );

//     console.log("----Total bill----");
//     console.log("Product name: " + productName);
//     console.log("total price: " + productPrice);
//     console.log("Total quantity: " + quantity);
//     console.log("Premium Customer: " + premiumCustomer);
//     console.log("Premium customer discount: " + bill.premiumCustomerDiscount);
//     console.log("Additional disctount " + bill.discount);
//     console.log("Final amount to pay: " + bill.finalAmount);
// }







// Question 3 

// function loginSystem(userName, password) {

//     let message = "";

//     if (userName !== "Anshul") {
//         message = "Invalid Username";
//     }
//     else if (password !== "Anshul@12345") {
//         message = "Wrong Password";
//     }
//     else {
//         message = "Login Successful";
//     }

//     return message;
// }

// let userName = "Anshul";
// let password = "Anshul@12345";

// let result = loginSystem(userName, password);

// console.log(result);







// Question 4 

// function mobileRecharge(mobileNumber, rechargeAmount, rechargeType){

//     let xyz = "";

//     if(rechargeAmount === 399){
//         xyz = "Standard plan";
//     }
//     else{
//         console.log("invalid amount");
//     }
//     return xyz;
// }

// let mobileNumber = 1234567890;
// let rechargeAmount = 399;
// let rechargeType = "Prepaid";

// let x = mobileRecharge(mobileNumber, rechargeAmount, rechargeType);

// console.log("Mobile number " + mobileNumber);
// console.log("Recharge amount " + rechargeAmount);
// console.log("Recharge type " + rechargeType);
// console.log("Which plan? = " + x);







// Question 5function deliverySystem(foodItem, pizza, quantity, deliveryLocation){
    
//     let discount = 0;
//     let deliveryCharges = 0;

//     if(quantity === 0){
//         console.log("Enter valid quantity");
//     }

//     if (quantity >= 5){
//         deliveryCharges = 0;
//     }
//     else{
//         deliveryCharges = 50;
//     }

//     let amount = pizza * quantity;

//     if(amount >= 500){
//         discount = 50;
//     }
//     else{
//         discount = 0;
//     }

//     let finalAmount = amount - discount - deliveryCharges;

//     return {
//         discount: discount,
//         deliveryCharges: deliveryCharges,
//         finalAmount: finalAmount
//     }
// }

// let foodItem = "pizza";
// let pizza = 200;
// let quantity = 5;
// let deliveryLocation = "dharamshala";

// let x = deliverySystem(foodItem, pizza, quantity, deliveryLocation);

// if(quantity > 0){
//     console.log("Food item: " + foodItem);
//     console.log("Food item cost: " + pizza);
//     console.log("Quantity: " + quantity);
//     console.log("Delivery location " + deliveryLocation);
//     console.log("delivery charges: " + x.deliveryCharges);
//     console.log("Additional discount: " + x.discount);
//     console.log("Final amount to pay: " + x.finalAmount);
// }





// Question 6


