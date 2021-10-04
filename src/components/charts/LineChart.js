import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";

function LineChart({ ele }) {
  const data = {
    labels: ele.data.map((ele) => ele.date),
    datasets: [
      {
        label: "Net Asset Value over the years",
        data: ele.data.map((ele) => Number(ele.nav)),
        fill: false,
        backgroundColor: "#06d3f6",
        borderColor: "#253577",
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
  console.log(window.innerWidth);

  return (
    <div>
      <Line
        type="line"
        data={data}
        options={options}
        height={window.innerWidth > 1000 ? 150 : 290}
        // options={{ maintainAspectRatio: false }}
      />
    </div>
  );
}

export default LineChart;
