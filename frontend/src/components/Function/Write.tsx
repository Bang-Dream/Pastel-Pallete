import React from "react";
import "../../scss/Reset.scss";
import "../../scss/Main.scss";
export default function Write() {
  return (
    <div id="default">
      <form action="/add" method="post">
        <input
          id="title"
          type="text"
          name="title"
          className="form-control"
          placeholder="제목"
        />
        <textarea
          id="contents"
          className="form-control"
          name="contents"
          placeholder="내용"
        ></textarea>
        <button id="button" className="btn btn-primary">
          작성
        </button>
        <input id="reset-button" className="btn btn-danger" type="reset" />
      </form>
    </div>
  );
}
