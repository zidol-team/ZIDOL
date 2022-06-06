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

  const deleteBoard = () => {
    const userCode = localStorage.getItem("userCode");

    fetch("/delete-board.act", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        boardCode: changelocationCode,
        // userEmail, userPassword 전송
        userCode: userCode,
      }),
    }).then((ref) => {
      navigate("/Board");
    });
  };
  useEffect(() => {
    const userInfo = {
      userCode: localStorage.getItem("userCode"),
      userEmail: localStorage.getItem("userEmail"),
      userName: localStorage.getItem("userName"),
      userNickname: localStorage.getItem("userNickname"),
    };
    fetch(`/find-board.act?boardCode=${changelocationCode}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setBoard(data.data);
      });
  }, []);

  return (
    <>
      <h2 align="center">게시글 상세정보</h2>

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
        <Button variant="outlined" onClick={() => navigate(`/Notice`)}>
          목록
        </Button>
      </div>
      <Reply />
    </>
  );
};

export default BoardDetail;
