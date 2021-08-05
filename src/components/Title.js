import React from "react";
import TimelineIcon from "@material-ui/icons/Timeline";
import { Grid } from "@material-ui/core";

const Title = () => {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item>
        <TimelineIcon style={{ color: "rgb(212, 0, 231)", fontSize: "48px" }} />
      </Grid>
      <Grid item>
        <h1>CryptoTrack</h1>
      </Grid>
    </Grid>
  );
};

export default Title;
