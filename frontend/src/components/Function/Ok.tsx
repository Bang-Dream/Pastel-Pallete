import React from "react";
import "../../scss/Reset.scss";
import "../../scss/Main.scss";
import { Link } from "react-router-dom";
export default function Ok() {
  return (
    <div id="title">
      <Link to="/">데이터 전송 완료</Link>
    </div>
  );
}
