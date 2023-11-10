import readlineSync from 'readline-sync';

export default () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const getRandomInt = () => Math.floor(Math.random() * 100);

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt();
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`);
    }
  }

  return console.log(`Congratulations, ${name}!`);
};
