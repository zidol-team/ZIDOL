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

  useEffect(() => {
    if (totalData != "undefined" && totalData != null) {
      setChartData(totalData);
    }

    getWholePercent();

    // 퍼센트에 해당하는 데이터들
  }, [totalData]);

  // totalData.done
  //   네트워크: 0
  // 데이터베이스: 3
  // 디자인패턴: 1
  // 알고리즘: 6
  // 운영체제: 4
  // 자료구조: 3
  // 컴퓨터구조: 2

  const getWholePercent = () => {
    const totalCount =
      chartData.total["네트워크"] +
      chartData.total["데이터베이스"] +
      chartData.total["디자인패턴"] +
      chartData.total["알고리즘"] +
      chartData.total["운영체제"] +
      chartData.total["자료구조"] +
      chartData.total["컴퓨터구조"];

    const doneCount =
      totalData.done["네트워크"] +
      totalData.done["데이터베이스"] +
      totalData.done["디자인패턴"] +
      totalData.done["알고리즘"] +
      totalData.done["운영체제"] +
      totalData.done["자료구조"] +
      totalData.done["컴퓨터구조"];
    const wholePercent = (doneCount / totalCount) * 100;
    console.log(wholePercent);
  };

  const checkData = () => {
    console.log(totalData);
    console.log(totalData.done);
    console.log(totalData.total["네트워크"]);
  };

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
        data: [chartData],
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
          checkData();
        }}
      >
        버튼
      </button>
    </>
  );
}
