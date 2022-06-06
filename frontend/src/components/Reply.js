import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";

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
    fetch("/#", {
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
    <div>
      {list.map((a, index) => (
        <tr key={index}>
          <td>{a.user}</td>
          <td>{a.content}</td>
          <Button onClick={"#"}>수정</Button>
          <Button onClick={"#"}>삭제</Button>
        </tr>
      ))}

      <input value={reply} onChange={changeReply}></input>
      <Button variant="outlined" onClick={submitReply}>
        댓글등록
      </Button>
    </div>
  );
};

export default Reply;
