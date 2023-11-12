const getRandomInt = (max) => Math.floor(Math.random() * max);

export default () => {
  const num1 = getRandomInt(100);
  const num2 = getRandomInt(10);
  const signs = ['+', '-', '*'];
  const signIndex = getRandomInt(3);
  let question;
  let correctAnswer;

  switch (signs[signIndex]) {
    case '+':
      question = `${num1} + ${num2}`;
      correctAnswer = String(num1 + num2);
      break;
    case '-':
      question = `${num1} - ${num2}`;
      correctAnswer = String(num1 - num2);
      break;
    case '*':
      question = `${num1} * ${num2}`;
      correctAnswer = String(num1 * num2);
      break;
    default:
      break;
  }

  console.log(`Question: ${question}`);

  return correctAnswer;
};
