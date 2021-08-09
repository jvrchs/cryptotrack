import { Container } from "@material-ui/core";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import CryptoDataTable from "../components/CryptoDataTable";

const Home = ({ history, cryptoData, loading }) => {
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
          loading={loading}
        />
      </Container>
    </>
  );
};

export default Home;
