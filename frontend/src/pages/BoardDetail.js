import React, { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import ReactHtmlParser from "react-html-parser";
import TextField from "@mui/material/TextField";
import "../pages/Board.css";

const BoardDetail = ({}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const changelocationCode = location.state.boardCode;
  const [board, setBoard] = useState([]);
  const [reply, setReply] = useState("");
  const [list1, setList1] = useState([]);
  const [list2, setList2] = useState([]);
  const [user, setUser] = useState([]);
  const userName = localStorage.getItem("userName");
  const userCode = localStorage.getItem("userCode");

  useEffect(() => {
    console.log(userCode);
    fetch(`/find-board.act?boardCode=${changelocationCode}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setUser(data.data.user);
        setBoard(data.data.board);
        setList1(data.data.board.reply);
      });
  }, [list2]);

  const deleteBoard = () => {
    fetch("/delete-board.act", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        boardCode: changelocationCode,
        userCode: userCode,
      }),
    }).then((ref) => {
      navigate("/Board");
    });
  };
  const deleteReply = (replyCode) => {
    fetch("/delete-reply.act", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        replyCode: replyCode,
        userCode: userCode,
      }),
    }).then((ref) => {});

    const newList = list1.filter((data) => {
      return data.replyCode !== replyCode;
    });
    setList2(newList);
  };
  //댓글 보냄
  const submitReply = () => {
    const userCode = localStorage.getItem("userCode");

    fetch("/insert-reply.act", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        replyContent: reply,
        userCode: userCode,
        boardCode: board.boardCode,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setReply("");
        setList2(list1);
        alert("댓글등록완료");
      });
  };
  const changeReply = (e) => {
    setReply(e.target.value);
  };

  return (
    <>
      <div style={{ width: "100%" }}>
        <div className="bcontainer">
          <div style={{ margin: "10px", fontSize: "30px", fontWeight: "bold" }}>
            Q. {board.boardTitle}
          </div>
          <div>
            <span style={{ textAlign: "left", marginRight: "10px" }}>
              {user.userName}
            </span>
            <span style={{ textAlign: "right" }}>{board.boardRegDate}</span>
          </div>
          <hr></hr>
          <div className="content">
            <label>{ReactHtmlParser(board.boardContent)}</label>
          </div>
          <div className="buttonss">
            <Button variant="outlined" onClick={() => navigate(`/Board`)}>
              목록
            </Button>
            {userCode == user.userCode ? (
              <div className="buttons">
                <Button
                  style={{ margin: "10px", float: "right" }}
                  variant="outlined"
                  onClick={() =>
                    navigate(`/BoardModify`, {
                      state: {
                        boardTitle: board.boardTitle,
                        boardContent: board.boardContent,
                        boardCode: board.boardCode,
                      },
                    })
                  }
                >
                  수정
                </Button>
                <Button
                  style={{ margin: "10px", float: "right" }}
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  onClick={() => deleteBoard()}
                >
                  삭제
                </Button>
              </div>
            ) : null}
          </div>
          <div className="areacontainer">
            <textarea
              value={reply}
              onChange={changeReply}
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
                    <span style={{ float: "left", marginRight: "10px" }}>
                      {userName}
                    </span>
                    <div style={{ float: "right" }}>
                      <Button onClick={() => deleteReply(a.replyCode)}>
                        삭제
                      </Button>
                    </div>
                    <span style={{ float: "right" }}>{a.replyRegdate}</span>
                  </div>
                  <div>
                    <span style={{ float: "inline-start" }}>
                      {a.replyContent}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BoardDetail;
