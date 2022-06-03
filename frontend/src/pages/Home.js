import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

// 확인
function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Container>
        <Row>
          <Col>
            <div>왼쪽화면</div>
            <Link to="/SignIn">로그인하기</Link>
            <Link to="/SignUp">회원가입하기</Link>
          </Col>
          <Col>오른쪽화면</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
