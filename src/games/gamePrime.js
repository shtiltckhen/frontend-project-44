const getRandomInt = (max) => Math.floor(Math.random() * max);

export default () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const number = getRandomInt(100);
  const question = number;
  let d = 2;
  while (number % d !== 0) {
    d += 1;
  }
  const correctAnswer = d === number ? 'yes' : 'no';

  return [task, question, correctAnswer];
};
