/* eslint-disable */
import { useState, useEffect } from "react";
import "../../scss/Reset.scss";
import "../../scss/Main.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import $ from "jquery";
export default function Board() {
  let [post, setPost] = useState([""]);
  // const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:3001/api/list").then((res) => {
      var data = res.data;
      var copy = [...post];

      data.map((data: string, index: string): string | number =>
        copy.unshift(res.data[index].title)
      );
      console.log(post);
      console.log(copy);
      setPost(copy);
      // setPost(res.data[0].title);
      // setPost(res.data[1].title); // .title
      console.log("ok");
    });
  }, []);

  $(".delete").click((e) => {
    let number: any = e.target.dataset.id; //이거 언디파인드 나옴?
    parseInt(number);
    console.log(number);
    $.ajax({
      method: "DELETE",
      url: "/delete",
      data: { _id: number },
    }).done(() => {
      alert("OK");
      console.log("OK");
    });
  });

  return (
    <div className="center">
      {post.map((data, index) => (
        <ul key={index}>
          <Link to="#" id="post">
            <li>
              <h4 style={{ marginTop: "30px" }}>
                {/* {만약 개추 > 10 이라면 념글 아이콘 보여주기} */}
                {data}
                <span id="comment">(0) &nbsp;&nbsp;</span>
                <button className="btn btn-danger delete" data-id={index}>
                  X
                </button>
              </h4>
              <hr />
            </li>
          </Link>
        </ul>
      ))}

      <Link to="/write">
        <button className="mt-5 mb-5 btn btn-primary">글쓰기</button>
      </Link>
    </div>
  );
}
