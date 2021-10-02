import React from "react";
import { Bar } from "react-chartjs-2";

function BarChart({ ele }) {
  const data = {
    labels: ele.data.map((ele) => ele.date),
    datasets: [
      {
        label: "Net Asset Value over the years",
        data: ele.data.map((ele) => Number(ele.nav)),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <div>
      <Bar
        type="bar"
        data={data}
        options={options}
        height={window.innerWidth > 1000 ? 150 : 290}
      />
    </div>
  );
}

export default BarChart;
