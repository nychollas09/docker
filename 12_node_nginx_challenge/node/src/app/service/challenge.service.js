const ChallengeRepository = require("../repository/challenge.repository");

const listPeople = async (_, response) => {
  peoples = await ChallengeRepository.listPeople();
  return response.send(`
    <h1>Full Cycle Rocks!</h1>
    ${peoples.reduce(
      (accumulator, currentValue) =>
        `${accumulator} - ${currentValue.name}<br>`,
      ""
    )}
  `);
};

module.exports = {
  listPeople,
};
