const getNumberType = (number) => {
  if (number % 2 === 0 && number !== 0 && number > 0) {
    return "even number";
  } else if (number % 2 !== 0) {
    return "odd number";
  } else {
    return null;
  }
};

export default getNumberType;
