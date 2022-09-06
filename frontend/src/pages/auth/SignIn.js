import React, { useContext, useEffect, useState } from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { postSignIn, URLS } from '../../api/auth';

const theme = createTheme();

export default function SignIn() {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });

  const handleSubmit = (event) => {
    event.preventDefault(); //이벤트를 막아줌

    postSignIn(userInfo);
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
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="userEmail"
              label="이메일 주소"
              name="userEmail"
              autoComplete="email"
              autoFocus
              onChange={(e) => {
                setUserInfo(() => {
                  console.log(userInfo);
                  return { ...userInfo, email: e.target.value };
                });
              }}
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
              onChange={(e) => {
                setUserInfo(() => {
                  console.log(userInfo);
                  return { ...userInfo, password: e.target.value };
                });
              }}
            />

            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
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
