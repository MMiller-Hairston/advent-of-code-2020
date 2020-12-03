const passwords = require('./passwords');

// Part 1
function isPasswordValid(amount, letter, password) {
  const [min, max] = amount.split('-');
  let count = 0;
  let index = -1;
  while ((index = password.indexOf(letter, index + 1)) !== -1) {
    count++;
  }
  return count <= max && count >= min;
}

function validPasswordCount(passwords, condition) {
  let count = 0;
  for (let [amount, letter, password] of passwords) {
    if (condition(amount, letter, password)) {
      count++;
    }
  }
  return count;
}

const passwordCount = validPasswordCount(passwords, isPasswordValid);
console.log(passwordCount);

// Part 2
function isPasswordValidTwo(positions, letter, password) {
  let count = 0;
  const [first, second] = positions.split('-');
  const result = [
    password[first - 1] === letter,
    password[second - 1] === letter,
  ];
  if ((result[0] === true || (result[1] && first)) && result[0] !== result[1]) {
    count++;
  }
  return count;
}

const passwordTwoCount = validPasswordCount(passwords, isPasswordValidTwo);
console.log(passwordTwoCount);
