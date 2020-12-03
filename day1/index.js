const { entries } = require('./expenseReport');
const expenseReport = require('./expenseReport');

// Part 1
function findMatchIndex(entries, match) {
  return entries.indexOf(match);
}

function arrayProduct(arr) {
  return arr.reduce((a, b) => a * b, 1);
}

function findTwoEntrySum(entries, goal) {
  for (let entry of entries) {
    const match = findMatchIndex(entries, goal - entry);
    if (match > 0) {
      return [entry, entries[match]];
    }
  }
}

const twoEntryResult = findTwoEntrySum(expenseReport, 2020);
const partOne = arrayProduct(twoEntryResult);
console.log(partOne);

// Part 2
function findThreeEntrySum(entries, goal) {
  for (let [i, entry] of entries.entries()) {
    const goalDifference = goal - entry;
    const match = findTwoEntrySum(entries.slice(i), goalDifference);
    if (match) {
      return [...match, entry];
    }
  }
}

const threeEntryResult = findThreeEntrySum(expenseReport, 2020);
const partTwo = arrayProduct(threeEntryResult);
console.log(partTwo);
