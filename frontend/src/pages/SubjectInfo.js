import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Algorithm from '../data/algorithm';
import DataStructure from '../data/dataStructure';

import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import './SubjectInfo.css';
import { URLS } from '../api/csStudy';

const SubjectInfo = ({}, index) => {
  const location = useLocation();
  const navigate = useNavigate();
  const csCode = location.state.csCode;
  const studyData = location.state;

  const [algorithm, setAlgorithm] = useState(Algorithm);
  const [dataStructure, setDataStructure] = useState(DataStructure);
  const [user, setUser] = useState({});

  const item2 = `${studyData.csContent.csContent}`;
  /* 
  선택된 리스트 = location.state.selected
  전체 공부 데이터 = location.state.studyData
  보내야할 것(선택한 목록의 csCode) = location.state.csCode
  */

  // 선택한 목차와 내용을 저장한 데이터의 title과 같은지 비교
  // const mapSubjectInfo = studyData.map((a, index) => {
  // if (location.state.selected === a.title) {
  //   return <div key={index}>{a.content}</div>;
  // }
  // });

  useEffect(() => {
    const userInfo = {
      userCode: localStorage.getItem('userCode'),
      userEmail: localStorage.getItem('userEmail'),
      userName: localStorage.getItem('userName'),
      userNickname: localStorage.getItem('userNickname')
    };
    // 로그인 정보 저장
    setUser((user) => {
      return { ...user, ...userInfo };
    });
    console.log(user);
  }, []);

  // 버튼 눌렀을때 전송 (csCode)
  const handleSubmit = (event) => {
    console.log('csCode ' + csCode + ' 클릭했음');
    const requestOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({
        // userEmail, userPassword 전송
        csCode: csCode,
        userCode: user.userCode
      })
    };
    console.log('requestOptions : ', requestOptions);

    fetch(URLS.CS_ACHIEVE_INSERT, requestOptions)
      .then((res) => res.json())
      .then((res) => {
        console.log('res : ');
        console.log(res);

        if (res.code === 'DUPLICATED_ACHIEVEMENT') {
          alert(res.fieldErrors[0].message);
        } else {
          alert('학습 완료');
          navigate(-1);
        }
      });
  };

  return (
    <>
      <div className="subjectInfoContainer">
        <div className="subjectInfoMainContainer">
          <div className="subjectInfoHeader">
            <div className="csTypeTitle">
              <h1>{location.state.csType}</h1>
            </div>
            <div className="csTypeSelected">
              <h3>{location.state.selected}</h3>
            </div>
          </div>
          <span align="left">
            <ReactMarkdown rehypePlugins={[rehypeRaw]} children={item2} />,
          </span>

          <div className="studyDoneButtonContainer">
            <button
              className="studyDoneButton"
              onClick={() => {
                handleSubmit();
              }}
            >
              공부완료
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubjectInfo;
