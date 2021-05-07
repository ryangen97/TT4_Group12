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

async function sendTransaction(custID,accountKey,payeeID,amount){
    const response = await fetch('https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add',{
        "method":"POST",
        "headers":{
            "x-api-key":api_key
        },
        "body":{
            "custID":custID,
            "accountKey":accountKey,
            "payeeID":payeeID,
            "amount":amount,
            "eGift":false,
            "message":" "
        }
    });
    const successMessage = await response.json();
    return successMessage
}
//Testing send Transation
// sendTransaction.then(successMessage=>{
//     console.log(successMessage);
// });

async function viewTransactionDetails(custID,accountKey){
    const response = await fetch('https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view',{
        "method":"POST",
        "headers":{
            "x-api-key":api_key
        },
        "body":{
            "custID":custID,
            "accountKey":accountKey,
        }
    });
    const transactionDetails = await response.json();
    return transactionDetails
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
        "body":{
            "custID":custID,
            "accountKey":accountKey,
        }
    });
    const accountDetails = await response.json();
    return accountDetails
}
//Testing viewAccount
// viewAccountDetails.then(accountDetails=>{
//     console.log(accountDetails);
// });

module.exports.viewAccountDetails = viewAccountDetails;
module.exports.viewTransactionDetails = viewTransactionDetails;
module.exports.sendTransaction = sendTransaction;
module.exports.loginAcc = loginAcc;