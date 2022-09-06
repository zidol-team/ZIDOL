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
import Button from '@mui/material/Button';

//import { Link, useNavigate } from 'react-router-dom';

export default function AcccessibleTable() {
  const navigate = useNavigate();
  const [board, setBoard] = useState([]);
  const [csList, setcsList] = useState([]);

  useEffect(() => {
    fetch('/find-all-admin-cs.act', {
      method: 'GET',
      header: {
        'content-type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setcsList(data.data);
        // console.log(data.data.content);
        // setBoard(data.data.content);
        // console.log(board);
      });
  }, []);

  return (
    <>
      <div style={{ padding: '10px 50px 10px 50px' }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="caption table">
            <TableHead>
              <TableRow style={{ backgroundColor: '#b6daff' }}>
                <TableCell align="right" width="100">
                  글번호
                </TableCell>

                <TableCell align="right">작성자</TableCell>
                <TableCell align="right">등록일</TableCell>
              </TableRow>
            </TableHead>
            {csList && (
              <TableBody>
                {csList?.map((a, index) => (
                  <TableRow
                    key={index}
                    onClick={() =>
                      navigate(`/AdminDetail?csCode=${a.csCode}`, {
                        state: { csList, csCode: a.csCode }
                      })
                    }
                  >
                    <TableCell align="right" width="30">
                      {a.csCode}
                    </TableCell>
                    <TableCell align="right"> {a.csName}</TableCell>
                    <TableCell align="right">{a.csRegdate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            )}
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
