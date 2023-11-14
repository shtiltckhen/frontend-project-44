import app from '../index.js';
import getRandomInt from '../getRandomInt.js';

const getProgression = (firstMember, difference) => {
  const progressionArray = [firstMember];
  let member = firstMember;

  for (let i = 0; i < 9; i += 1) {
    member += difference;
    progressionArray.push(member);
  }
  return progressionArray;
};

const task = 'What number is missing in the progression?';

const getComponents = () => {
  const firstMember = getRandomInt(0, 10);
  const difference = getRandomInt(1, 10);
  const index = getRandomInt(0, 10);
  const progressionArray = getProgression(firstMember, difference);

  const correctAnswer = String(progressionArray[index]);

  progressionArray[index] = '..';
  const question = progressionArray.join(' ');

  return [question, correctAnswer];
};

export default () => {
  app(getComponents, task);
};
