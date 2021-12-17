/* eslint-disable */
import { useState, useEffect } from "react";
import "../../scss/Reset.scss";
import "../../scss/Main.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import $ from "jquery";
export default function Board() {
  let [post, setPost] = useState<string[]>([]);
  let [id, setId] = useState<number[]>([]);

  var idCopy: number[] = [];

  useEffect(() => {
    axios.get("http://localhost:3001/api/list").then((res) => {
      // console.log(res.data);

      res.data.map(
        (data: string, index: number): string[] | number[] | number =>
          idCopy.unshift(res.data[index]._id)
      );
      setId(idCopy);
      console.log(idCopy);

      res.data.map((data: string, index: number) => {
        var titleinput: any = Object.values(res.data[index].title);
        // console.log(titleinput);
      });
      var copy = [...post];

      for (var i = 0; i < res.data.length; i++) {
        copy.unshift(res.data[i].title);
      }
      setPost(copy);

      // console.log(post);
    });
  }, []);

  const refreshOne = () => {
    window.location.reload();
  };

  const deleteOne = (e: any) => {
    $.ajax({
      method: "DELETE",
      url: "/delete",
      data: { _id: e.target.dataset.id },
    });
    refreshOne();
    console.log(e.target.dataset.id);
  };

  return (
    <ul className="center">
      {post.map((data, index) => (
        <Link to="#" id="post">
          <h4 style={{ marginTop: "30px" }}>
            {id[index]}번 게시물 :{" "}
            {/* {만약 개추 > 10 이라면 념글 아이콘 보여주기} */}
            {data}
            <span id="comment">( 댓글 )&nbsp;&nbsp;</span>
            <button
              className="btn btn-danger delete"
              onClick={deleteOne}
              data-id={id[index]}
            >
              X
            </button>
          </h4>
          <hr />
        </Link>
      ))}
      <br />
      <Link to="/write">
        <button className="mt-5 mb-5 btn btn-primary">글쓰기</button>
      </Link>
    </ul>
  );
}
