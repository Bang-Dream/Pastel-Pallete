/* eslint-disable */
import { useState } from "react";
import "../../scss/Reset.scss";
import "../../scss/Main.scss";
import { Link } from "react-router-dom";
export default function Board() {
  let [게시글, 게시글변경] = useState([
    "학교 가기 싫다",
    "뱅드림 하고싶다",
    "왜 2교시는 사회야",
  ]);
  return (
    <div className="center pt-5">
      {/* <div id="topbar"><h3>-게시판입니다-</h3></div> */}
      {[1, 2, 3].map((a, i) => (
        <Link to="#" id="post" key={i}>
          <h4 style={{ marginTop: "70px" }}>
            {/* {만약 개추 > 10 이라면 념글 아이콘 보여주기} */}
            {a} {게시글[i]}
            <span id="comment">(0)</span>
          </h4>
        </Link>
      ))}
      <Link to="/write">
        <button className="mt-5 btn btn-primary">글쓰기</button>
      </Link>
    </div>
  );
}
