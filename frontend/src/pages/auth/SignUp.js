import React, { useContext, useEffect, useState } from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { postSignUp, URLS } from '../../api/auth';

import { Routes, Route, useNavigate, Outlet, Link } from 'react-router-dom';

const theme = createTheme();
// 정규식
// 필수입력
const reg_required = /.{1,}/;
// 닉네임(한글 + 영어만)
const reg_nickname = /^[가-힣a-zA-Z]+$/;
// 비밀번호 4~20자리
const reg_pw = /.{4,20}$/;
// 이메일
const reg_email = /^[0-9?A-z0-9?]+(\.)?[0-9?A-z0-9?]+@[0-9?A-z]+\.[A-z]{2}.?[A-z]{0,3}$/;

export default function SignUp(usersInfo) {
  const [userInfos, setUsersInfo] = useState({
    userName: '',
    NickName: '',
    email: '',
    password: ''
  });
  const handleSubmit = (event) => {
    event.preventDefault();

    // 유효성검사
    if (!reg_required.test(userInfos.userName)) {
      alert('이름을 입력해 주세요!');
    } else if (!reg_nickname.test(userInfos.NickName)) {
      alert('닉네임은 한글과 영문만 사용 가능합니다.');
    } else if (!reg_email.test(userInfos.email)) {
      alert('이메일을 정확히 입력해 주세요.');
    } else if (!reg_pw.test(userInfos.password)) {
      alert('비밀번호는 4 ~ 20자리까지 사용가능합니다.');
    } else {
      postSignUp();
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="userName"
                  required
                  fullWidth
                  id="userName"
                  label="이름"
                  autoFocus
                  onChange={(e) => {
                    setUsersInfo(() => {
                      console.log(usersInfo);
                      return { ...usersInfo, userName: e.target.value };
                    });
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="userNickname"
                  label="닉네임"
                  name="userNickname"
                  onChange={(e) => {
                    setUsersInfo(() => {
                      console.log(usersInfo);
                      return { ...usersInfo, NickName: e.target.value };
                    });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="userEmail"
                  label="이메일 주소"
                  name="userEmail"
                  onChange={(e) => {
                    setUsersInfo(() => {
                      console.log(usersInfo);
                      return { ...usersInfo, email: e.target.value };
                    });
                  }}
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
                  onChange={(e) => {
                    setUsersInfo(() => {
                      console.log(usersInfo);
                      return { ...usersInfo, password: e.target.value };
                    });
                  }}
                />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
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
