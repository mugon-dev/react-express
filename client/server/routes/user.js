const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.json([
    { id: 1, username: "VictorOladipo" },
    { id: 2, username: "RussellWstbrook" },
  ]);
});

module.exports = router;
