function getFullName(firstName, lastName, callback) {
  callback(firstName, lastName);
}

getFullName('pouria', 'bagherian', (fName, lName) => {
  console.log(`${fName} ${lName}`);
});
