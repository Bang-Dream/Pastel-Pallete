import React from "react";
import "../../scss/Reset.scss";
import "../../scss/Main.scss";
import { Link } from "react-router-dom";
export default function Ok() {
  return (
    <div id="title">
      <div className="ok">
        <h1>
          <Link to="/">작성 완료!</Link>
        </h1>
        <Link to="/">
          <button className="mainBtn btn btn-outline-primary">
            메인화면으로 가기
          </button>
        </Link>
        <br />
        <Link to="/board">
          <button className="mainBtn btn btn-outline-success">
            게시판으로 가기
          </button>
        </Link>
      </div>
    </div>
  );
}
