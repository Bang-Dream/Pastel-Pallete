/* eslint-disable */
import { useState, useEffect } from "react";
import "../../scss/Reset.scss";
import "../../scss/Main.scss";
import { Link } from "react-router-dom";
import axios from "axios";
// import $ from "jquery";
export default function Board() {
  let [post, setPost] = useState([]);
  let [id, setId] = useState([]);
  // const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:3001/api/list").then((res) => {
      var data = res.data;
      var titleCopy: string[] = [...post];
      var idCopy: number[] = id;
      if (post !== null) {
        data.map((data: string, index: number) => {
          var titleData: string = res.data[index].title;
          titleCopy.unshift(titleData);
        });
      }

      data.map((data: string, index: number) => {
        var idData = res.data[index]._id;
        if (id !== null) {
          idCopy.unshift(idData);
        }
      });

      console.log(idCopy);
      setPost(titleCopy); // 'string[]' 형식의 인수는 'SetStateAction<never[]>' 형식의 매개 변수에 할당될 수 없습니다.
      setId(idCopy); // 'number[]' 형식의 인수는 'SetStateAction<never[]>' 형식의 매개 변수에 할당될 수 없습니다.
      console.log("state setting ok");
    });
  }, []);

  const refreshOne = () => {
    window.location.reload();
  };

  const deleteOne = (e: any) => {
    // $.ajax({
    //   method: "DELETE",
    //   url: "/delete",
    //   data: { _id: e.target.dataset.id },
    // });

    // 위 코드를 axios로 어떻게 바꾸나요 아무리 예제를 찾아봐도 delete는 거의 안나와요 선생님
    console.log(e.target.dataset.id);
    axios
      .delete("http://localhost:3001/api/list", {
        // 여기에 모든 데이터 다 json으로 잇서염
        data: {
          _id: e.target.dataset.id,
        },
      })
      .then((res) => {
        console.log(res);
        console.log("ok");
      })
      .catch((err) => {
        console.log(err);
      });
    // axios
    //   .delete("/delete")
    //   .then((res) => {
    //     // refreshOne(); // 새로고침 함수
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   });
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
