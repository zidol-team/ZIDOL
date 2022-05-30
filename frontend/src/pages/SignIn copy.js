import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
// import Axios from "axios";
// import { useDispatch } from "react-redux";

function SignIn2() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    // 전송버튼 누를때 데이터 전송 만들어야함.
  };

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
            <div>로고 넣어야함</div>
          </Col>
          <Col>
            <form
              style={{ display: "flex", flexDirection: "column" }}
              onSubmit={onSubmitHandler}
            >
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={onEmailHandler}
              ></input>
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={onPasswordHandler}
              ></input>
              <br />
              <button type="submit">Login</button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignIn2;
