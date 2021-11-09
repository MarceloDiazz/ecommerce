import React from "react";
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import Register from "./components/Register"
import { Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      
      <Route path="/log">
        <Login />
      </Route>
      <Route path="/register">
      <Register />
      </Route>
  
  
    </div>
  );
}

export default App;
