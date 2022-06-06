import React, {
  useEffect,
  useState,
  PureComponent,
  createContext,
  useContext,
} from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Percentage from "../components/Percentage";
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

  const [algorithmCount, setAlgorithmCount] = useState(0);
  const [dataStructureCount, setDataStructureCount] = useState(0);
  const [computerStructureCount, setComputerStructureCount] = useState(0);
  const [databaseCount, setDatabaseCount] = useState(0);
  const [networkCount, setNetworkCount] = useState(0);
  const [computerOperatingCount, setComputerOperatingCount] = useState(0);
  const [interviewCount, setInterviewCount] = useState(0);
  const [designpatternCount, setDesignpatternCount] = useState(0);

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
        console.log(res.data.css);

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

  const countValue = () => {
    css.map((a, index) => {
      console.log(a.csType);
      if (a.csType === "알고리즘") {
        setAlgorithmCount(algorithmCount + 1);
      } else if (a.csType === "자료구조") {
        setDataStructureCount(dataStructureCount + 1);
      } else if (a.csType === "컴퓨터구조") {
        setComputerStructureCount(computerStructureCount + 1);
      } else if (a.csType === "데이터베이스") {
        setDatabaseCount(databaseCount + 1);
      } else if (a.csType === "네트워크") {
        setNetworkCount(networkCount + 1);
      } else if (a.csType === "운영체제") {
        setComputerOperatingCount(computerOperatingCount + 1);
      } else if (a.csType === "면접질문") {
        setInterviewCount(interviewCount + 1);
      } else if (a.csType === "디자인패턴") {
        setDesignpatternCount(designpatternCount + 1);
      }
      console.log(algorithmCount);
      console.log(dataStructureCount);
      console.log(computerStructureCount);
      console.log(databaseCount);
      console.log(networkCount);
      console.log(computerOperatingCount);
      console.log(interviewCount);
      console.log(designpatternCount);
    });
  };

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
        <div>퍼센트</div>
        <button
          onClick={() => {
            countValue();
          }}
        >
          카운트 확인 버튼
        </button>
        <button
          onClick={() => {
            console.log(total);
            console.log(done);
          }}
        >
          total, done 확인버튼
        </button>

        <div>
          <Percentage></Percentage>
        </div>
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
