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
            <br />
            <Link to="/SignUp">회원가입하기</Link>
          </Col>
          <Col>사진 들어갈곳</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
