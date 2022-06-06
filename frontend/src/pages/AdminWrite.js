import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./Ckeditor.css";

function AdminWrite() {
  const [qnaContent, setQnaContent] = useState({
    boardTitle: "",
    boardContent: "",
    boardType: "",
  });

  const getValue = (e) => {
    const { name, value } = e.target;
    setQnaContent({
      ...qnaContent,
      [name]: value,
    });
  };
  const PostSubmit = (event) => {
    event.preventDefault();

    fetch("/insert-board", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        qnaContent: qnaContent,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        alert("등록완료");
        window.location = "/Admin";
      });
  };
  return (
    <div className="poststyle">
      <input type="hidden" name="boardType" value="질문게시판" />
      <br />

      <input
        style={{ width: "90%", height: "40px", margin: "10px" }}
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
      <button onClick={PostSubmit}>등록</button>
    </div>
  );
}
export default AdminWrite;