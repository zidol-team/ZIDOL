import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const SubjectDetail = ({}) => {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location.state);
  // console.log(location.state.csType);
  // console.log(location.state.studyData);
  // console.log(location.state.studyData[csType]);
  // console.log(location.state.studyData[csName]);
  /* 
  버튼 클릭했을때 선택된 과목 = location.state.csType
  전체 공부 데이터 = location.state.studyData
  */
  const studyData = location.state.studyData;
  // const [studyIndex, setStudyIndex] = useState([]);
  // const [selected, setSelected] = useState("");

  useEffect(() => {
    //
  }, []);

  // 선택한 과목과 데이터상의 과목이름이 같을때
  const mapStudyData = studyData.map((a, index) => {
    if (location.state.csType === a.csType) {
      console.log(a.csContent);
      console.log(a.csName);
      return (
        <div
          key={index}
          onClick={() => {
            navigate(`/cs-study/subject-detail/${a.csType}/${a.csCode}`, {
              state: {
                /*
                csType: a.csType, : 선택했던 과목
                csCode: a.csCode, : 선택한 목록의 csCode
                studyData: studyData, : 전체 데이터
                selected: a.csName, : 선택한 과목에서 클릭한 목록
                 */
                csType: a.csType,
                csCode: a.csCode,
                csContent: a.csContent,
                // studyData: studyData,
                selected: a.csName,
              },
            });
            // alert("클릭적용");
          }}
        >
          {a.csName}
        </div>
      );
      // setStudyIndex([...studyData, a.csName]);
      // console.log(studyIndex);
    }
  });

  return (
    <>
      <h1>선택과목 : {location.state.csType}</h1>
      <div>{mapStudyData}</div>
    </>
  );
};

export default SubjectDetail;
