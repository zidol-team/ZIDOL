import React, {
  useEffect,
  useState,
  PureComponent,
  createContext,
  useContext,
} from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Calendar from "./Calender";
import { TotalContext } from "../context/TotalContext";
import ChartCompIndividual from "../components/ChartCompIndividual";
import ChartCompWhole from "../components/ChartCompWhole";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import "./MyPage.css";

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
  const [css, setCss] = useState([]);
  const [total, setTotal] = useState([]);
  const [done, setDone] = useState([]);

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

  return (
    <TotalContext.Provider value={total}>
      <>
        <div className="mypageContainer">
          <div className="mypageMainContainer">
            <Box sx={{ width: "100%" }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <div className="bgwhite">
                    <ChartCompWhole></ChartCompWhole>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="bgblue">
                    <div className="mypageInfo">
                      <div className="mypageHeader">
                        <div>{user.userName} 님, 환영합니다.</div>
                      </div>
                      <div>
                        <button
                          onClick={() => {
                            alert("로그아웃 되었습니다.");
                            deleteLocalStorage();
                            navigate("/");
                          }}
                          className="logoutButton"
                        >
                          로그아웃
                        </button>
                      </div>
                    </div>
                    <div>{user.userEmail}</div>
                    <div>{user.userNickname}</div>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="bgwhite">
                    <ChartCompIndividual></ChartCompIndividual>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="bgwhite">
                    <Calendar />
                  </div>
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
      </>
    </TotalContext.Provider>
  );
}

export default MyPage;
