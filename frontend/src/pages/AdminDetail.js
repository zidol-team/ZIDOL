import React, { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../components/NoticeDetail.css";
import Button from "@mui/material/Button";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const AdminDetail = ({}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const changelocationCode = location.state.csCode;
  const [csList, setcsList] = useState([]);

  const item2 = `${csList.csContent}`;
  useEffect(() => {
    const userInfo = {
      userCode: localStorage.getItem("userCode"),
      userEmail: localStorage.getItem("userEmail"),
      userName: localStorage.getItem("userName"),
      userNickname: localStorage.getItem("userNickname"),
    };
    fetch(`/find-admin-cs.act?csCode=${changelocationCode}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.data);
        setcsList(data.data);
      });
  }, []);

  return (
    <>
      <h2 align="center">게시글 상세정보</h2>

      <div className="view-wrapper">
        <div className="view-row">
          <label>제목</label>
          <label>{csList.csName}</label>
        </div>
        <div className="view-row">
          <label>작성일</label>
          <label>{csList.csRegdate}</label>
        </div>
        <div className="view-row"></div>
        <span align="left">
          <ReactMarkdown rehypePlugins={[rehypeRaw]} children={item2} />,
          {/* {ReactHtmlParser(csList.csContent)}/ */}
        </span>
      </div>

      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Button
          variant="outlined"
          onClick={() =>
            navigate(`/AdminModify`, {
              state: {
                csName: csList.csName,
                csContent: csList.csContent,
                csCode: csList.csCode,
              },
            })
          }
        >
          수정
        </Button>

        <Button variant="outlined" onClick={() => navigate(`/Admin`)}>
          목록
        </Button>
      </div>
    </>
  );
};

export default AdminDetail;
