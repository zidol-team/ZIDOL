import React, { useContext, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { TotalContext } from "../context/TotalContext";
import "./ChartCompIndividual.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartCompIndividual() {
  const [individualChartData, setIndividualChartData] = useState({});
  const [chartLabel, setChartLabel] = useState("");
  const [chartData, setChartData] = useState(0);
  const totalData = useContext(TotalContext);
  const [success, setSuccess] = useState(false);

  const csTypes1 = ["알고리즘", "자료구조", "컴퓨터구조", "데이터베이스"];
  const csTypes2 = ["네트워크", "운영체제", "면접질문", "디자인패턴"];

  const getIndividualData = () => {
    //
  };

  const options = {
    responsive: false,
    scales: {
      yAxis: {
        min: 0,
        max: 100,
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };
  const labels = [chartLabel];

  const data = {
    labels,
    datasets: [
      {
        label: chartLabel,
        data: [chartData],
        backgroundColor: "rgba(132, 99, 255, 0.5)",
      },
    ],
  };

  useEffect(() => {
    setIndividualChartData(totalData.percent);
    console.log(individualChartData);
  }, [totalData]);
  useEffect(() => {
    setTimeout(getIndividualData, 1000);
  }, [individualChartData]);

  const setCsTypeChart = (csType, index) => {
    console.log(csType);
    setChartLabel(csType);
    setChartData(individualChartData[csType]);
  };

  const csCheckButton1 = csTypes1.map((csType, index) => (
    <div key={index}>
      <button
        onClick={() => {
          setCsTypeChart(csType, index);
          setSuccess(true);
        }}
        className="csNameButton"
      >
        {csType}
      </button>
    </div>
  ));
  const csCheckButton2 = csTypes2.map((csType, index) => (
    <div key={index}>
      <button
        onClick={() => {
          setCsTypeChart(csType, index);
          setSuccess(true);
        }}
        className="csNameButton"
      >
        {csType}
      </button>
    </div>
  ));

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {csCheckButton1}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {csCheckButton2}
      </div>
      <div>
        <Bar options={options} data={data} />
      </div>
      <div>
        {success === true ? (
          <>
            <div>전체 {totalData.total[chartLabel]} 개 항목 중</div>
            <div>{totalData.done[chartLabel]} 개 완료</div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
