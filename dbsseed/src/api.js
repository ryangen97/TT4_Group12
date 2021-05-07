// const router = require('express').Router();
const api_key = "BDTv5isstyQr8aGI2xNp5CzqSYFCrtXPIAZV4Z40"
// const userName = "Group12"
// const userPass = "2q$bOC%uyST4fIR"
async function loginAcc(userName,userPass){
    const response = await fetch("https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/login", {
        "method":"POST",
        "headers":{
            "x-api-key":api_key
        },
        "body":JSON.stringify({
            "userName":userName,
            "userPass":userPass
        })
    
    });
    const userDetails = await response.json();
    return userDetails
}
//Testing login
// loginAcc().then(userDetails => {
//     console.log(userDetails);
// });

async function sendTransaction(custID,accountKey,payeeID,amount,egift,message){
    const response = await fetch('https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add',{
        "method":"POST",
        "headers":{
            "x-api-key":api_key
        },
        "body":JSON.stringify({
            "custID":custID,
            "accountKey":accountKey,
            "payeeID":payeeID,
            "amount":amount,
            "eGift":egift,
            "message":message
        })
    });
    const successMessage = await response.json();
    return successMessage
}
//Testing send Transation
// sendTransaction.then(successMessage=>{
//     console.log(successMessage);
// });

async function viewTransactionDetails(custID,accountKey){
    const thing_to_pass = {
        "method":"POST",
        "headers":{
            "x-api-key":api_key
        },
        "body":JSON.stringify({
            "custID":custID,
            "accountKey":accountKey
        })
    }
    // console.log(thing_to_pass);
    const response = await fetch('https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view',thing_to_pass);
    const transactionDetails = await response.json();
    return transactionDetails;
}

//Testing view Transaction
// viewTransactionDetails.then(transactionDetails=>{
//     console.log(transactionDetails);
// });

async function viewAccountDetails(custID,accountKey){
    const response = await fetch('https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/accounts',{
        "method":"POST",
        "headers":{
            "x-api-key":api_key
        },
        "body":JSON.stringify({
            "custID":custID,
            "accountKey":accountKey,
        })
    });
    const accountDetails = await response.json();
    return accountDetails;
}
//Testing viewAccount
// viewAccountDetails.then(accountDetails=>{
//     console.log(accountDetails);
// });

module.exports.viewAccountDetails = viewAccountDetails;
module.exports.viewTransactionDetails = viewTransactionDetails;
module.exports.sendTransaction = sendTransaction;
module.exports.loginAcc = loginAcc;