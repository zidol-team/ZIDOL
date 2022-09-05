import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ReactHtmlParser from 'react-html-parser';
import TextField from '@mui/material/TextField';
import './Board.css';
import { URLS } from '../../api/board';

const BoardDetail = ({}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const changelocationCode = location.state.boardCode;
  const [board, setBoard] = useState([]);

  const [list1, setList1] = useState([]);
  const [list2, setList2] = useState([]);
  const [user, setUser] = useState([]);
  const userName = localStorage.getItem('userName');
  const userCode = localStorage.getItem('userCode');

  useEffect(() => {
    fetch(URLS.BOARD_DETAIL + `${changelocationCode}`, {
      method: 'GET'
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setUser(data.data.user);
        setBoard(data.data.board);
        setList1(data.data.replys);
      });
  }, [list2]);

  const deleteBoard = () => {
    fetch('/delete-board.act', {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({
        boardCode: changelocationCode,
        userCode: userCode
      })
    }).then((ref) => {
      navigate('/Board');
    });
  };

  return (
    <>
      <div style={{ width: '100%' }}>
        <div className="bcontainer">
          <div style={{ margin: '10px', fontSize: '30px', fontWeight: 'bold' }}>
            Q. {board.boardTitle}
          </div>
          <div>
            <span style={{ textAlign: 'left', marginRight: '10px' }}>{user.userNickname}</span>
            <span style={{ textAlign: 'right' }}>{board.boardRegDate}</span>
          </div>
          <hr></hr>
          <div className="content">
            <label>{ReactHtmlParser(board.boardContent)}</label>
          </div>
          <div className="buttonss">
            <Button variant="outlined" onClick={() => navigate(`/Board`)}>
              목록
            </Button>
            {userCode == user.userCode ? (
              <div className="buttons">
                <Button
                  style={{ margin: '10px', float: 'right' }}
                  variant="outlined"
                  onClick={() =>
                    navigate(`/BoardModify`, {
                      state: {
                        boardTitle: board.boardTitle,
                        boardContent: board.boardContent,
                        boardCode: board.boardCode
                      }
                    })
                  }
                >
                  수정
                </Button>
                <Button
                  style={{ margin: '10px', float: 'right' }}
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  onClick={() => deleteBoard()}
                >
                  삭제
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default BoardDetail;
