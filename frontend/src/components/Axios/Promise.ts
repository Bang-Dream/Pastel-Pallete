import axios, { AxiosInstance } from "axios";

export const customAxios: AxiosInstance = axios.create({
  baseURL: `localhost:3001/api/list`, // 기본 서버 주소 입력
});
