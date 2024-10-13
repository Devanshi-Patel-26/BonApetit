import React from "react";
import Main from "./components/Main";
import Login from "./components/Login";
import Register from "./components/Register";
import Recipepg from "./components/Recipepg";
import Aboutus from "./components/Aboutus";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/recipepg" element={<Recipepg />}></Route>
          <Route path="/aboutus" element={<Aboutus />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
