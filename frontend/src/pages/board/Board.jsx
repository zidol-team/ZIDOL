import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getBoardList, URLS } from '../../api/board';
//import { Link, useNavigate } from 'react-router-dom';

export default function AcccessibleTable() {
  const navigate = useNavigate();
  const [board, setBoard] = useState([]);

  useEffect(() => {
    getBoardList(setBoard);
  }, []);

  return (
    <>
      <button onClick={() => navigate(`/BoardWrite`)}>글쓰기</button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <caption>A basic table example with a caption</caption>
          <TableHead>
            <TableRow>
              <TableCell align="right">글번호</TableCell>
              <TableCell align="right">제목</TableCell>
              <TableCell align="right">작성자</TableCell>
              <TableCell align="right">등록일</TableCell>
            </TableRow>
          </TableHead>
          {board && (
            <TableBody>
              {board?.map((a, index) => (
                <TableRow
                  key={index}
                  onClick={() =>
                    navigate(`/BoardDetail?boardCode=${a.board.boardCode}`, {
                      state: { board, boardCode: a.board.boardCode }
                    })
                  }
                >
                  <TableCell align="right">{a.board.boardCode}</TableCell>
                  <TableCell align="right">{a.board.boardTitle}</TableCell>
                  <TableCell align="right">{a.user.userNickname}</TableCell>
                  <TableCell align="right">{a.board.boardRegDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </>
  );
}
