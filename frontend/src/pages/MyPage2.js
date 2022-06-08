import React, {
  useEffect,
  useState,
  PureComponent,
  createContext,
  useContext,
} from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { TotalContext } from "../context/TotalContext";
import ChartCompIndividual from "../components/ChartCompIndividual";
import ChartCompWhole from "../components/ChartCompWhole";

function Mypage2() {
  const location = useLocation();
  const navigate = useNavigate();

  /*
  location.state 정보
  userEmail: res.data.userEmail,
  userName: res.data.userName,
  userNickname: res.data.userNickname,
 */

  const [user, setUser] = useState({});
  const [css, setCss] = useState([]);
  const [total, setTotal] = useState([]);
  const [done, setDone] = useState([]);
  // const dataContext = createContext(total);
  // 자식에 전달해야할 데이터들
  // const totalData = useContext(dataContext);

  // console.log(totalData);

  // 로그아웃, localstorage 데이터 삭제
  const deleteLocalStorage = () => {
    localStorage.removeItem("userCode");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    localStorage.removeItem("userNickname");
  };

  useEffect(() => {
    const userInfo = {
      userCode: localStorage.getItem("userCode"),
      userEmail: localStorage.getItem("userEmail"),
      userName: localStorage.getItem("userName"),
      userNickname: localStorage.getItem("userNickname"),
    };
    const userCode = localStorage.getItem("userCode");
    // 로그인 정보 저장
    setUser((user) => {
      return { ...user, ...userInfo };
    });
    console.log(user);

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        // userEmail, userPassword 전송
        userCode: userCode,
      }),
    };

    console.log("requestOptions : ", requestOptions);

    fetch("/find-all-achievement.act", requestOptions)
      .then((res) => res.json())
      .then((res) => {
        console.log("res : ");
        console.log(res);
        // console.log(res.data.css);

        setCss(res.data.css);
      });

    // 전체 항목 갯수와 완료갯수 받는곳
    fetch("/count-cs.act", requestOptions)
      .then((res2) => res2.json())
      .then((res2) => {
        console.log("res2 : ");
        console.log(res2);

        setTotal({
          total: res2.data.total,
          done: res2.data.done,
          percent: res2.data.percent,
        });
      });
  }, []);
  useEffect(() => {}, [total]);

  return (
    <TotalContext.Provider value={total}>
      <>
        <h1>MyPage2</h1>
        <div>{user.userEmail}</div>
        <div>{user.userName}</div>
        <div>{user.userNickname}</div>
        <div></div>
        <button
          onClick={() => {
            alert("로그아웃 되었습니다.");
            deleteLocalStorage();
            navigate("/");
          }}
        >
          로그아웃 버튼
        </button>

        <div>
          <ChartCompWhole></ChartCompWhole>
        </div>
        <div>
          <ChartCompIndividual></ChartCompIndividual>
        </div>
      </>
    </TotalContext.Provider>
  );
}

export default Mypage2;
