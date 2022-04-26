var express = require("express");
var router = express.Router();
var copy = require("../lib/copy");

router.post("/copy", function (req, res, next) {
  copy(req.body).then((file) => {
    res.sendFile(file[0]);
  });
  // res.send('fsdf')
  // .then((file) => {
  // res.send(file);
});

module.exports = router;
