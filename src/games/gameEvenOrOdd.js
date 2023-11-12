const getRandomInt = () => Math.floor(Math.random() * 100);

export default () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  const number = getRandomInt();
  const question = number;
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

  return [task, question, correctAnswer];
};
