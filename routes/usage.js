var express = require("express");
var router = express.Router();
var exportRecords = require("../lib/export");

router.post("/", function (req, res, next) {
  exportRecords(req.body).then((file) => {
    res.sendFile(file[0]);
  });
  // res.send('fsdf')
  // .then((file) => {
  // res.send(file);
});

module.exports = router;
