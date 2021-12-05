/* eslint-disable */
import { useState, useEffect } from "react";
import "../../scss/Reset.scss";
import "../../scss/Main.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import $ from "jquery";
export default function Board() {
  let [post, setPost] = useState(["이건 어케 없애는지 모를 기본 게시글"]);
  let [id, setId] = useState([-1]);
  // const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:3001/api/list").then((res) => {
      var data = res.data;
      var titleCopy = [...post];
      var idCopy: number[] = id;

      data.map((data: string, index: number): string | number =>
        titleCopy.unshift(res.data[index].title)
      );
      data.map((data: string, index: number): string[] | number[] | number =>
        idCopy.unshift(res.data[index]._id)
      );
      console.log(idCopy);
      setPost(titleCopy);
      setId(idCopy);
      console.log("state setting ok");
    });
  }, []);

  const deleteOne = (e: any) => {
    $.ajax({
      method: "DELETE",
      url: "/delete",
      data: { _id: e.target.dataset.id },
    }).done((res) => {
      alert("dmddo");
    });
  };

  return (
    <ul className="center">
      {post.map((data, index) => (
        <li key={index}>
          <Link to="#" id="post">
            <h4 style={{ marginTop: "30px" }}>
              {/* {만약 개추 > 10 이라면 념글 아이콘 보여주기} */}
              {data}
              <span id="comment">(0) &nbsp;&nbsp;</span>
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
        </li>
      ))}
      <Link to="/write">
        <button className="mt-5 mb-5 btn btn-primary">글쓰기</button>
      </Link>
    </ul>
  );
}
