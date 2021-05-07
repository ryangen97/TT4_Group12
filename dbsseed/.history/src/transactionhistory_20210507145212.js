import React, { useState, useEffect } from 'react';
const {viewTransactionDetails} = require('./api');
const custID = 12;
const accountKey = "od7b0979-0un2-hhbj-wa0j-oujvks2cf3r";


function TransactionHistory() {
    const [users,setUsers] = useState([]);
    // viewTransactionDetails(custID,accountKey).then(async transactionDetails=>{transactionDetails;});
    // let transactionData = await viewTransactionDetails(custID,accountKey);
    
    useEffect( () => {
    const transactionData = viewTransactionDetails(custID,accountKey).then(data =>{
        setUsers(data)
    } );

    })
    // const [users, setUsers] = useState([
    //     { custID : 1, payeeID : 'payeeid', date : 'date', amount : 'amnt', eGift : 'egift', message: "msg" },
    //     {custID : 2, payeeID : 'payeeid2', date : 'dat2e', amount : 'amnt2', eGift : 'egift2', message: "msg2"}
    // ]);

    if(users){
    return (
        
        <div className="container">
            <h3 className="p-3 text-center">React - Display a list of items</h3>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>custID</th>
                        <th>payeeID</th>
                        <th>date</th>
                        <th>amount</th>
                        <th>eGift</th>
                        <th>message</th>

                    </tr>
                </thead>
                <tbody>
                    {users && users.map(user =>
                        <tr key={user.custID}>
                            <td>{user.custID} </td>
                            <td>{user.payeeID}</td>
                            <td>{user.date}</td>
                            <td>{user.amount}</td>
                            <td>{user.eGift}</td>
                            <td>{user.message}</td>

                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}else{
    return (<div></div>)
}

export default TransactionHistory;