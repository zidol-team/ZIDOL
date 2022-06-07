import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Reply = (props) => {
  const [reply, setReply] = useState("");
  const [list, setList] = useState([]);
  const userName = localStorage.getItem("userName");
  const userCode = localStorage.getItem("userCode");
  const board = props.board;

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
        alert("댓글등록완료");
      });
  };
  const changeReply = (e) => {
    setReply(e.target.value);
    console.log(reply);
  };

  return (
    <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
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

      <Button variant="outlined" onClick={() => submitReply()}>
        댓글등록
      </Button>
    </div>
  );
};

export default Reply;
