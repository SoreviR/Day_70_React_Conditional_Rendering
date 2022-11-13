import React from "react";
import Login from "./Login";

var isLoggedIn = false;

const currentTime = new Date().getHours();

function App() {
  return (
    <div className="container">
      {
        //Ternary Operator
        isLoggedIn === true ? <h1>Hello</h1> : <Login />
        //AND Operator
        //currentTime < 12 && <h1>Are you still working?</h1>
      }
    </div>
  );
}

export default App;
