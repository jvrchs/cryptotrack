import React from "react";
import { Line } from "react-chartjs-2";
import convertTimestamp from "../utils/timestampConverter";

const CurrencyChart = ({ dateLabels, prices, currencyInfo }) => {
  console.log(currencyInfo);
  const data = {
    labels: dateLabels,
    datasets: [
      {
        label: `${currencyInfo.name} price`,
        data: prices,
        fill: false,
        backgroundColor: "white",
        borderColor: "rgb(212, 0, 231)",
        radius: 3,
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
  return <Line data={data} options={options} />;
};

export default CurrencyChart;
