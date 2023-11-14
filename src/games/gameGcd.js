import app from '../index.js';
import getRandomInt from '../getRandomInt.js';

const getGcd = (num1, num2) => {
  let a = num1;
  let b = num2;

  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};

const task = 'Find the greatest common divisor of given numbers.';

const getComponents = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 50);

  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));

  return [question, correctAnswer];
};

export default () => {
  app(getComponents, task);
};
