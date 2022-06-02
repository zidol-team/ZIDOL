import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Algorithm from "../data/algorithm";
import DataStructure from "../data/dataStructure";

const SubjectInfo = ({}) => {
  const location = useLocation();
  const csCode = location.state.csCode;
  const [algorithm, setAlgorithm] = useState(Algorithm);
  const [dataStructure, setDataStructure] = useState(DataStructure);

  /* 
  선택된 리스트 = location.state.selected
  전체 공부 데이터 = location.state.studyData
  보내야할 것(선택한 목록의 csCode) = location.state.csCode
  */

  console.log(location.state);
  console.log(location.state.csCode);
  // console.log(location.state.selected);
  // console.log(algorithm);

  // 선택한 목차와 내용을 저장한 데이터의 title과 같은지 비교
  const mapSubjectInfo = dataStructure.map((a, index) => {
    if (location.state.selected === a.title) {
      console.log(a.content);
      return <div key={index}>{a.content}</div>;
    }
  });

  useEffect(() => {
    //
  }, []);

  // 버튼 눌렀을때 전송 (csCode)
  const handleSubmit = (event) => {
    // event.preventDefault();
    // const data = new FormData(event.currentTarget);
    console.log("csCode " + csCode + " 클릭했음");

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        // userEmail, userPassword 전송
        csCode: csCode,
        userCode: 1,
      }),
    };
    console.log("requestOptions : ", requestOptions);

    fetch("/achievement.act", requestOptions)
      .then((res) => res.json())
      .then((res) => {
        console.log("res : ");
        console.log(res);
        //res로 무엇을할지 나중에 작성
        //
      });
  };

  return (
    <>
      <h1>{location.state.csType}</h1>
      <h3>{location.state.selected}</h3>
      <div>{mapSubjectInfo}</div>
      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        공부완료
      </button>
    </>
  );
};

export default SubjectInfo;