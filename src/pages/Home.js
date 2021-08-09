import React, { useState } from "react";
//Material UI
import { Container } from "@material-ui/core";
//Components
import SearchBar from "../components/SearchBar";
import CryptoDataTable from "../components/CryptoDataTable";

const Home = ({ history, cryptoData }) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <Container maxWidth="xs">
        <SearchBar setSearchInput={setSearchInput} />
      </Container>
      <br />
      <Container maxWidth="lg">
        <CryptoDataTable
          searchInput={searchInput}
          history={history}
          cryptoData={cryptoData}
        />
      </Container>
    </>
  );
};

export default Home;
