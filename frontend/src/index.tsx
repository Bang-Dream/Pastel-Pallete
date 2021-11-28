import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error/Error";
import Story from "./components/Function/Story";
import Deck from "./components/Function/Deck";
import Illust from "./components/Function/Illust";
import Board from "./components/Function/Board";
import Write from "./components/Function/Write";
import Main from "./components/Main/Main";
import App from "./App";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="*" element={<Error />} />
        <Route path="" element={<Main />} />
        <Route path="deck" element={<Deck />} />
        <Route path="story" element={<Story />} />
        <Route path="illust" element={<Illust />} />
        <Route path="board" element={<Board />} />
        <Route path="write" element={<Write />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
