import React from "react";
import { useState, useEffect } from "react";
//React-router-dom
import { Switch, Route } from "react-router-dom";
//Pages
import Home from "./pages/Home";
import CurrencyChartPage from "./pages/CurrencyChartPage";
//Layout
import Header from "./layout/Header";
import Main from "./layout/Main";

//Axios
import axios from "axios";

function App() {
  const [cryptoData, setCryptoData] = useState([]);

  const [loading, setLoading] = useState(true);

  const updateData = () => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCryptoData(res.data);
        setLoading(false);
        //setTimeout(updateData, 90000);
      })
      .catch((error) => {
        console.log(error);
        //setTimeout(updateData, 90000)
      });
  };

  useEffect(() => {
    updateData();

    return () => setLoading(true);
  }, []);

  return (
    <div className="App">
      <Header />
      <Main>
        <Switch>
          <Route exact path="/">
            <Home loading={loading} cryptoData={cryptoData} />
          </Route>
          <Route exact path="/:currencyId">
            <CurrencyChartPage cryptoData={cryptoData} />
          </Route>
        </Switch>
      </Main>
    </div>
  );
}

export default App;
