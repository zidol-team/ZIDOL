import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../Ckeditor.css';
import Button from '@mui/material/Button';
import './BoardWrite.css';
import { postBoardWrite, URLS } from '../../api/board';

export default function BoardWrite() {
  const [qnaContent, setQnaContent] = useState({
    boardTitle: '',
    boardContent: '',
    boardType: '질문게시판',
    userCode: localStorage.getItem('userCode')
  });
  const PostSubmit = (event) => {
    event.preventDefault();
    postBoardWrite(qnaContent);
  };
  return (
    <>
      <div className="boardContainer">
        <div className="boardMainContainer">
          <div className="boardHeader">
            <h1>
              <span>질 문 게 시 판</span>
            </h1>
            <div className="boardDescAndWrite"></div>
          </div>
          <input type="hidden" name="boardType" value="질문게시판" />
          <br />
          <div style={{ alignItems: 'center' }}>
            <input
              style={{ width: '90%', height: '40px', margin: '10px' }}
              onChange={(e) => {
                setQnaContent(() => {
                  return { ...qnaContent, boardTitle: e.target.value };
                });
              }}
              placeholder="제목"
              type="text"
              name="boardTitle"
            />
          </div>

          <CKEditor
            editor={ClassicEditor}
            onChange={(e, editor) => {
              const data = editor.getData();
              //console.log({ event, editor, data });
              setQnaContent(() => {
                return { ...qnaContent, boardContent: data };
              });
            }}
          />
          <div className="boardWriteContainer">
            <button
              className="boardWriteDoneButton"
              variant="outlined"
              onClick={PostSubmit}
              style={{ marginTop: '20px', marginBottom: '20px' }}
            >
              등록
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
