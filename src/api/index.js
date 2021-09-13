import axios from "axios";
import { setInterceptors } from "./common/interceptors";

//인스턴스 만들기
function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
  return setInterceptors(instance);
}

const instance = createInstance();

function loginUser(userData) {
  return instance.post("api/auth/admin-login", JSON.stringify(userData), {
    headers,
  });
}

//토큰 값 넘기기
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Content-type": "application/json",
  Accept: "*/*",
};

export { loginUser };
