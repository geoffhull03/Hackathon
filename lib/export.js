const axios = require("axios").default;
var fs = require("fs");
const moment = require("moment");
const path = require("path");
const algoliasearch = require("algoliasearch");
var fs = require("fs");

function getRecords(options) {
  // use form options to initiate
  console.log("EXPORTING");
  const client = algoliasearch(
    "EV87681CR2",
    "391fc45b27e464ce4189b4f6c9d4b1ef"
  );
  const index = client.initIndex("cheese_test");
  let hits = [];

  index
    .browseObjects({
      query: "", // Empty query will match all records
      batch: (batch) => {
        hits = hits.concat(batch);
      }
    })
    .then(() => console.log(hits));

  // var file = fs.createWriteStream("array.txt");
  // file.on("error", function (err) {
  //   /* error handling */
  // });
  // arr.forEach(function (v) {
  //   file.write(hits.join(", ") + "\n");
  // });
  // file.end();
}

module.exports = getRecords;
