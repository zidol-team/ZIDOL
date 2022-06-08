import * as React from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useLocation, useNavigate, Link } from "react-router-dom";

const theme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("userEmail"),
      password: data.get("userPassword"),
    });

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        // userEmail, userPassword 전송
        userEmail: data.get("userEmail"),
        userPassword: data.get("userPassword"),
      }),
    };
    console.log("requestOptions : ", requestOptions);

    fetch("/sign-in.act", requestOptions)
      .then((res) => res.json())
      .then((res) => {
        console.log("res : ", res);
        if (res.code === "LOGIN_FAILED") {
          alert(res.fieldErrors[0].message);
        } else {
          alert("로그인 성공했습니다.");
          // 로컬스토리지 저장
          localStorage.setItem("userEmail", res.data.userEmail);
          localStorage.setItem("userName", res.data.userName);
          localStorage.setItem("userNickname", res.data.userNickname);
          localStorage.setItem("userCode", res.data.userCode);

          navigate("/MyPage", {
            // state: {
            //   userEmail: res.data.userEmail,
            //   userName: res.data.userName,
            //   userNickname: res.data.userNickname,
            //   userCode: res.data.userCode,
            // },
          });
        }
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="userEmail"
              label="이메일 주소"
              name="userEmail"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="userPassword"
              label="비밀번호"
              type="password"
              id="userPassword"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              로 그 인
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/SignUp" variant="body2">
                  계정이 없으십니까? 회원가입하기
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
