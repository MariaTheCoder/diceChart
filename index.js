const throwDiceButton = document.getElementById("roll-dice-button");
const resetDiceButton = document.getElementById("reset-rolls");
let myChart;

const diceData = [];

throwDiceButton.addEventListener("click", evaluateRoll);
resetDiceButton.addEventListener("click", resetDiceRolls);

renderChart();

// create a function that resets occurance of rolled dice
function resetDiceRolls() {
  // TODO: fix this
  diceData.forEach((e, i) => (diceData[i] = 0));
}

// create a function that after roll adds the result to the diceRolls object
function renderChart() {
  // array containing labels
  const labels = [
    // "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Dice rolls",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: diceData,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  myChart = new Chart(document.getElementById("myChart"), config);
}

function evaluateRoll() {
  const sum = rollDice(3);

  if (!diceData[sum - 3]) {
    diceData[sum - 3] = 0;
  }
  diceData[sum - 2] += 1;
  myChart.update();
}

// create a function that rolls a dice and returns a number
function rollDice(numberOfDice) {
  let sum = 0;
  for (let i = 0; i < numberOfDice; i++) {
    sum += Math.floor(Math.random() * 6) + 1;
  }
  return sum;
}
