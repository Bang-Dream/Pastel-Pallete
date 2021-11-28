import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./components/Test";
import Error from "./components/Error/Error";
import Main from "./components/Main/Main";
import App from "./App";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="*" element={<Error />} />
        <Route path="" element={<Main />} />
        <Route path="test" element={<Test />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
