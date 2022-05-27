import axios from "axios";

const KAKAO_API_KEY = "fb7c04e32e23a55845d5d2314c82447f";
const Kakao = axios.create({
  baseURL: "https://dapi.kakao.com", // 공통 요청 경로를 지정해준다.
  headers: {
    Authorization: "KakaoAK " + KAKAO_API_KEY,
  },
});

const kakaoSearch = (params) => {
  return Kakao.get("/v3/search/book", { params });
};
function Home() {
  return (
    <div>
      <div>Home</div>
    </div>
  );
}

export default Home;
