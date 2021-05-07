import React, { useState } from "react";
import "./App.css";
import Main from "./components/dashboard/Main";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import AddTransactionPage from "./pages/AddTransaction/"
import TransactionHistory from "./transactionhistory.js"
import Login from "./Login.js"

import axios from 'axios'
 import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


// axios.interceptors.request.use(
//   config => {
//     config.headers["x-api-key"] = 'BDTv5isstyQr8aGI2xNp5CzqSYFCrtXPIAZV4Z40'
//     return config;
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )

const App = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
    <Router>
      <Switch>
      <div className="root-container">
        <div className="Login"sidebarOpen={false}>
          <Login/>
        </div>
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
        <Route exact path="/transactionHistory" component={TransactionHistory} />
        <Route exact path="/addTransaction" component={AddTransactionPage} />
      </div>
      </Switch>
    </Router>
  );
};

export default App;
