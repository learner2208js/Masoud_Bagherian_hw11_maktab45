const file = require('fs');
const data =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam';

file.mkdir('./files', { recursive: true }, function (err) {
  if (err) {
    console.log('folder creation failed');
  }
  file.writeFile('./files/text.txt', data, function (err) {
    if (err) {
      console.log('file does not exist');
    }
    console.log('file exists');
  });
});
