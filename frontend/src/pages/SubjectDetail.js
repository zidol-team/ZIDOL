import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Algorithm from "../data/algorithm";

const SubjectDetail = ({}) => {
  const location = useLocation();
  console.log(location.state);
  console.log(location.state.csType);
  console.log(location.state.studyData);
  // console.log(location.state.studyData[csType]);
  // console.log(location.state.studyData[csName]);
  /* 
  버튼 클릭했을때 선택된 과목 = location.state.csType
  전체 공부 데이터 = location.state.studyData
  */
  const [studyIndex, setStudyIndex] = useState([]);
  const filterStudyData = () => {
    if (location.state.csType === location.state.studyData.csType) {
      return null;
    }
  };
  useEffect(() => {
    //
  }, []);

  const studyList = () => {};

  return <div></div>;
};

export default SubjectDetail;
