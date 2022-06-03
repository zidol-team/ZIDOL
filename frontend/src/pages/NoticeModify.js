import { useState } from "react";
import React, { useLocation, useNavigate } from "react-router-dom";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import './Ckeditor.css';


function NoticeModify() {
  
  const location = useLocation();
  const navigate = useNavigate();


  const [modifyContent, setModifyContent] = useState({
    boardTitle: location.state.boardTitle,
    boardContent: location.state.boardContent,
    boardType: "",
    boardCode: location.state.boardCode,
  });

  const getValue = (e) => {
    const { name, value } = e.target;
    setModifyContent({
      ...modifyContent,
      [name]: value,
    });
  };
  const modifySubmit = () => {
    fetch("/board-modify", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        modifyContent: modifyContent,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/Notice");
      });
  };
  return (
    <div className="poststyle">
      <input type="hidden" name="boardType" value="질문게시판" />
      <br />

      <input
        style={{ width: "500px", height: "40px", margin: "10px" }}
        value={modifyContent.boardTitle}
        onChange={getValue}
        placeholder="제목"
        type="text"
        name="boardTitle"
      />

      <CKEditor
        editor={ClassicEditor}
        data={modifyContent.boardContent}
        onChange={(event, editor) => {
          const data = editor.getData();
          setModifyContent({
            ...modifyContent,
            boardContent: data,
          });
        }}
      />
      <button onClick={modifySubmit}>수정하기</button>
    </div>
  );
}
export default NoticeModify;
