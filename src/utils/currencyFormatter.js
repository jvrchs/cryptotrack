const convertToUsdFormat = (price) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  export convertToUsdFormat;