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

export default function ChartCompWhole() {
  const [chartData, setChartData] = useState([]);
  const totalData = useContext(TotalContext);
  console.log(chartData);
  // console.log("hi");

  // totalData.done
  //   네트워크: 0
  // 데이터베이스: 3
  // 디자인패턴: 1
  // 알고리즘: 6
  // 운영체제: 4
  // 자료구조: 3
  // 컴퓨터구조: 2

  // const checkData = () => {
  //   console.log(totalData);
  //   console.log(totalData.done);
  //   console.log(totalData.total["네트워크"]);
  // };

  // setChartData();
  // const chartData = totalData.percent;

  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Chart.js Horizontal Bar Chart",
      },
    },
  };
  const labels = ["전체 진행률"];

  const data = {
    labels,
    scales: (0, 100),
    datasets: [
      {
        label: "Dataset 1",
        data: [0],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  console.log();

  useEffect(() => {}, []);

  return (
    <>
      <Bar options={options} data={data} />
      <button
        onClick={() => {
          // checkData();
        }}
      >
        버튼
      </button>
    </>
  );
}
