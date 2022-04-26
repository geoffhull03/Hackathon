var express = require("express");
var router = express.Router();
var exportRecords = require("../lib/export");

router.post("/", function (req, res, next) {
  res.send("HELLO");
  // exportRecords().then(() => {
  //   console.log("DONE");
  //   // res.sendFile(file[0]);
  // });
  // );
  // });
  // res.send('fsdf')
  // .then((file) => {
  // res.send(file);
});

module.exports = router;
