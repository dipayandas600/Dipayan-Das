import React from "react";
import "./App.css";
import Navber from "../src/components/Navber";
import Home from "../src/components/Home";

const App = () => {
  return (
    <div className="app">
      <Navber />
      <Home />
    </div>
  );
};

export default App;