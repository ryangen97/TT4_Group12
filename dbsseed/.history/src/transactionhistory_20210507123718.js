import React, { useState } from 'react';
import ReactDOM from 'react-dom'

var ReactTable = window.ReactTable.default
 
export default class TransactionHistory extends React.Component {
    
	constructor(props) {
        var ReactDOM = require('react-dom') 
  	super(props);
    
  	this.state = {
    	data: [
      	{
        	firstName: "Alexander",
          lastName: "Hamilton",
          age: 19
        },
        {
        	firstName: "Eliza",
          lastName: "Schuyler",
          age: 18
        },
        {
        	firstName: "George",
          lastName: "Washington",
          age: 27
        },
        {
        	firstName: "Aaron",
          lastName: "Burr",
          age: 20
        }
      ]
    }
  }
  
  render() {
    let { data } = this.state;
    return (
        <ReactTable
          columns={[
            {
              Header: "First Name",
              accessor: "firstName"
            },
            {
              Header: "Last Name",
              id: "lastName",
              accessor: d => d.lastName
            },
            {
              Header: "Age",
              accessor: "age"
            }
          ]}
          data={data}
        />
    );
  }
}

ReactDOM.render(
  <TransactionHistory />,
  document.getElementById('root')
);


/*
function TransactionHistory() {
    const [users, setUsers] = useState([
        { id: 1, firstName: 'Frank', lastName: 'Murphy', email: 'frank.murphy@test.com', role: 'User' },
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
*/
