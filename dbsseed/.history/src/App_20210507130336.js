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
   
      /*
      <Router>
      <Switch>

          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
        </Router>
      */
      
      <div>
        <Login/>
      </div>

    
  );
}

export default App;