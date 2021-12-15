import React from "react";
import "../../scss/Reset.scss";
import "../../scss/Main.scss";
import { Link } from "react-router-dom";
// import $ from "jquery";
export default function Post(props: any) {
  const refreshOne = () => {
    window.location.reload();
  };

  const deleteOne = (e: any) => {
    $.ajax({
      method: "DELETE",
      url: "/delete",
      data: { _id: e.target.dataset.id },
    });
    console.log(e.target.dataset.id);
  };
  return (
    <form key={props.index} action="/delete" method="delete">
      <Link to="#" id="post">
        <h4 style={{ marginTop: "30px" }}>
          {/* {만약 개추 > 10 이라면 념글 아이콘 보여주기} */}
          {props.data}
          <span id="comment">(0) &nbsp;&nbsp;</span>
          <button
            className="btn btn-danger delete"
            onClick={deleteOne}
            data-id={props.id[props.index]}
          >
            X
          </button>
          <button className="btn btn-success ml-3" onClick={refreshOne}>
            새고로침
          </button>
        </h4>
        <hr />
      </Link>
    </form>
  );
}
