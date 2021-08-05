import React from "react";
//React-router-dom
import { Switch, Route } from "react-router-dom";
//Pages
import Home from "./pages/Home";
import { CurrencyDetail } from "./pages/CurrencyDetail";
//Layout
import Header from "./layout/Header";
import Main from "./layout/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:id" component={CurrencyDetail} />
        </Switch>
      </Main>
    </div>
  );
}

export default App;
