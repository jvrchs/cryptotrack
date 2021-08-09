import React from "react";
//Material UI
import {
  Grid,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
//React Router
import { Link } from "react-router-dom";
//Number Formatters
import { currencyFormatter, numberFormatter } from "../utils/numberFormatters";

const useStyles = makeStyles({
  viewChartLink: {
    "&:hover": {
      color: "rgb(212, 0, 231)",
    },
  },
});

const CryptoDataTable = ({ searchInput, cryptoData }) => {
  const classes = useStyles();

  return (
    <>
      <TableContainer>
        <Table style={{ tableLayout: "fixed" }}>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>
                <Typography>Price</Typography>
              </TableCell>
              <TableCell>
                <Typography>24h %</Typography>
              </TableCell>
              <TableCell>
                <Typography>Market Cap</Typography>
              </TableCell>
              <TableCell>
                <Typography>Volume (24h)</Typography>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cryptoData
              .filter((crypto) =>
                crypto.name.toLowerCase().includes(searchInput)
              )
              .map((crypto) => (
                <TableRow key={crypto.id}>
                  <TableCell>
                    <Grid container alignItems="center" justifyContent="center">
                      <img
                        src={crypto.image}
                        alt={`${crypto.name} icon`}
                        width="30"
                      />
                    </Grid>
                  </TableCell>
                  <TableCell>
                    <Typography>{crypto.name}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{crypto.symbol.toUpperCase()}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      {currencyFormatter(crypto.current_price)}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      style={{
                        color:
                          crypto.price_change_percentage_24h >= 0
                            ? "#00c30f"
                            : "#c50000",
                      }}
                    >
                      {crypto.price_change_percentage_24h}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      {numberFormatter(crypto.market_cap)}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      {numberFormatter(crypto.total_volume)}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Link to={`/${crypto.id}`}>
                      <Typography className={classes.viewChartLink}>
                        View chart
                      </Typography>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CryptoDataTable;
