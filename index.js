// we count each roll of x eyes and insert in an object
const diceRolls = {
  One: 0,
  Two: 0,
  Three: 0,
  Four: 0,
  Five: 0,
  Six: 0,
};

// create a function that after roll adds the result to the diceRolls object

// create a function that rolls a dice and returns a number
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

console.log(rollDice());
console.log("hello world!");
console.log(diceRolls);
