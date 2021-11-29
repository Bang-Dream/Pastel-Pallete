import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import "./scss/Main.scss";
import "./scss/Reset.scss";
import Navigation from "./components/Ui/Navbar";
function App() {
  return (
    <>
      <Navigation/>
      <Outlet />
    </>
  );
}

export default App;
