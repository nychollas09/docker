module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert("people", [
      {
        name: "Nichollas Falcão",
      },
      {
        name: "João Pedro",
      },
      {
        name: "Victor Magalhães",
      },
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete("people", null, {});
  },
};
