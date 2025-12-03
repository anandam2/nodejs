let userName = "Alex";
let initialBalance = 1000;
let amountAdded = 500;
let amountSpent = 700;
function updateWallet(name, balance, added, spent) {
    return (name === "Guest") ? "Access Denied" : balance + added - spent;}
let finalBalance = updateWallet(userName,initialBalance, amountAdded, amountSpent);
console.log("Final balance is",finalBalance);
console.log("Final balance is greater than 0 ?",finalBalance>0);
console.log("Type of Final balance is",typeof finalBalance);
