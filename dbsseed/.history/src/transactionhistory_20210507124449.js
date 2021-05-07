import React, { useState } from 'react';

function TransactionHistory() {
    const [users, setUsers] = useState([
        { custID : 1, payeeID : 'payeeid', date : 'date', amount : 'amnt', eGift : 'egift', message: "msg" },
    ]);

    return (
        <div className="container">
            <h3 className="p-3 text-center">React - Display a list of items</h3>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
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
}

export default TransactionHistory;