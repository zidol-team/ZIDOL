import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Button } from "bootstrap";

function NoticeWrite() {
  const [qnaContent, setQnaContent] = useState({
    boardCode: "",
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
    console.log(qnaContent);
  };
  const PostSubmit = (event) => {
    event.preventDefault();
    console.log(qnaContent);

    // requestOptions
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        qnaContent,
      }),
    };
    console.log("requestOptions : ", requestOptions);

    fetch("/InsertBoard.act", requestOptions)
      .then((res) => res.json())
      .then((res) => {
        console.log("boardCode : ", res.boardCode);
      });
  };
  return (
    <div className="poststyle">
      <input type="hidden" name="boardType" value="질문게시판" />
      <br />
      <label>제목: </label>
      <input
        style={{ width: "500px", height: "40px", margin: "10px" }}
        onChange={getValue}
        type="text"
        name="boardTitle"
      />

      <CKEditor
        editor={ClassicEditor}
        data="질문을 입력해주세요"
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
          setQnaContent({
            ...qnaContent,
            boardContent: data,
          });
        }}
        /*
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
          */
      />
      <button onClick={PostSubmit}>등록</button>
    </div>
  );
}
export default NoticeWrite;
