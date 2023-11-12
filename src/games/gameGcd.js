const getRandomInt = () => Math.floor((Math.random() * 99) + 1);

export default () => {
  let num1 = getRandomInt(100);
  let num2 = getRandomInt(100);

  console.log(`Question: ${num1} ${num2}`);

  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  }
  const correctAnswer = String(num1);
  return correctAnswer;
};
