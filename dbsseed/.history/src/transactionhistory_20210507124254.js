import React, { useState } from 'react';

function TransactionHistory() {
    const [users, setUsers] = useState([
        { custID : 1, payeeID : 'Frank', date : 'Murphy', amount : 'frank.murphy@test.com', eGift : 'User', message: "" },
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
                        <tr key={user.id}>
                            <td>{user.firstName} {user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default TransactionHistory;