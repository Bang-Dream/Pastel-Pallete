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
        setPost(res.data[0]);
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
        </Link>
      ))}
      {/* 여기를 바꿔야함 */}

      <Link to="/write">
        <button className="mt-5 btn btn-primary">글쓰기</button>
      </Link>
    </div>
  );
}

// 지금 내가 해야하는 것 : 일단은 json 파일 뿌리는 형태부터가 잘못됨.
// _id : 0 1 2 3 4 5 이런식으로 저장하고
// 그 다음에 이제 state에 넣고 그 다음에 이제 map함수를 돌려서 뽑자.
