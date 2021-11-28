import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import "./scss/Main.scss";
import "./scss/Reset.scss";
import Navbar from "./components/Ui/Navbar";
function App() {
  return (
    <Fragment>
      <Navbar></Navbar>
      하이
      <Outlet />
    </Fragment>
  );
}

export default App;
