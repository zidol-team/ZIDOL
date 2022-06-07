import React, { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../components/NoticeDetail.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import ReactHtmlParser from "react-html-parser";
import Reply from "../components/Reply";

const BoardDetail = ({}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const changelocationCode = location.state.boardCode;
  const [board, setBoard] = useState([]);
  const [list, setList] = useState([]);
  const userName = localStorage.getItem("userName");
  const userCode = localStorage.getItem("userCode");

  useEffect(() => {
    fetch(`/find-board.act?boardCode=${changelocationCode}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        console.log(data.data.reply);
        setBoard(data.data);
        setList(data.data.reply);
      });
  }, [list]);

  const deleteBoard = () => {
    fetch("/delete-board.act", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        boardCode: changelocationCode,
        userCode: userCode,
      }),
    }).then((ref) => {
      navigate("/Board");
    });
  };
  const deleteReply = (replyCode) => {
    console.log(replyCode);
    fetch("/delete-reply.act", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        replyCode: replyCode,
        userCode: userCode,
      }),
    }).then((ref) => {});
  };

  return (
    <>
      <div className="view-wrapper">
        <div className="view-row">
          <label>제목</label>
          <label>{board.boardTitle}</label>
        </div>
        <div className="view-row">
          <label>작성일</label>
          <label>{board.boardRegDate}</label>
        </div>
        <div className="view-row"></div>
        <div className="content">{ReactHtmlParser(board.boardContent)}</div>
      </div>

      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Button
          variant="outlined"
          onClick={() =>
            navigate(`/BoardModify`, {
              state: {
                boardTitle: board.boardTitle,
                boardContent: board.boardContent,
                boardCode: board.boardCode,
              },
            })
          }
        >
          수정
        </Button>
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={deleteBoard}
        >
          삭제
        </Button>
        <Button variant="outlined" onClick={() => navigate(`/Board`)}>
          목록
        </Button>
        <div
          style={{ width: "80%", marginLeft: "500px", marginRight: "500px" }}
        >
          {list.map((a, index) => (
            <tr key={index}>
              <td>{userName}</td>
              <td style={{ marginRight: "100px" }}>{a.replyContent}</td>
              <td>{a.replyRegdate}</td>

              <td>
                <Button onClick={() => deleteReply(a.replyCode)}>삭제</Button>
              </td>
            </tr>
          ))}
        </div>
        <Reply board={board} />
      </div>
    </>
  );
};

export default BoardDetail;
