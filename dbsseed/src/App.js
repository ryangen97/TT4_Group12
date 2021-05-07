import { useState } from "react";
import "./App.css";
import Main from "./components/dashboard/Main";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import AddTransactionPage from "./pages/AddTransaction/"
import axios from 'axios'
 import {
  BrowserRouter as Router
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
      <div className="root-container">
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
        <AddTransactionPage />
      </div>
    </Router>
  );
};

export default App;
