import "./App.css";
import { useState, useEffect } from "react";


function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');



  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit.");
  };

  return (
    <div className="app">
      <h1>Create Account</h1>

      <form onSubmit={submitHandler}>
        <div className="input-cont">
          <label>Username</label>
          <input
            type="username"
            placeholder="Enter username*"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password*"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />


          <button>SUBMIT</button>
        </div>
      </form>



    </div>
  );
}

export default App;


