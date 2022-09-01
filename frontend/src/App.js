import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

import Home from "./pages/Home";
import Board from "./pages/Board";
import BoardDetail from "./pages/BoardDetail";
import BoardWrite from "./pages/BoardWrite";
import BoardModify from "./pages/BoardModify";
import Mypage from "./pages/MyPage";

import FourZeroFour from "./pages/FourZeroFour";

import MainNavbar from "./components/MainNavbar";
import SignIn from "./pages/auth/SignIn";

import SignUp from "./pages/auth/SignUp";
import CsStudy from "./pages/CsStudy";
import SubjectDetail from "./pages/SubjectDetail";
import SubjectInfo from "./pages/SubjectInfo";
import Algorithm from "./data/algorithm";
import DataStructure from "./data/dataStructure";
import Admin from "./pages/Admin";
import AdminWrite from "./pages/AdminWrite";
import AdminDetail from "./pages/AdminDetail";
import AdminModify from "./pages/AdminModify";

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
        <Route path="/SignIn" element={<SignIn></SignIn>}></Route>
        <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
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
          path="/Board"
          element={
            <>
              <MainNavbar></MainNavbar>
              <Board></Board>
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
          path="BoardWrite"
          element={
            <>
              <MainNavbar></MainNavbar>
              <BoardWrite></BoardWrite>
            </>
          }
        ></Route>

        <Route
          path="BoardDetail"
          element={
            <>
              <MainNavbar></MainNavbar>
              <BoardDetail></BoardDetail>
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

        <Route path="/notice" element={<Board></Board>}></Route>
        <Route path="/mypage" element={<Mypage></Mypage>}></Route>

        <Route
          path="/BoardModify"
          element={<BoardModify></BoardModify>}
        ></Route>
        <Route path="/Admin" element={<Admin></Admin>}></Route>
        <Route path="/AdminWrite" element={<AdminWrite></AdminWrite>}></Route>
        <Route
          path="/AdminDetail"
          element={<AdminDetail></AdminDetail>}
        ></Route>
        <Route
          path="/AdminModify"
          element={<AdminModify></AdminModify>}
        ></Route>
        <Route path="*" element={<FourZeroFour></FourZeroFour>}></Route>
      </Routes>
    </div>
  );
}

export default App;
