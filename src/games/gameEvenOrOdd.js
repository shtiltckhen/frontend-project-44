import app from '../index.js';
import getRandomInt from '../getRandomInt.js';
import isEven from '../isEven.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const getComponents = () => {
  const number = getRandomInt(100);
  const question = number;
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  app(getComponents, task);
};
