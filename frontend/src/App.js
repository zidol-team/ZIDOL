import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

import Home from "./pages/Home";
import Notice from "./pages/Notice";
import NoticeDetail from "./pages/NoticeDetail";
import NoticeWrite from "./pages/NoticeWrite";
import NoticeModify from "./pages/NoticeModify";
import Mypage from "./pages/MyPage";
import Mypage2 from "./pages/MyPage2";
import FourZeroFour from "./pages/FourZeroFour";
import MainNavbar from "./components/MainNavbar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import CsStudy from "./pages/CsStudy";
import SubjectDetail from "./pages/SubjectDetail";
import SubjectInfo from "./pages/SubjectInfo";
import Algorithm from "./data/algorithm";
import DataStructure from "./data/dataStructure";
import Fnq from "./pages/Fnq";
// 확인
function App() {
  const [algorithm, setAlgorithm] = useState(Algorithm);
  const [dataStructure, setSataStructure] = useState(DataStructure);

  return (
    <div className="App">
      {/* 네비게이션 바 */}

      {/* 라우터 */}
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route
          path="/cs-study"
          element={
            <>
              <MainNavbar></MainNavbar>
              <CsStudy></CsStudy>
            </>
          }
        ></Route>
        <Route
          path="/notice"
          element={
            <>
              <MainNavbar></MainNavbar>
              <Notice></Notice>
            </>
          }
        ></Route>
        <Route
          path="/mypage"
          element={
            <>
              <MainNavbar></MainNavbar>
              <Mypage></Mypage>
            </>
          }
        ></Route>
        <Route
          path="/mypage2"
          element={
            <>
              <MainNavbar></MainNavbar>
              <Mypage2></Mypage2>
            </>
          }
        ></Route>
        <Route
          path="cs-study/subject-detail"
          element={
            <>
              <MainNavbar></MainNavbar>
              <SubjectDetail
                algorithm={algorithm}
                dataStructure={dataStructure}
              ></SubjectDetail>
            </>
          }
        ></Route>
        <Route
          path="cs-study/subject-detail/:csType"
          element={
            <>
              <MainNavbar></MainNavbar>
              <SubjectDetail></SubjectDetail>
            </>
          }
        ></Route>
        <Route
          // /cs-study/subject-detail/${a.csType}/${a.csCode}
          path="cs-study/subject-detail/:csType/:csCode"
          element={
            <>
              <MainNavbar></MainNavbar>
              <SubjectInfo></SubjectInfo>
            </>
          }
        ></Route>
        <Route
          path="*"
          element={
            <>
              <MainNavbar></MainNavbar>
              <FourZeroFour></FourZeroFour>
            </>
          }
        ></Route>
        <Route
          path="NoticeWrite"
          element={
            <>
              <MainNavbar></MainNavbar>
              <NoticeWrite></NoticeWrite>
            </>
          }
        ></Route>

        <Route
          path="NoticeDetail"
          element={
            <>
              <MainNavbar></MainNavbar>
              <NoticeDetail></NoticeDetail>
            </>
          }
        ></Route>

        <Route
          path="Fnq"
          element={
            <>
              <MainNavbar></MainNavbar>
              <Fnq></Fnq>
            </>
          }
        ></Route>

        <Route path="/notice" element={<Notice></Notice>}></Route>
        <Route path="/mypage" element={<Mypage></Mypage>}></Route>
        <Route path="/SignIn" element={<SignIn></SignIn>}></Route>
        <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
        <Route
          path="/NoticeDetail"
          element={<NoticeDetail></NoticeDetail>}
        ></Route>
        <Route
          path="/NoticeWrite"
          element={<NoticeWrite></NoticeWrite>}
        ></Route>
        <Route
          path="/NoticeModify"
          element={<NoticeModify></NoticeModify>}
        ></Route>

        <Route path="*" element={<FourZeroFour></FourZeroFour>}></Route>
      </Routes>
    </div>
  );
}

export default App;
