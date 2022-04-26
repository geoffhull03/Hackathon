const axios = require("axios").default;
const ObjectsToCsv = require("objects-to-csv");
var fs = require("fs");
const moment = require("moment");
const path = require("path");
const algoliasearch = require("algoliasearch");
const accountCopyIndex = require("@algolia/client-account").accountCopyIndex;

function copy(options) {
  // if options then set scope

  const index1 = algoliasearch("APP_ID_1", "API_KEY_1").initIndex(
    "index_name_1"
  );
  const index2 = algoliasearch("APP_ID_2", "API_KEY_2").initIndex(
    "index_name_2"
  );

  // this will probably send all content types (synonyms, rules, etc. which we may need to delete with a second call)
  accountCopyIndex(index1, index2).then(() => {
    // done
  });
}

module.exports = copy;
