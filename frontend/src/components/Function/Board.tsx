/* eslint-disable */
import { useState, useEffect } from "react";
import "../../scss/Reset.scss";
import "../../scss/Main.scss";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Board() {
  let [게시글, 게시글변경] = useState([
    "학교 가기 싫다",
    "뱅드림 하고싶다",
    "왜 2교시는 사회야",
  ]);
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/list")
      .then((res) => {
        console.log(res.data);
        // const [posts, setPosts] = useState([res.data]);
        // console.log({ posts });
      })
      .catch((err) => {
        console.log(err);
      });
    // .then(() => {
    //   console.log("응애");
    // });
  }, []);

  return (
    <div className="center pt-5">
      {/* 여기를 바꿔야함  */}
      {[1, 2, 3].map((a, i) => (
        <Link to="#" id="post" key={i}>
          <h4 style={{ marginTop: "70px" }}>
            {/* {만약 개추 > 10 이라면 념글 아이콘 보여주기} */}
            {a} {게시글[i]}
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