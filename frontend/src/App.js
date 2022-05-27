import { Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

import Home from "./pages/Home";
import Notice from "./pages/Notice";
import Mypage from "./pages/MyPage";
import FourZeroFour from "./pages/FourZeroFour";
import MainNavbar from "./components/mainNavbar";
import Algorithm from "./pages/Algorithm";
import Database from "./pages/Database";
import DataStructure from "./pages/DataStructure";
import Network from "./pages/Network";
import OperatingSystem from "./pages/OperatingSystem";
import Language from "./pages/Language";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      {/* 네비게이션 바 */}

      {/* 라우터 */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route
          path="/algorithm"
          element={
            <>
              <MainNavbar></MainNavbar>
              <Algorithm></Algorithm>
            </>
          }
        ></Route>
        <Route
          path="/database"
          element={
            <>
              <MainNavbar></MainNavbar>
              <Database></Database>
            </>
          }
        ></Route>
        <Route
          path="/datastructure"
          element={
            <>
              <MainNavbar></MainNavbar>
              <DataStructure></DataStructure>
            </>
          }
        ></Route>
        <Route
          path="/network"
          element={
            <>
              <MainNavbar></MainNavbar>
              <Network></Network>
            </>
          }
        ></Route>
        <Route
          path="/opreatingsystem"
          element={
            <>
              <MainNavbar></MainNavbar>
              <OperatingSystem></OperatingSystem>
            </>
          }
        ></Route>
        <Route
          path="/language"
          element={
            <>
              <MainNavbar></MainNavbar>
              <Language></Language>
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
