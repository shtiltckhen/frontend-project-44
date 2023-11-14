import app from '../index.js';
import getRandomInt from '../getRandomInt.js';

const isPrime = (number) => {
  let d = 2;
  while (number % d !== 0) {
    d += 1;
  }
  return d === number;
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getComponents = () => {
  const number = getRandomInt(2, 100);
  const question = number;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  app(getComponents, task);
};
