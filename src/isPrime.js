export default (number) => {
  let d = 2;
  while (number % d !== 0) {
    d += 1;
  }
  return d === number;
};
