import React from "react";
//Material UI
import { Grid, IconButton, makeStyles, Typography } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
//Number Formatters
import { currencyFormatter, numberFormatter } from "../utils/numberFormatters";

const useStyles = makeStyles({
  goBackButton: {
    "&:hover": {
      color: "rgb(212, 0, 231)",
    },
  },
});

const CurrencyInfo = ({ currencyData, history }) => {
  const classes = useStyles();

  return (
    <Grid container direction="row" justifyContent="center">
      <Grid container item md={2} justifyContent="center" alignItems="center">
        <img
          src={currencyData.image}
          alt={`${currencyData.name} icon`}
          width="100"
        />
      </Grid>
      <Grid
        container
        item
        md={3}
        direction="column"
        justifyContent="center"
        alignContent="flex-start"
      >
        <Typography variant="h4">{currencyData.name}</Typography>
        <Typography>{currencyFormatter(currencyData.current_price)}</Typography>
        <Typography
          style={{
            color:
              currencyData.price_change_percentage_24h >= 0
                ? "#00c30f"
                : "#c50000",
          }}
        >
          {currencyData.price_change_percentage_24h}%
        </Typography>
      </Grid>
      <Grid
        container
        item
        md={5}
        direction="column"
        alignContent="center"
        justifyContent="center"
      >
        <Typography>
          {`Market Cap: ${numberFormatter(currencyData.market_cap)}`}
        </Typography>
        <Typography>
          {`Volume (24h): ${numberFormatter(currencyData.total_volume)}`}
        </Typography>
      </Grid>
      <Grid container item md={1} justifyContent="center">
        <IconButton
          aria-label="back"
          className={classes.goBackButton}
          onClick={() => history.push("/")}
        >
          <ArrowBackIcon
            className={classes.goBackButton}
            style={{ color: "white" }}
          />
          <Typography className={classes.goBackButton}>Go Back</Typography>
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default CurrencyInfo;
