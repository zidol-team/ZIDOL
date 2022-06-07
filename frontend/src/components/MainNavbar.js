import { Navbar, Container, Nav } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

const MainNavbar = () => {
  let navigate = useNavigate();

  return (
    <>
      {/* 네비게이션 바 */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/cs-study");
              }}
            >
              CS Study
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/interview");
              }}
            >
              인터뷰 준비
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/board");
              }}
            >
              질문 게시판
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/Fnq");
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
