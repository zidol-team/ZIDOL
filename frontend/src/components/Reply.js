import React, { useState } from "react";


const Reply = () => {

   

    const [reply, setReply] = useState([]);
 
    const replyChange = (e) => {
        
        setReply(e.target.value);
        console.log(reply)
    };
   
    const addReply = () => {
        fetch("/insert-reply",{
            method: "POST",
            body: JSON.stringify({
                reply  
              }),
            })
            .then((res) => res.json())
            .then((res) => {
              //console.log("res : ", res);
              alert("등록완료");
                  
            });
    };
  /*
    const removeReply = (ReplyCode) => { 
      return setReply(reply.filter((reply) => reply.ReplyCode !== ReplyCode));
    };
  
    const chagneReply = (ReplyCode, inputWord) => { 
      return setComments(comments.map((comment) => {
        if (comment.id === id) {
          return {
            ...comment,
            content: inputWord,
          };
        }
        return comment;
      }));
    };
  */
    return (
      <div>
        <input value={reply} onChange={replyChange}></input>
        <button>
          댓글달기
        </button>
        {/*
        {reply.map((reply, index) => (
          <CommentWrapper key={`${reply.userName}_${index}`}>
            <UserInfoWrapper>
              <p>{reply.userName}</p>
              <Button onClick={removeReply}>삭제</Button>
              <Button onClick={chagneReply}>
                수정
              </Button>
            </UserInfoWrapper>
            내용: {comment.content}
          </CommentWrapper>
        ))}
        */}
      </div>
    );
  };
 
  export default Reply;
  