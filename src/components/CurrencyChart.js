import React from "react";
//Material UI
import { Container } from "@material-ui/core";
//Chart JS
import { Line } from "react-chartjs-2";

const CurrencyChart = ({ dateLabels, prices, currencyData }) => {
  const data = {
    labels: dateLabels,
    datasets: [
      {
        label: `${currencyData.name} price`,
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
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <Container maxWidth="md">
      <Line data={data} options={options} />
    </Container>
  );
};

export default CurrencyChart;
