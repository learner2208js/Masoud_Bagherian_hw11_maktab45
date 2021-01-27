const fs = require('fs');
data =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam';
fs.mkdirSync('./files', { recursive: true });
try {
  const text = fs.writeFileSync('./files/newFile.txt', data);
  console.log('file exists');
} catch (e) {
  console.log('file does not exist');
}
