import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [user, setLoginUser] = useState({});
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/">
            {user && user._id ? (
              <Home setLoginUser={setLoginUser} />
            ) : (
              <Login setLoginUser={setLoginUser} />
            )}
          </Route>
          <Route path = "/login" element={<Login setLoginUser = {setLoginUser} />}/>
          <Route path="/register">
            <Register />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
