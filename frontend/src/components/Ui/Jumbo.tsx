import React from "react";
import { Link } from "react-router-dom";
import "../../scss/Reset.scss";
import "../../scss/Main.scss";
import "../../scss/Ui.scss";
export default function Jumbo() {
  return (
    <div className="jumbotron pink">
      <h2 className="display-4 bg-white d-inline-block">뱅드림!</h2>
      <br />
      <span className="lead my-3 bg-white d-inline-block">
        게임 내 등장그룹 파스파레를 주제로 한 페이지
      </span>
      <br className="mt-3" />
      <Link className="btn btn-lg btn-outline-danger" to="board" role="button">
        글쓰러 가기
      </Link>
    </div>
  );
}
