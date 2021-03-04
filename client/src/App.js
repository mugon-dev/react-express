import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    fetch("http://192.168.0.174:3002/user")
      .then((res) => res.json())
      .then((res) => {
        console.log("use", res);
        setUser(res);
      });
  }, []);
  console.log(user);
  return (
    <div className="App">
      <div></div>
      <h1>{user[0].username}</h1>
    </div>
  );
}

export default App;
