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
  const totalData = useContext(TotalContext);
  const [wholePercent, setWholePercent] = useState(0);
  const [chartData, setChartData] = useState({
    total: {
      네트워크: 10,
      운영체제: 15,
      자료구조: 9,
      데이터베이스: 11,
      컴퓨터구조: 6,
      디자인패턴: 9,
      알고리즘: 16,
    },
    done: {
      네트워크: 1,
      운영체제: 3,
      자료구조: 5,
      데이터베이스: 4,
      컴퓨터구조: 2,
      디자인패턴: 2,
      알고리즘: 7,
    },
    percent: {
      네트워크: 10,
      운영체제: 20,
      자료구조: 55.55555555555556,
      데이터베이스: 36.36363636363637,
      컴퓨터구조: 33.33333333333333,
      디자인패턴: 22.22222222222222,
      알고리즘: 43.75,
    },
  });
  // console.log(chartData);
  // console.log(chartData.total["네트워크"]);

  // totalData.done
  //   네트워크: 0
  // 데이터베이스: 3
  // 디자인패턴: 1
  // 알고리즘: 6
  // 운영체제: 4
  // 자료구조: 3
  // 컴퓨터구조: 2

  const getWholePercent = () => {
    console.log(chartData);
    if (chartData !== undefined) {
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
      setWholePercent(wholePercent);
    }
  };

  const options = {
    indexAxis: "y",
    scales: {
      xAxis: {
        min: 0,
        max: 100,
      },
    },
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: false,
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
    datasets: [
      {
        label: "Dataset 1",
        data: [wholePercent],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  console.log();

  useEffect(() => {
    setChartData(totalData);
  }, [totalData]);
  useEffect(() => {
    setTimeout(getWholePercent, 1000);
  }, [chartData]);

  return (
    <>
      <div>
        <Bar options={options} data={data} height={100} />
      </div>
    </>
  );
}
