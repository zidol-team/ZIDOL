import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Algorithm from "../data/algorithm";

const SubjectDetail = (props) => {
  const algorithmList = props.algorithm;
  const subject = useParams();
  console.log(subject);
  console.log(props);

  console.log(props.key);

  const titleList = algorithmList.map((a, index) => (
    <div key={index}>
      <div>SubjectDetail</div>
      <div>{a.title}</div>
    </div>
  ));

  return <div>{titleList}</div>;
};

export default SubjectDetail;
