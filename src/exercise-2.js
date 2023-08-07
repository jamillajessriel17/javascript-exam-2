const getTheExactNumber = (numbers) => {
  const divisbleBy3 = numbers.filter((element) => {
    return element % 3 === 0;
  });
  return Math.max(...divisbleBy3);
};

export default getTheExactNumber;
