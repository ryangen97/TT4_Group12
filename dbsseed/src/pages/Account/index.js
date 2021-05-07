import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext'
import { Table } from "react-bootstrap"
export default function Account() {
    const [account, setAccount] = useState([])
    const [totalAmount, setTotalAmount] = useState(0)
    const { user } = useAuth()

    useEffect(() => {
        axios.post("https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/accounts", {
            "custID": user.custID,
            "accountKey": user.accountKey
        }, {
                headers: {
                    'x-api-key': 'BDTv5isstyQr8aGI2xNp5CzqSYFCrtXPIAZV4Z40',
                }
            })
            .then(res => {
                var data = res.data;
                var  totalAmount = 0               
                for (let i = 0; i < data.length; i ++){
                    totalAmount += data[i]["availableBal"]
                }

                setAccount(res.data)
                setTotalAmount(totalAmount)
            })
            .catch(err => {

            })
    }, [])

    return (
        <div style={{ margin: "30px" }}>
            <h2>Account Details</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Account Name</th>
                        <th>Account Number</th>
                        <th>Account Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        account.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{item.accountName}</td>
                                    <td>{item.accountNumber}</td>
                                    <td>${item.availableBal}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <div className="d-flex justify-content-end">
                <span>{`Total Available Balance: $${totalAmount}`} </span>
            </div>
        </div>
    )
}


