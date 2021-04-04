const express = require("express");

const app = express();

app.get("/", (_, response) => {
  response.json({ message: "Full Cycle!!!" });
});

app.listen(3000, () => {
  console.log("Server Working!!!");
});
