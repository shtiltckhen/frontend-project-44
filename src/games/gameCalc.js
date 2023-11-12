import readlineSync from 'readline-sync';

const getRandomInt = (max) => Math.floor(Math.random() * max);

export default () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
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
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
