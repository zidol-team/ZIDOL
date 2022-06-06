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
  const [chartData, setChartData] = useState([]);
  const totalData = useContext(TotalContext);

  useEffect(() => {
    setPercentData();
    // 퍼센트에 해당하는 데이터들
    console.log(chartData);
  }, []);

  const checkPercent = () => {
    console.log(chartData["네트워크"]);
    console.log(chartData["데이터베이스"]);
    console.log(chartData["디자인패턴"]);
    console.log(chartData["알고리즘"]);
    console.log(chartData["운영체제"]);
    console.log(chartData["네트워크"]);
    console.log(chartData["자료구조"]);
    console.log(chartData["컴퓨터구조"]);
  };

  const setPercentData = () => {
    setChartData(totalData.percent);
  };

  // setChartData();
  // const chartData = totalData.percent;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },

      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };
  const labels = [
    "알고리즘",
    "자료구조",
    "컴퓨터구조",
    "데이터베이스",
    "네트워크",
    "운영체제",
    "면접질문",
    "디자인패턴",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [
          // chartData["네트워크"],
          // chartData["데이터베이스"],
          // chartData["디자인패턴"],
          // chartData["알고리즘"],
          // chartData["운영체제"],
          // chartData["네트워크"],
          // chartData["자료구조"],
          // chartData["컴퓨터구조"],
        ],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  console.log();

  return (
    <>
      <Bar options={options} data={data} />
      <button
        onClick={() => {
          checkPercent();
        }}
      >
        퍼센트 확인 버튼
      </button>
    </>
  );
}
