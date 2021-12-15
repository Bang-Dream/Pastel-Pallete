/* eslint-disable */
import { useState, useEffect } from "react";
import "../../scss/Reset.scss";
import "../../scss/Main.scss";
import { Link } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import Post from "./Post";
import $ from "jquery";
export default function Board() {
  let [post, setPost] = useState<string[]>([]);
  let [id, setId] = useState<string[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/list").then((res) => {
      console.log(res.data);
      console.log(typeof res.data);

      res.data.map((data: string, index: number) => {
        var input: any = Object.values(res.data[index]);
        console.log(input);
        
        var copy: string[] = [...post];
        copy.unshift(input);
        setPost(copy);
      });
    });
    console.log(post);
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
    console.log(e.target.dataset.id);
  };

  return (
    <ul className="center">
      {post !== null
        ? post.map((data, index) => (
            <form key={index} action="/delete" method="delete">
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
                  <button className="btn btn-success ml-3" onClick={refreshOne}>
                    새고로침
                  </button>
                </h4>
                <hr />
              </Link>
            </form>
          ))
        : null}
      <Link to="/write">
        <button className="mt-5 mb-5 btn btn-primary">글쓰기</button>
      </Link>
    </ul>
  );
}
