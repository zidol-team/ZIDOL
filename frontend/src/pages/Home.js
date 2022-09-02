import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import './Home.css';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

// 확인
function Home() {
  const navigate = useNavigate();

  const SingInButton = () => {
    return (
      <Button
        variant="contained"
        onClick={() => {
          navigate('/SignIn');
        }}
      >
        <Typography>로그인</Typography>
      </Button>
    );
  };

  const SingUpButton = () => {
    return (
      <Button
        variant="contained"
        onClick={() => {
          navigate('/SignIn');
        }}
      >
        <Typography>회원가입</Typography>
      </Button>
    );
  };

  return (
    <Container className="mainContainer">
      <Box className="mainDesc">
        <Typography className="homeTitle">Sea s</Typography>
        <Typography className="mainTitle">CS공부 한 잔 하고 가세요.</Typography>
      </Box>
      <Stack direction="row" spacing={2} sx={{ mx: 5, justifyContent: 'space-between' }}>
        <SingInButton></SingInButton>
        <SingUpButton></SingUpButton>
      </Stack>
    </Container>
  );
}

export default Home;
