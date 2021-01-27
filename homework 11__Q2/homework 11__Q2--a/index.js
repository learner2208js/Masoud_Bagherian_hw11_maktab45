const file = require('fs');
file.readFile('./files/from.txt', 'utf-8', function (readErr, data) {
  if (readErr) {
    return console.log(readErr);
  }
  file.writeFile('./files/to.txt', data, function (writeErr) {
    if (writeErr) {
      return console.log(writeErr);
    }
  });
});
