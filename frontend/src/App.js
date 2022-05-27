import { Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

import Home from "./pages/Home";
import RoutineList from "./pages/RoutineList";
import Notice from "./pages/Notice";
import Mypage from "./pages/MyPage";
import FourZeroFour from "./pages/FourZeroFour";

function App() {
  let navigate = useNavigate();

  return (
    <div className="App">
      {/* 네비게이션 바 */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/routineList");
              }}
            >
              리스트
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/notice");
              }}
            >
              공지사항
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/mypage");
              }}
            >
              마이페이지
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* 라우터 */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/routineList"
          element={<RoutineList></RoutineList>}
        ></Route>
        <Route path="/notice" element={<Notice></Notice>}></Route>
        <Route path="/mypage" element={<Mypage></Mypage>}></Route>
        <Route path="*" element={<FourZeroFour></FourZeroFour>}></Route>
      </Routes>
    </div>
  );
}

export default App;
