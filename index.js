// we count each roll of x eyes and insert in an object
const diceRolls = {
  one: 0,
  two: 0,
  three: 0,
  four: 0,
  five: 0,
  six: 0,
};

// create a function that after roll adds the result to the diceRolls object
function evaluateRoll() {
  const roll = rollDice();

  if (roll === 1) {
    diceRolls.one = diceRolls.one + 1;
  } else if (roll === 2) {
    diceRolls.two = diceRolls.two + 1;
  } else if (roll === 3) {
    diceRolls.three = diceRolls.three + 1;
  } else if (roll === 4) {
    diceRolls.four = diceRolls.four + 1;
  } else if (roll === 5) {
    diceRolls.five = diceRolls.five + 1;
  } else {
    diceRolls.six = diceRolls.six + 1;
  }

  console.log(diceRolls);
}

// create a function that rolls a dice and returns a number
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

evaluateRoll();
