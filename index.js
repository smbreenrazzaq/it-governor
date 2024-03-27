#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "enter second number", type: "number", name: "secondnumber" },
    {
        message: "select one of the operators to perform action",
        type: "list",
        name: "opertor",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.opertor === "Addition") {
    console.log(answer.firstNumber + answer.secondnumb);
}
if (answer.opertor === "Addition") {
    console.log(answer.firstNumber + answer.secondnumber);
}
else if (answer.opertor === "Subtraction") {
    console.log(answer.firstNumber - answer.secondnumber);
}
else if (answer.opertor === "Multiplication") {
    console.log(answer.firstNumber * answer.secondnumber);
}
else if (answer.opertor === "Division") {
    console.log(answer.firstNumber / answer.secondnumber);
}
