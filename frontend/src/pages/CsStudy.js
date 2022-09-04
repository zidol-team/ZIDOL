import { useState, useEffect } from 'react';
import { Button, Container, Card } from 'react-bootstrap';

import { Routes, Route, Link, Outlet, Navigate, useNavigate } from 'react-router-dom';
import './CsStudy.css';
import { URLS } from '../api/csStudy';

const CsStudy = () => {
  const navigate = useNavigate();

  const csTypes = [
    '알고리즘',
    '자료구조',
    '컴퓨터구조',
    '데이터베이스',
    '네트워크',
    '운영체제',
    '면접질문',
    '디자인패턴'
  ];
  const csTypeInfo = [
    '알고리즘(영어: algorithm), 셈법은 수학과 컴퓨터과학, 언어학 또는 엮인 분야에서 어떠한 문제를 해결하기 위해 정해진 일련의 절차이다.',
    '자료구조(資料構造, 영어: data structure)는 컴퓨터 과학에서 효율적인 접근 및 수정을 가능케 하는 자료의 조직, 관리, 저장을 의미한다.',
    '컴퓨터 구조(computer architecture)는 컴퓨터 과학에서 컴퓨터 시스템의 기능, 조직, 구현에 대한 법칙과 방법을 통칭한다.',
    '데이터베이스(영어: database, DB)는 여러 사람이 공유하여 사용할 목적으로 체계화해 통합, 관리하는 데이터의 집합이다.',
    '네트워크(network)란 컴퓨터들이 통신망을 통해 서로 그물처럼 연결된 체계를 말한다. 간략히 N/W라고도 쓴다. 통신망 또는 줄여서 망(網)이라고도 한다.',
    '운영 체제(operating system)은 사용자의 하드웨어, 시스템 리소스를 제어하고 프로그램에 대한 일반적 서비스를 지원하는 시스템 소프트웨어이다.',
    '면접에서 필요한 질문들을 모았습니다. / <6월 10일 대규모 업데이트! D-1>',
    '객체 지향 프로그래밍 설계를 할 때 자주 발생하는 문제들을 피하기 위해 사용되는 패턴.'
  ];
  const [studyData, setStudyData] = useState([]);

  const getData = async () => {
    const requestOptions = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      }
    };
    // console.log("requestOptions : ", requestOptions);

    const data = await fetch(URLS.CS_LIST, requestOptions)
      .then((res) => res.json())
      .then((res) => {
        console.log('res : ', res);
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
        width: '18rem',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        marginBottom: 20
      }}
    >
      <Card.Body style={{ backgroundColor: '#b6daff' }}>
        <Card.Title style={{ color: 'balck' }}>
          <div className="csType">{csType}</div>
        </Card.Title>
        <Card.Text>{csTypeInfo[index]}</Card.Text>
        <Button
          variant="primary"
          onClick={() =>
            navigate(`subject-detail/${csType}`, {
              state: { csType: csType, studyData: studyData }
            })
          }
        >
          학습하러 가기
        </Button>
      </Card.Body>
    </Card>
  ));

  return (
    <Container
      maxwidth="lg"
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}
    >
      {csTypeCard}
    </Container>
  );
};

export default CsStudy;
