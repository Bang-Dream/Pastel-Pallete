import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Main from "./components/Main/Main";
import Story from "./components/Function/Story";
import Member from "./components/Function/Member";
import Deck from "./components/Function/Deck";
import Illust from "./components/Function//Illust";
import Write from "./components/Function/Write";
import Error from "./components/Error/Error";
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="*" element={<Error />} />
        <Route path="" element={<Main />} />
        <Route path="member" element={<Member />} />
        <Route path="story" element={<Story />} />
        <Route path="deck" element={<Deck />} />
        <Route path="illust" element={<Illust />} />
        <Route path="write" element={<Write />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
