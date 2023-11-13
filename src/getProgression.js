export default (firstMember, difference) => {
  const progressionArray = [firstMember];
  let member = firstMember;

  for (let i = 0; i < 9; i += 1) {
    member += difference;
    progressionArray.push(member);
  }
  return progressionArray;
};
