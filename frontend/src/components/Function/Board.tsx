import { useState, useEffect } from "react";
import "../../scss/Reset.scss";
import "../../scss/Main.scss";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Board() {
  let [post, setPost] = useState(["게시글이 없습니다."]);
  // const [users, setUsers] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/list")
      .then((res) => {
        console.log(res.data);
        console.log(res.data[0].title);
        console.log(res.data[0]);
        var copy = [...post];
        copy.unshift(res.data[0].title);
        setPost(copy);
        // setPost(res.data[0].title);
        // setPost(res.data[1].title); // .title
        console.log("ok");
      })
      .catch((err) => {
        console.log(err);
      });
    // .then(() => {
    //   console.log("무족권실행되는것");
    // });
  }, []);

  return (
    <div className="center pt-5">
      {/* 여기를 바꿔야함  */}
      {post.map((a, i) => (
        <Link to="#" id="post" key={i}>
          <h4 style={{ marginTop: "70px" }}>
            {/* {만약 개추 > 10 이라면 념글 아이콘 보여주기} */}
            {a}
            <span id="comment">(0)</span>
          </h4>
          <hr />
        </Link>
      ))}
      {/* 여기를 바꿔야함 */}

      <Link to="/write">
        <button className="mt-5 btn btn-primary">글쓰기</button>
      </Link>
    </div>
  );
}

// 지금 내가 해야하는 것 : 게시판 데이터 뿌리기 완성했는데
// 기본 데이터(게시글이 없습니다.) 없애주고
// map문 돌려서 모든 데이터를 state에 넣어준다
