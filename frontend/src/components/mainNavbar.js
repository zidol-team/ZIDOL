import { Navbar, Container, Nav } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

const MainNavbar = () => {
  let navigate = useNavigate();

  return (
    <>
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
                navigate("/algorithm");
              }}
            >
              알고리즘
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/database");
              }}
            >
              데이터베이스
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/datastructure");
              }}
            >
              자료구조
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/network");
              }}
            >
              네트워크
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/opreatingsystem");
              }}
            >
              운영체제
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/language");
              }}
            >
              언어
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
    </>
  );
};

export default MainNavbar;
