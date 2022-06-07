import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import "./Home.css";

// 확인
function Home() {
  return (
    <div className="mainContainer">
      <div className="mainDesc">
        <div className="mainTitle">CS공부 한 잔 하고 가세요.</div>
      </div>
      <div className="loginContainer">
        <div>
          <Link to="/SignIn" className="loginText">
            로그인하기
          </Link>
        </div>
        <div>
          <Link to="/SignUp" className="loginText">
            회원가입하기
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
