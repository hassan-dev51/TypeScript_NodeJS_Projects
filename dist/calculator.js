import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimations from "chalk-animation";
//this line of code is just use as a break for 2 seconds
const wait = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
const start = async () => {
    let title = chalkAnimations.rainbow("Let start using a cli based calculator");
    await wait();
    title.stop();
    console.log(` _____________________
  |     Hassan Ali    . |
  |  _________________  |
  | | Calculator   0. | |
  | |_________________| |
  |  ___ ___ ___   ___  |
  | | 7 | 8 | 9 | | + | |
  | |___|___|___| |___| |
  | | 4 | 5 | 6 | | - | |
  | |___|___|___| |___| |
  | | 1 | 2 | 3 | | x | |
  | |___|___|___| |___| |
  | | . | 0 | = | | / | |
  | |___|___|___| |___| |
  |_____________________|`);
};
await start();
//this function will receive the input
const askQuestion = async () => {
    const question = await inquirer.prompt([
        {
            type: "list",
            name: "operator",
            message: "Choose the operator",
            choices: ["+", "-", "*", "/", "^"],
        },
        {
            type: "number",
            name: "number1",
            message: "Enter a number",
        },
        {
            type: "number",
            name: "number2",
            message: "Enter second number",
        },
    ]);
    if (question.operator === "+") {
        console.log(chalk.yellow(`${question.number1} + ${question.number2} = ${question.number1 + question.number2}`));
    }
    else if (question.operator === "-") {
        console.log(chalk.yellow(`${question.number1} - ${question.number2} = ${question.number1 - question.number2}`));
    }
    else if (question.operator === "*") {
        console.log(chalk.yellow(`${question.number1} * ${question.number2} = ${question.number1 * question.number2}`));
    }
    else if (question.operator === "/") {
        console.log(chalk.yellow(`${question.number1} / ${question.number2} = ${(question.number1 / question.number2).toFixed(2)}`));
    }
    else if (question.operator === "^") {
        console.log(chalk.yellow(`${question.number1} ^ ${question.number2} = ${question.number1 ** question.number2}`));
    }
};
//this function will asked for continuation of calculation
const askQuestionAgain = async () => {
    do {
        await askQuestion();
        var again = await inquirer.prompt([
            {
                type: "input",
                name: "restart",
                message: "Do you want to restart",
            },
        ]);
    } while (again.restart === "y" ||
        again.restart === "Y" ||
        again.restart === "Yes" ||
        again.restart === "yes");
    console.log(chalk.yellow("Thanks for using Our Services"));
};
askQuestionAgain();
//# sourceMappingURL=calculator.js.map