import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

import Home from "./pages/Home";
import Notice from "./pages/Notice";
import Mypage from "./pages/MyPage";
import FourZeroFour from "./pages/FourZeroFour";
import MainNavbar from "./components/MainNavbar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import CsStudy from "./pages/CsStudy";
import SubjectDetail from "./pages/SubjectDetail";
import Algorithm from "./data/algorithm";
import DataStructure from "./data/dataStructure";

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
          path="*"
          element={
            <>
              <MainNavbar></MainNavbar>
              <FourZeroFour></FourZeroFour>
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
