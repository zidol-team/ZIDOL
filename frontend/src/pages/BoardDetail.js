import React, { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../components/NoticeDetail.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import ReactHtmlParser from "react-html-parser";
import TextField from "@mui/material/TextField";
import Reply from "../components/Reply";

const BoardDetail = ({}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const changelocationCode = location.state.boardCode;
  const [board, setBoard] = useState([]);
  const [reply, setReply] = useState("");
  const [list1, setList1] = useState([]);
  const [list2, setList2] = useState([]);
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
        setList1(data.data.reply);
      });
  }, [list2]);


  const deleteBoard = () => {
    console.log(changelocationCode);
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

    const newList = list1.filter((data) => {
      return data.replyCode !== replyCode;
    });
    setList2(newList);
  };
  //댓글 보냄
  const submitReply = () => {
    const userCode = localStorage.getItem("userCode");

    fetch("/insert-reply.act", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        replyContent: reply,
        userCode: userCode,
        boardCode: board.boardCode,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res : ", res);
        setReply("");
        setList2(list1);
        alert("댓글등록완료");
      });
  };
  const changeReply = (e) => {
    setReply(e.target.value);
    console.log(reply);
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
        <div className="content">
          <label>{ReactHtmlParser(board.boardContent)}</label>
        </div>
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
          onClick={() => deleteBoard()
>
          삭제
        </Button>
        <Button variant="outlined" onClick={() => navigate(`/Board`)}>
          목록
        </Button>
        <div
          style={{ width: "80%", marginLeft: "500px", marginRight: "500px" }}
        >

          {list1.map((a, index) => (

            <tr key={index}>
              <td>{userName}</td>
              <td>{a.replyContent}</td>
              <td>{a.replyRegdate}</td>

              <td>
                <Button onClick={() => deleteReply(a.replyCode)}>삭제</Button>
              </td>
            </tr>
          ))}
        </div>
        <TextField
          id="standard-textarea"
          value={reply}
          onChange={changeReply}
          label="댓글"
          placeholder="댓글을 입력해주세요"
          multiline
          variant="standard"
          style={{ width: "40%" }}
        />

        <Button variant="outlined" onClick={submitReply}>
          댓글등록
        </Button>
      </div>
    </>
  );
};

export default BoardDetail;
