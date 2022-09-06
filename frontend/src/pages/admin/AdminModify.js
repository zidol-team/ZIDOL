import { useState } from 'react';
import React, { useLocation, useNavigate } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../Ckeditor.css';

import Button from '@mui/material/Button';

function BoardModify() {
  const location = useLocation();
  const navigate = useNavigate();
  const [csContent, setcsContent] = useState('' + location.state.csContent);
  const csCode = location.state.csCode;

  // const [csCon, setcsCon] = useState();
  // const [csCo, setcsCo] = useState();

  const modifySubmit = () => {
    fetch('/update-admin-cs.act', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({
        csContent: csContent,
        csCode: csCode
      })
    })
      .then((res) => res.json())
      .then((data) => {
        navigate('/Admin');
      });
  };
  return (
    <div className="poststyle">
      <input type="hidden" name="boardType" value="질문게시판" />
      <br />
      <div style={{ width: '500px', height: '40px', margin: '10px' }}>
        <label>제목</label>
        <label>{location.state.csName}</label>
      </div>

      <textarea
        value={csContent}
        style={{ width: '600px', height: '500px' }}
        onChange={(e) => setcsContent(e.target.value)}
      />
      <Button variant="outlined" onClick={modifySubmit}>
        수정하기
      </Button>
    </div>
  );
}
export default BoardModify;
