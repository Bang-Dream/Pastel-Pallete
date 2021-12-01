import axios from "axios";

axios.get("http://localhost:3001/api/list").then((res) => {
  console.log(res.data);
});
