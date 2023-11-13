import app from '../index.js';
import getRandomInt from '../getRandomInt.js';
import isPrime from '../isPrime.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getComponents = () => {
  const number = getRandomInt(100);
  const question = number;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  app(getComponents, task);
};
