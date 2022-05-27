import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

import SignIn from "./SignIn";

function Home() {
  let navigate = useNavigate();

  return (
    <>
      <Container>
        <Row>
          <Col>
            <div>왼쪽화면</div>
            <Link to="/SignIn">로그인하기</Link>
            <div>회원가입하기</div>
          </Col>
          <Col>오른쪽화면</Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
