import app from '../index.js';
import getRandomInt from '../getRandomInt.js';
import calculate from '../calculate.js';

const task = 'What is the result of the expression?';

const getComponents = () => {
  const num1 = getRandomInt(100);
  const num2 = getRandomInt(10);
  const signIndex = getRandomInt(3);
  const signs = ['+', '-', '*'];

  const question = `${num1} ${signs[signIndex]} ${num2}`;
  const correctAnswer = String(calculate(num1, num2, signs[signIndex]));

  return [question, correctAnswer];
};

export default () => {
  app(getComponents, task);
};
