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
    plugins: {
      legend: {
        position: "top",
      },

      title: {
        display: true,
        text: "개별 과목 진도 확인",
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

  const csCheckButton = csTypes.map((csType, index) => (
    <div key={index}>
      <button
        onClick={() => {
          setCsTypeChart(csType, index);
        }}
      >
        {csType}
      </button>
    </div>
  ));

  return (
    <>
      <Bar options={options} data={data} width={"500"} height={"300"} />

      {csCheckButton}
    </>
  );
}
