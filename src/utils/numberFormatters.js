export const currencyFormatter = (price) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

export const numberFormatter = (number) =>
  new Intl.NumberFormat("en-US").format(number);
