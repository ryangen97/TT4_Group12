import TranscationHistory from "./transactionhistory"
import Login from "./Login.js"
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  return (
    <div className="Login">
      <TranscationHistory/>
    </div>

    
  );
}

export default App;
