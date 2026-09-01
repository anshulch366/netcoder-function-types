// Question 1 

function calculateNNumber(num1, num2) {
    return num1 + num2;
}

num1 = Number(prompt("Enter your account balance"));
num2 = Number(prompt("Enter Withdrwal amount"));

if (num2 > num1) {
    alert("Insufficient funds");
    console.log("Insufficient funds");

    if (num1 > num2){
        console.log("Remaining balance: " + (num1 - num2));
    }
}
