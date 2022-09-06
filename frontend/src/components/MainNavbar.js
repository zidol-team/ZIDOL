import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#b6daff'
    }
  }
});
export default function ColorTabs() {
  let navigate = useNavigate();

  const [value, setValue] = useState('마이페이지');

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '7px'
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab
            value="CS Study"
            label="CS Study"
            onClick={() => {
              navigate('/cs-study');
            }}
          />
          <Tab
            value="질문 게시판"
            label="질문 게시판"
            onClick={() => {
              navigate('/board');
            }}
          />
          <Tab
            value="공지사항"
            label="공지사항"
            onClick={() => {
              navigate('/Fnq');
            }}
          />
          <Tab
            value="마이페이지"
            label="마이페이지"
            onClick={() => {
              navigate('/mypage');
            }}
          />
        </Tabs>
      </Box>
    </ThemeProvider>
  );
}
