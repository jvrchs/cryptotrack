const convertTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  const dateString = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  return dateString;
};

export default convertTimestamp;
