const getRandomInt = () => Math.floor((Math.random() * 99) + 1);

export default () => {
  const task = 'Find the greatest common divisor of given numbers.';
  let num1 = getRandomInt();
  let num2 = getRandomInt();

  const question = `${num1} ${num2}`;

  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  }
  const correctAnswer = String(num1);
  return [task, question, correctAnswer];
};
