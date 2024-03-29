import React, { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ReactHtmlParser from 'react-html-parser';
import TextField from '@mui/material/TextField';
import '../board/Board.css';
import { DeleteBoard, GetBoardDetail, PostReply } from '../../api/board';

const BoardDetail = ({}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const changelocationCode = location.state.boardCode;
  const [board, setBoard] = useState([]);
  const [reply, setReply] = useState('');
  const [list1, setList1] = useState([]);
  const [list2, setList2] = useState([]);
  const [user, setUser] = useState([]);
  const userName = localStorage.getItem('userName');
  const userCode = localStorage.getItem('userCode');

  useEffect(() => {
    GetBoardDetail(changelocationCode, setUser, setBoard, setList1);
  }, [list2]);

  const deleteBoard = () => {
    DeleteBoard(changelocationCode, userCode);
  };
  const deleteReply = (replyCode) => {
    fetch('/delete-reply.act', {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({
        replyCode: replyCode,
        userCode: userCode
      })
    }).then((ref) => {});

    const newList = list1.filter((data) => {
      return data.replyCode !== replyCode;
    });
    setList2(newList);
  };
  const submitReply = () => {
    const userCode = localStorage.getItem('userCode');

    fetch('/insert-reply.act', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({
        replyContent: reply,
        userCode: userCode,
        boardCode: board.boardCode
      })
    })
      .then((res) => res.json())
      .then((res) => {
        setReply('');
        setList2(list1);
        alert('댓글등록완료');
      });
  };

  return (
    <>
      <div>
        <div className="bcontainer">
          <div style={{ margin: '10px', fontSize: '30px', fontWeight: 'bold' }}>
            Q. {board.boardTitle}
          </div>
          <div>
            <span style={{ textAlign: 'left', marginRight: '10px' }}>{user.userNickname}</span>
            <span style={{ textAlign: 'right' }}>{board.boardRegDate}</span>
          </div>
          <hr></hr>
          <div>
            <label>{ReactHtmlParser(board.boardContent)}</label>
          </div>
          <div className="buttonss">
            <Button variant="outlined" onClick={() => navigate(`/Board`)}>
              목록
            </Button>
            {userCode === user.userCode ? (
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
          <div className="areacontainer">
            <textarea
              onChange={(e) => {
                setReply(() => {
                  return { ...reply, reply: e.target.value };
                });
              }}
              className="replycontent"
              name="message"
              placeholder="댓글을 입력해주세요"
              rows="10"
            ></textarea>
          </div>
          <div className="buttonss">
            <Button variant="outlined" onClick={submitReply}>
              댓글등록
            </Button>
          </div>
          <div>
            {list1.map((a, index) => (
              <div key={index}>
                <div className="form-control">
                  <div>
                    <span style={{ float: 'left', marginRight: '10px' }}>
                      {a.user.userNickname}
                    </span>
                    <div style={{ float: 'right' }}>
                      <Button onClick={() => deleteReply(a.reply.replyCode)}>삭제</Button>
                    </div>
                    <span style={{ float: 'right' }}>{a.reply.replyRegdate}</span>
                  </div>
                  <div>
                    <span style={{ float: 'inline-start' }}>{a.reply.replyContent}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BoardDetail;
