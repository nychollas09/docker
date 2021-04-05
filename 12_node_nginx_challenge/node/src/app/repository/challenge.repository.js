const People = require("../domain/models/people");

const listPeople = () => {
  return People.findAll();
};

module.exports = {
  listPeople,
};
