import Button from '@mui/material/Button';
import React, { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PostReply } from '../api/reply';

export default function Reply() {
  const [reply, setReply] = useState({ reply: '' });
  const [list1, setList1] = useState([]);
  const [list2, setList2] = useState([]);
  //댓글 보냄
  const submitReply = () => {
    const userCode = localStorage.getItem('userCode');

    PostReply(reply, userCode, setReply, setList2, list1);
  };
  return (
    <div>
      <div className="areacontainer">
        <textarea
          onChange={(e) => {
            setReply(() => {
              return { ...reply, reply: e.target.value };
            });
          }}
          className="replycontent"
          name="message"
          placeholder="Message"
          rows="10"
        ></textarea>
      </div>
      <div className="buttonss">
        <Button variant="outlined" onClick={submitReply}>
          댓글등록
        </Button>
      </div>
      <div>
        {list1.map((a, index) => (
          <div key={index}>
            <div className="form-control">
              <div>
                <span style={{ float: 'left', marginRight: '10px' }}>{a.user.userNickname}</span>
                <div style={{ float: 'right' }}>
                  {/* <Button onClick={() => deleteReply(a.reply.replyCode)}>삭제</Button> */}
                </div>
                <span style={{ float: 'right' }}>{a.reply.replyRegdate}</span>
              </div>
              <div>
                <span style={{ float: 'inline-start' }}>{a.reply.replyContent}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
