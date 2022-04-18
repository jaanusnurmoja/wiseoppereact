import React from "react";
import "./App.css";
import Header from "./components/header";
import Menu from "./components/menu";
import Content from "./components/content";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Content />
    </div>
  );
}

export default App;
