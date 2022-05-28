import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [answer, setAnswer] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };
  const onNicknameHandler = (event) => {
    setNickname(event.currentTarget.value);
  };
  const onAnswerHandler = (event) => {
    setAnswer(event.currentTarget.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
    }
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
            <form style={{ display: "flex", flexDirection: "column" }}>
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
              <label>Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={onConfirmPasswordHandler}
              ></input>
              <label>Nickname</label>
              <input
                type="text"
                value={nickname}
                onChange={onNicknameHandler}
              ></input>
              <label>Answer</label>
              <input
                type="text"
                value={answer}
                onChange={onAnswerHandler}
              ></input>
              <br />
              <button type="submit">가입하기</button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignUp;
