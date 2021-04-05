const { Router } = require("express");
const { listPeople } = require("../service/challenge.service");

const router = Router();

router.get("/", listPeople);

module.exports = router;
