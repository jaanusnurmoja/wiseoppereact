import React from "react";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import Menu from "./components/menu";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Home />
    </div>
  );
}

export default App;
