/* eslint-disable */
import React from "react";
import "../../scss/Reset.scss";
import "../../scss/Main.scss";
import Carousel from "../Ui/Carousel";
import Jumbotron from "../Ui/Jumbo";
export default function Main() {
  return (
    <div className="topfix">
      {/* <Carousel></Carousel> */} <Jumbotron />
      <div className="center">
        <h1>현재 만든 것들 목록</h1>
        <ul className="my-3">
          <li>글쓰기, 삭제</li>
        </ul>
        <h1>앞으로 할 것들 목록</h1>
        <ul className="my-3">
          <li>사진 크롤링해서 뿌리기</li>
          <li>완덱, 멤버소개 노가다해서 박아넣기</li>
          <li>글수정, 글상세</li>
          <li>로그인</li>
        </ul>
      </div>
    </div>
  );
}
