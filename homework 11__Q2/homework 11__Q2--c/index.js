const { readFile, writeFile } = require('fs');

readFile('./files/from.txt', 'utf-8', function (fromErr, fromData) {
  if (fromErr) {
    return console.log(fromErr);
  }
  readFile('./files/append.txt', 'utf-8', function (appendErr, appendData) {
    if (appendErr) {
      return console.log(appendErr);
    }
    const data = fromData + '\n' + appendData;
    writeFile('./files/to.txt', data, function (err) {
      if (err) {
        return console.log(err);
      }
    });
  });
});
