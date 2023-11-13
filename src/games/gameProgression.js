import app from '../index.js';
import getRandomInt from '../getRandomInt.js';
import getProgression from '../getProgression.js';

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
