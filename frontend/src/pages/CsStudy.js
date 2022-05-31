import * as React from "react";
import { Button, Container, Card } from "react-bootstrap";

const CsStudy = () => {
  const subjects = [
    "알고리즘",
    "자료구조",
    "컴퓨터구조",
    "데이터베이스",
    "네트워크",
    "운영체제",
    "면접질문",
    "디자인패턴",
  ];

  const handleSubmit = () => {
    const requestOptions = {
      method: "POST",
      // mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        hello: "helloworld",
      }),
    };
    console.log("requestOptions : ", requestOptions);

    fetch("/hello.act", requestOptions)
      .then((res) => res.json())
      .then((res) => {
        console.log("res : ", res);
      });
  };

  const subjectCard = subjects.map((subject) => (
    <Card
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
        <Card.Title>{subject}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button
          variant="primary"
          onClick={(window.location = "/SubjectDetail" + {})}
        >
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  ));

  return (
    <Container
      maxWidth="lg"
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {subjectCard}
    </Container>
  );
};

export default CsStudy;
