const getRandomInt = (max) => Math.floor(Math.random() * max);

const progression = () => {
  const firstMember = getRandomInt(10);
  const difference = getRandomInt(10);
  const progressionArray = [firstMember];
  let member = firstMember;

  for (let i = 0; i < 9; i += 1) {
    member += difference;
    progressionArray.push(member);
  }
  return progressionArray;
};

export default () => {
  const task = 'What number is missing in the progression?';

  const index = getRandomInt(10);
  const progressionArray = progression();
  const correctAnswer = String(progressionArray[index]);
  progressionArray[index] = '..';
  const question = progressionArray.join(' ');

  return [task, question, correctAnswer];
};
