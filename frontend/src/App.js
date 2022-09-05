import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

import Home from './pages/Home';
import Board from './pages/board/Board';
import BoardDetail from './pages/board/BoardDetail';
import BoardWrite from './pages/board/BoardWrite';
import BoardModify from './pages/board/BoardModify';
import Mypage from './pages/MyPage';

import FourZeroFour from './pages/Page404';

import MainNavbar from './components/MainNavbar';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import CsStudy from './pages/CsStudy';
import SubjectDetail from './pages/SubjectDetail';
import SubjectInfo from './pages/SubjectInfo';
import Algorithm from './data/algorithm';
import DataStructure from './data/dataStructure';
import Admin from './pages/admin/Admin';
import AdminWrite from './pages/admin/AdminWrite';
import AdminDetail from './pages/admin/AdminDetail';
import AdminModify from './pages/admin/AdminModify';
import Fnq from './pages/Fnq';
import Header from './components/Header';
// 확인
function App() {
  const [algorithm, setAlgorithm] = useState(Algorithm);
  const [dataStructure, setSataStructure] = useState(DataStructure);

  return (
    <div className="App">
      {/* 네비게이션 바 */}
      <Header />
      <MainNavbar />

      {/* 라우터 */}
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        {/*회원*/}
        <Route path="/SignIn" element={<SignIn></SignIn>}></Route>
        <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
        <Route path="/mypage" element={<Mypage></Mypage>}></Route>
        {/*게시판*/}

        <Route path="/Board" element={<Board></Board>}></Route>
        <Route path="BoardWrite" element={<BoardWrite></BoardWrite>}></Route>
        <Route path="/BoardModify" element={<BoardModify></BoardModify>}></Route>
        <Route path="BoardDetail" element={<BoardDetail></BoardDetail>}></Route>
        {/*공지사항*/}
        <Route path="Fnq" element={<Fnq></Fnq>}></Route>

        <Route path="/notice" element={<Board></Board>}></Route>
        {/*관리자페이지*/}
        <Route path="/Admin" element={<Admin></Admin>}></Route>
        <Route path="/AdminWrite" element={<AdminWrite></AdminWrite>}></Route>
        <Route path="/AdminDetail" element={<AdminDetail></AdminDetail>}></Route>
        <Route path="/AdminModify" element={<AdminModify></AdminModify>}></Route>
        {/*csstudy*/}
        <Route path="/cs-study" element={<CsStudy></CsStudy>}></Route>
        <Route
          path="cs-study/subject-detail"
          element={
            <>
              <SubjectDetail algorithm={algorithm} dataStructure={dataStructure}></SubjectDetail>
            </>
          }
        ></Route>
        <Route
          path="cs-study/subject-detail/:csType"
          element={
            <>
              <SubjectDetail></SubjectDetail>
            </>
          }
        ></Route>
        <Route
          // /cs-study/subject-detail/${a.csType}/${a.csCode}
          path="cs-study/subject-detail/:csType/:csCode"
          element={<SubjectInfo></SubjectInfo>}
        ></Route>

        <Route path="*" element={<FourZeroFour></FourZeroFour>}></Route>
      </Routes>
    </div>
  );
}
export default App;
