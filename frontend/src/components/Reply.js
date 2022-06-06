import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const Reply = () => {
  const [reply, setReply] = useState("");
  const [list, setList] = useState([]);
  //list받아옴
  useEffect(() => {
    fetch("/#", {
      method: "GET",
      header: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setList(data);
      });
  }, []);
  //댓글 보냄
  const submitReply = () => {
    fetch("/insert-reply.act", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        reply: reply,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res : ", res);
        alert("댓글등록완료");
      });
  };
  const changeReply = (e) => {
    setReply(e.target.value);
    console.log(reply);
  };

  return (
    <div style={{ width: "100%" }}>
      {list.map((a, index) => (
        <tr key={index}>
          <td>{a.user}</td>
          <td>{a.content}</td>
          <Button onClick={"#"}>수정</Button>
          <Button onClick={"#"}>삭제</Button>
        </tr>
      ))}
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

        <Button variant="outlined" onClick={submitReply}>
          댓글등록
        </Button>
      </div>
    </div>
  );
};

export default Reply;
