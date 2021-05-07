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
      <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/about">
  
    </div>

    
  );
}

export default App;
