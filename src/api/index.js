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

//남자모델 등록
function modelCreated(modelData) {
  return instance.post("api/model", modelData, {
    headersFormdata,
  });
}
//모델 수정
function editModel(categoryCd, modelSeq, modelData) {
  return instance.post("api/model/" + categoryCd + "/" + modelSeq, modelData, {
    headersFormdata,
  });
}
//모델 리스트
function ModelList(page) {
  console.log(page);
  return instance.get(
    "api/model/lists/" +
      page.categoryCd +
      "?page=" +
      page.page +
      "&searchKeyword=" +
      page.searchKeyword +
      "&searchType=" +
      page.searchType +
      "&size=" +
      page.size,
    {
      headers,
    }
  );
}

//모델 상세
function fetchModel(category, seq) {
  return instance.get("api/model/" + category + "/" + seq);
}

//모델 삭제
function deleteModel(categoryCd, modelSeq) {
  return instance.delete("api/model/" + categoryCd, modelSeq);
}

//모델 삭제
function deleteImgModel(idx) {
  return instance.delete("api/model/image/" + idx);
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

//프로덕션 수정
function editProduction(productionSeq, productionData) {
  return instance.post("api/production/" + productionSeq, productionData, {
    headersFormdata,
  });
}

//프로덕션 상세
function fetchProduction(productionSeq) {
  return instance.get("api/production/" + productionSeq);
}

//프로덕션 삭제
function deleteProduction(productionSeq) {
  return instance.delete("api/production/" + productionSeq);
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
  ModelList,
  fetchModel,
  editProduction,
  fetchProduction,
  deleteProduction,
  modelCreated,
  editModel,
  deleteModel,
  deleteImgModel,
};
