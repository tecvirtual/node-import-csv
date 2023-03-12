const fs = require("fs");
const { parse } = require("csv-parse");


fs.createReadStream("./PM_IG80034_5_202205100000_01.csv")
  .pipe(parse({ delimiter: ",", from_line: 3 }))
  .on("data", function (row) {
    console.log(row);
  })