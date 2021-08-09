import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import CurrencyChart from "../components/CurrencyChart";
import convertTimestamp from "../utils/timestampConverter";
import { PuffLoader } from "react-spinners";

const CurrencyChartPage = ({ cryptoData }) => {
  const { currencyId } = useParams();

  const [currencyInfo] = cryptoData.filter(
    (crypto) => crypto.id === currencyId
  );

  const [loading, setLoading] = useState(true);

  const [dateLabels, setDateLabels] = useState([]);

  const [prices, setPrices] = useState([]);

  const createDateLabelsArray = (data) => {
    const dateLabelsArray = [];
    const prices = data.prices;
    prices.forEach((price) => {
      const dateString = convertTimestamp(price[0]);
      dateLabelsArray.push(dateString);
    });
    return dateLabelsArray;
  };

  const createPricesArray = (data) => {
    const pricesArray = [];
    const prices = data.prices;
    prices.forEach((price) => {
      pricesArray.push(price[1]);
    });
    return pricesArray;
  };

  const updateData = () => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${currencyId}/market_chart?vs_currency=usd&days=90&interval=daily`
      )
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setDateLabels(createDateLabelsArray(data));
        setPrices(createPricesArray(data));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    updateData();

    return () => setLoading(true);
  }, []);

  return (
    <div>
      {loading ? (
        <PuffLoader loading={loading} color={"rgb(212, 0, 231)"} />
      ) : (
        <CurrencyChart
          dateLabels={dateLabels}
          prices={prices}
          currencyInfo={currencyInfo}
        />
      )}
    </div>
  );
};

export default CurrencyChartPage;
