import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./Ckeditor.css";
import Button from "@mui/material/Button";

function BoardWrite() {
  const [qnaContent, setQnaContent] = useState({
    boardTitle: "",
    boardContent: "",
    boardType: "질문게시판",
  });
  const [user, setUser] = useState("");

  const getValue = (e) => {
    const { name, value } = e.target;
    setQnaContent({
      ...qnaContent,
      [name]: value,
    });
  };
  const userInfo = {
    userCode: localStorage.getItem("userCode"),
    userEmail: localStorage.getItem("userEmail"),
    userName: localStorage.getItem("userName"),
    userNickname: localStorage.getItem("userNickname"),
  };

  console.log(localStorage.getItem("userCode"));

  const PostSubmit = (event) => {
    //event.preventDefault();
    const userCode = localStorage.getItem("userCode");
    console.log(userCode);
    fetch("/insert-board.act", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        boardTitle: qnaContent.boardTitle,
        boardContent: qnaContent.boardContent,
        boardType: qnaContent.boardType,
        // userEmail, userPassword 전송
        userCode: userCode,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res : ");
        console.log(res);

        alert("등록완료");
        if (qnaContent.boardContent != "") {
          window.location = "/Board";
        } else {
          alert("글을 입력해주세요");
        }
      });
  };
  return (
    <div className="poststyle">
      <input type="hidden" name="boardType" value="질문게시판" />
      <br />

      <input
        style={{ width: "70%", height: "40px", margin: "10px" }}
        onChange={getValue}
        placeholder="제목"
        type="text"
        name="boardTitle"
      />

      <CKEditor
        editor={ClassicEditor}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
          setQnaContent({
            ...qnaContent,
            boardContent: data,
          });
        }}
      />
      <Button
        variant="outlined"
        onClick={PostSubmit}
        style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        등록
      </Button>
    </div>
  );
}
export default BoardWrite;
