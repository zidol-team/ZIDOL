import React, { useContext, useEffect, useState } from "react";
import Data from "../data/data";

const SubjectDetail = (props) => {
  const algorithmList = props.algorithm;
  console.log(props.algorithm);

  const titleList = algorithmList.map((a, index) => (
    <div key={index}>
      <div>SubjectDetail</div>
      <div>{a.title}</div>
    </div>
  ));

  return <div>{titleList}</div>;
};

export default SubjectDetail;
