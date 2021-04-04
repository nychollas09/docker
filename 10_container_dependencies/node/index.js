const express = require("express");

const app = express();
const port = 3000;

app.get("/", (_, response) => {
  response.json({ message: "Hello" });
});

app.listen(port, () => {
  console.log(`Server working on ${port}`);
});
