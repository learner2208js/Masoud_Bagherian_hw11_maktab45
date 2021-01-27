const fs = require('fs');
let names;
let numbers;
fs.readFile('./files/names.txt', 'utf-8', function (namesErr, namesData) {
  if (namesErr) {
    return console.log('get names failed!');
  }
  fs.readFile(
    './files/numbers.txt',
    'utf-8',
    function (numbersErr, numbersData) {
      if (numbersErr) {
        return console.log('get numbers failed!');
      }
      names = namesData.trim().split('\n');
      names = formatData(names, 'id', 'name');
      numbers = numbersData.trim().split('\n');
      numbers = formatData(numbers, 'id', 'phoneNumber');
      console.log(names);
      console.log(numbers);
      mkMessages();
      showMessages();
    }
  );
});
function formatData(data, id, key) {
  return data.map((item) => {
    parts = item.split('-');
    return {
      [id]: +parts[0].trim(),
      [key]: parts[1].trim(),
    };
  });
}
function mkMessages() {
  names.forEach((item) => {
    const id = item.id;
    const phoneNumbers = [];
    for (const item of numbers) {
      if (item.id === id) {
        phoneNumbers.push(item.phoneNumber);
      }
    }
    createMessage(item, phoneNumbers);
  });
}
function createMessage(user, phoneNumbers) {
  if (phoneNumbers.length === 0) {
    const message = `${user.name} hasn't any phone number`;
    user.message = message;
  } else if (phoneNumbers.length === 1) {
    const message = `${user.name}'s phone number is ${phoneNumbers[0]}`;
    user.message = message;
  } else {
    let message = `${user.name}'s phone numbers are `;
    phoneNumbers.forEach((number, index, arr) => {
      if (index !== arr.length - 1) {
        message += `${number},`;
      } else {
        message += `${number}`;
      }
    });
    user.message = message;
  }
}
function showMessages() {
  names.forEach((item) => {
    console.log(item.message);
  });
}
