const express = require("express");
const ChallengeController = require("./controller/challenge.controller");

const app = express();
const port = 3000;

app.use(ChallengeController);

app.listen(port, () => {
  console.log(`Server Working on ${port}`);
});
