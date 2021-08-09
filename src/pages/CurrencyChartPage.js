import React from "react";
import { useState, useEffect } from "react";
//React Router
import { useParams } from "react-router";
//Axios
import axios from "axios";
//Spinner
import { PuffLoader } from "react-spinners";
//Material UI
import { Grid } from "@material-ui/core";
//Components
import CurrencyInfo from "../components/CurrencyInfo";
import CurrencyChart from "../components/CurrencyChart";
//Utils
import convertTimestamp from "../utils/timestampConverter";

const CurrencyChartPage = ({ cryptoData, history }) => {
  const { currencyId } = useParams();
  console.log(cryptoData);
  const [filteredCurrency] = cryptoData.filter(
    (crypto) => crypto.id === currencyId
  );

  const [currencyData, setCurrencyData] = useState(filteredCurrency);

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
        <Grid
          container
          justifyContent="center"
          alignContent="center"
          style={{ marginTop: "10vh" }}
        >
          <br />
          <PuffLoader loading={loading} color={"rgb(212, 0, 231)"} />
        </Grid>
      ) : (
        <Grid container direction="column">
          <Grid item>
            <CurrencyInfo currencyData={currencyData} history={history} />
          </Grid>
          <Grid item style={{ margin: "10px 0" }}>
            <CurrencyChart
              dateLabels={dateLabels}
              prices={prices}
              currencyData={currencyData}
            />
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default CurrencyChartPage;
