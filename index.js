const prompt = require("prompt-sync")();
const { supportCalculator } = require("./supportCalculator");

// Setting up variables
let incomeList = [];
let promptPhrases = [
  "Hvor mye tjente du forrige kalenderår? ",
  "Hvor mye tjente du året før forrige kalenderår? ",
  "Hvor mye tjente du to år før forrige kalenderår? ",
];

// Introducing the program
console.log("Velkommen til NAVs dagpengekalkulator!");
console.log("Svar på spørsmålene og se hvor mye du har rett på i dagpenger!");

// Getting user input
while (incomeList.length < 3) {
  let income = parseInt(prompt(promptPhrases[incomeList.length]));
  // Checking if income is NaN
  while (income !== income || income < 0) {
    console.log("Du må skrive inn et positivt tall!");
    income = parseInt(prompt(promptPhrases[incomeList.length]));
  }
  incomeList.push(income);
}

// Calculating daily support money
const dailySupportMoney = supportCalculator(
  incomeList[2],
  incomeList[1],
  incomeList[0]
);

if (dailySupportMoney === 0) {
  console.log("Beklager, men du har ikke rett på dagpenger");
} else {
  console.log("Du har rett på " + dailySupportMoney + "kr i dagpenger!");
}
