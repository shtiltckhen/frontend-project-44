const getRandomInt = () => Math.floor(Math.random() * 100);

export default () => {
  const number = getRandomInt();
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

  console.log(`Question: ${number}`);

  return correctAnswer;
};
