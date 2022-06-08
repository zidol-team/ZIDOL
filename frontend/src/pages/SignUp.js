import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Routes, Route, useNavigate, Outlet, Link } from "react-router-dom";

const theme = createTheme();
// 정규식
// 필수입력
const reg_required = /.{1,}/;
// 닉네임(한글 + 영어만)
const reg_nickname = /^[가-힣a-zA-Z]+$/;
// 비밀번호 4~20자리
const reg_pw = /.{4,20}$/;
// 이메일
const reg_email =
  /^[0-9?A-z0-9?]+(\.)?[0-9?A-z0-9?]+@[0-9?A-z]+\.[A-z]{2}.?[A-z]{0,3}$/;

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    console.log({
      userName: data.get("userName"),
      userNickname: data.get("userNickname"),
      userEmail: data.get("userEmail"),
      userPassword: data.get("userPassword"),
    });

    // 유효성검사
    if (!reg_required.test(data.get("userName"))) {
      alert("이름을 입력해 주세요!");
    } else if (!reg_nickname.test(data.get("userNickname"))) {
      alert("닉네임은 한글과 영문만 사용 가능합니다.");
    } else if (!reg_email.test(data.get("userEmail"))) {
      alert("이메일을 정확히 입력해 주세요.");
    } else if (!reg_pw.test(data.get("userPassword"))) {
      alert("비밀번호는 4 ~ 20자리까지 사용가능합니다.");
    } else {
      const requestOptions = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({
          userName: data.get("userName"),
          userNickname: data.get("userNickname"),
          userEmail: data.get("userEmail"),
          userPassword: data.get("userPassword"),
        }),
      };
      console.log("requestOptions : ", requestOptions);

      fetch("/sign-up.act", requestOptions)
        .then((res) => res.json())
        .then((res) => {
          console.log("res : ", res);
          if (res.code === "OK") {
            alert("회원가입이 완료되었습니다.");
            window.location = "/SignIn";
          } else if (res.code === "DUPLICATED_ID") {
            alert("회원가입이 완료되지 않았습니다. 다시 시도해 주세요.");
          }
        });
    }
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="userName"
                  required
                  fullWidth
                  id="userName"
                  label="이름"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="userNickname"
                  label="닉네임"
                  name="userNickname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="userEmail"
                  label="이메일 주소"
                  name="userEmail"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="userPassword"
                  label="Password"
                  type="password"
                  id="userPassword"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              회 원 가 입
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/signin" variant="body2">
                  이미 계정이 있으십니까? 로그인하기
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
