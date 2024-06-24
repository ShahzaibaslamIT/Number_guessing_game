#! /usr/bin/env node

import inquirer from "inquirer";

console.log("\n\tWelcome to my number guessing game\n");

const randomNumber = Math.floor(Math.random()*5+1);
const user_input=await inquirer.prompt([
    {
        name:"guessedNumber",
        type:"number",
        message:"Enter your number(Limit from 1-5):",

    }
]);
if(user_input.guessedNumber===randomNumber){
    console.log("Correct Number! You won!");
}
else{
    console.log("Wrong Number!You lost!");
}