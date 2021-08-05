import { Container } from "@material-ui/core";
import React from "react";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <>
      <Container maxWidth="xs">
        <SearchBar />
      </Container>
    </>
  );
};

export default Home;
