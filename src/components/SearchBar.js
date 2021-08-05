import { TextField } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/styles";

const CssTextField = withStyles({
  root: {
    "& .MuiInputLabel-outlined": {
      color: "white",
    },
    "& label.Mui-focused": {
      color: "rgb(255, 169, 234)",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "rgb(255, 169, 234)",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgb(212, 0, 231)",
      },
      "&:hover fieldset": {
        borderColor: "rgb(255, 169, 234)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgb(212, 0, 231)",
      },
      "& .MuiInputBase-input": {
        color: "white",
      },
    },
  },
})(TextField);

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = () => {};

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <CssTextField
        label="Search"
        variant="outlined"
        color="secondary"
        className="searchBar-input"
        fullWidth
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
