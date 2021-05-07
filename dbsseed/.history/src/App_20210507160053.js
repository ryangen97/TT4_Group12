import React, { useState } from "react"
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import AddTransactionPage from "./pages/AddTransaction/"
import TransactionHistory from "./transactionhistory.js"
import LoginPage from "./pages/Login/"
import DashboardPage from "./pages/Dashboard"
import axios from 'axios'
import { AuthContextProvider } from './contexts/AuthContext'
import AccountPage from "./pages/Account"

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

//accountKey: "od7b0979-0un2-hhbj-wa0j-oujvks2cf3r"
//custID: 12


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
      <AuthContextProvider>
        <div className="root-container">
          <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
          <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
          <Route path="/login" component={LoginPage}/>
          <PrivateRoute path="/add-transaction" component={AddTransactionPage} />
          <PrivateRoute path="/dashboard" component={DashboardPage} />
          <PrivateRoute path="/account" component={AccountPage} />
          <div className="Login">
            <PrivateRoute path="/transaction-history" component={TransactionHistory} />
          </div>
        </div>
      </AuthContextProvider>
    </Router>
  );
};

export default App;
