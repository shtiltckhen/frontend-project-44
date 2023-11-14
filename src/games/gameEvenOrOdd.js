import app from '../index.js';
import getRandomInt from '../getRandomInt.js';

const isEven = (number) => number % 2 === 0;

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const getComponents = () => {
  const number = getRandomInt(0, 100);
  const question = number;
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  app(getComponents, task);
};
