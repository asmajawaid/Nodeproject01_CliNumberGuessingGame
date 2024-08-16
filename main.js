#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate random number
// 2) user input for guessing number
// 3)compair user input with computer generated number and show result
//HARD CODED NUMBER
//const randomnumber = 13;
const randomNumber = Math.floor(Math.random() * 6 + 1); //clor method
console.log("welocome to number guessing game:");
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number berween 1-6:",
    },
]);
if (answer.userGuessNumber === randomNumber) {
    console.log("Congratulation! you guessed the correct Numbeere. you won the Game.");
}
else {
    console.log("Sorry! you gussed the wrong number");
}
