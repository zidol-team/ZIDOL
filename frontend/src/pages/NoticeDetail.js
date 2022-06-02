import React, { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../components/NoticeDetail.css";

const BoardDetail = ({}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const changelocationCode = location.state.boardCode;
  const [board, setBoard] = useState([]);

  const deleteBoard = () => {
    fetch("/board-detail-delete", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        boardCode: changelocationCode,
      }),
    }).then((ref) => {
      navigate("/Notice");
    });
  };
  useEffect(() => {
    fetch(`/board-detail?boardCode=${changelocationCode}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setBoard(data);
      });
  }, []);

  return (
    <>
      <h2 align="center">게시글 상세정보</h2>

      <div className="voc-view-wrapper">
        <div className="voc-view-row">
          <label>제목</label>
          <label>{board.boardTitle}</label>
        </div>
        <div className="voc-view-row">
          <label>작성일</label>
          <label>{board.boardRegDate}</label>
        </div>
        <div className="voc-view-row">
          <label>내용</label>
          <div>{board.boardContent}</div>
        </div>
      </div>
      <button
        onClick={() =>
          navigate(`/NoticeModify`, {
            state: {
              boardTitle: board.boardTitle,
              boardContent: board.boardContent,
              boardCode: board.boardCode,
            },
          })
        }
      >
        수정
      </button>
      <button onClick={deleteBoard}>삭제</button>
    </>
  );
};

export default BoardDetail;
