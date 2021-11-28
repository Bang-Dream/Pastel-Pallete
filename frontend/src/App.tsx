import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <Fragment>
      네브바
      <Outlet />
    </Fragment>
  );
}

export default App;
