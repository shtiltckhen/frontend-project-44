import app from '../index.js';
import getRandomInt from '../getRandomInt.js';

const calculate = (num1, num2, sign) => {
  let result;
  switch (sign) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      throw new Error(`Unknown operator in expression: '${sign}'!`);
  }
  return result;
};

const task = 'What is the result of the expression?';

const getComponents = () => {
  const num1 = getRandomInt(0, 100);
  const num2 = getRandomInt(0, 10);
  const signs = ['+', '-', '*'];
  const signIndex = getRandomInt(0, signs.length);

  const question = `${num1} ${signs[signIndex]} ${num2}`;
  const correctAnswer = String(calculate(num1, num2, signs[signIndex]));

  return [question, correctAnswer];
};

export default () => {
  app(getComponents, task);
};
