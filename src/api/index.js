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

//로그인
function loginUser(userData) {
  return instance.post("api/auth/admin-login", JSON.stringify(userData), {
    headers,
  });
}

//회원가입
function signUser(userData) {
  return instance.post("api/auth/admin-signup", JSON.stringify(userData), {
    headers,
  });
}

//포트폴리오 등록
function portfolioCreated(portfolioData) {
  return instance.post("api/portfolio", portfolioData, {
    headersFormdata,
  });
}

//프로덕션 리스트
function ModelManList(page) {
  return instance.get(
    "api/production/lists" + "?page=" + page.page + "&size=" + page.size,
    {
      headers,
    }
  );
}

//프로덕션 리스트
function ProductionList(page) {
  return instance.get(
    "api/production/lists" + "?page=" + page.page + "&size=" + page.size,
    {
      headers,
    }
  );
}

//프로덕션 등록
function productionCreated(productionData) {
  return instance.post("api/production", productionData, {
    headersFormdata,
  });
}

//뉴스 수정
function editProduction(productionSeq, productionData) {
  return instance.post(
    "api/admin-production/" + productionSeq,
    productionData,
    {
      headersFormdata,
    }
  );
}

//뉴스 상세
function fetchProduction(productionSeq) {
  return instance.get("api/production/" + productionSeq);
}

//토큰 값 넘기기
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Content-type": "application/json",
  Accept: "*/*",
};

//멀티파트폼데이터 옵션추가
const headersFormdata = {
  "Access-Control-Allow-Origin": "*",
  "Content-type": "multipart/form-data",
  Accept: "*/*",
};

export {
  loginUser,
  signUser,
  portfolioCreated,
  ProductionList,
  productionCreated,
  ModelManList,
  editProduction,
  fetchProduction,
};
