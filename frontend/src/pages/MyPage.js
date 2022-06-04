import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function MyPage() {
  const location = useLocation();
  const navigate = useNavigate();
  /*
  location.state 정보
  userEmail: res.data.userEmail,
  userName: res.data.userName,
  userNickname: res.data.userNickname,
 */

  const [user, setUser] = useState({});

  // localstorage 데이터 삭제
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
    // 로그인 정보 저장(지금안되는중)
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

    fetch("/achievement.act", requestOptions)
      .then((res) => res.json())
      .then((res) => {
        console.log("res : ");
        console.log(res);
        //res로 무엇을할지 나중에 작성
        //
      });
  }, []);

  return (
    <>
      <h1>MyPage</h1>
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
    </>
  );
}

export default MyPage;
