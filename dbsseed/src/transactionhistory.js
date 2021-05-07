import React, { useState, useEffect } from 'react';
import { useAuth } from './contexts/AuthContext'
const { viewTransactionDetails } = require('./api');

// const custID = 12;
// const accountKey = "od7b0979-0un2-hhbj-wa0j-oujvks2cf3r";


function TransactionHistory() {
    const [trans, setTrans] = useState([]);
    const { user } = useAuth()

    // viewTransactionDetails(custID,accountKey).then(async transactionDetails=>{transactionDetails;});
    // let transactionData = await viewTransactionDetails(custID,accountKey);

    useEffect(() => {
        viewTransactionDetails(user.custID, user.accountKey).then(data => {
            console.log(data)
            setTrans(data)
            // setUsers(data)
        })
    }, [])


    // const [users, setUsers] = useState([
    //     { custID : 1, payeeID : 'payeeid', date : 'date', amount : 'amnt', eGift : 'egift', message: "msg" },
    //     {custID : 2, payeeID : 'payeeid2', date : 'dat2e', amount : 'amnt2', eGift : 'egift2', message: "msg2"}
    // ]);

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
                    {
                        trans.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.custID} </td>
                                    <td>{item.payeeID}</td>
                                    <td>{item.date}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.eGift}</td>
                                    <td>{item.message}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default TransactionHistory;