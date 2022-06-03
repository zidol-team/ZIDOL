import { useState, useEffect } from "react";
import { Button, Container, Card } from "react-bootstrap";

import {
  Routes,
  Route,
  Link,
  Outlet,
  Navigate,
  useNavigate,
} from "react-router-dom";

const CsStudy = () => {
  const navigate = useNavigate();

  const csTypes = [
    "알고리즘",
    "자료구조",
    "컴퓨터구조",
    "데이터베이스",
    "네트워크",
    "운영체제",
    "면접질문",
    "디자인패턴",
  ];
  const [studyData, setStudyData] = useState([]);

  const getData = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    };
    // console.log("requestOptions : ", requestOptions);

    const data = await fetch("/cs-study.act", requestOptions)
      .then((res) => res.json())
      .then((res) => {
        console.log("res : ", res);
        setStudyData(res.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const csTypeCard = csTypes.map((csType, index) => (
    <Card
      key={index}
      style={{
        width: "18rem",
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        marginBottom: 20,
      }}
    >
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{csType}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button
          variant="primary"
          onClick={() =>
            navigate(`subject-detail/${csType}`, {
              state: { csType: csType, studyData: studyData },
            })
          }
        >
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  ));

  return (
    <Container
      maxwidth="lg"
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {csTypeCard}
    </Container>
  );
};

export default CsStudy;
