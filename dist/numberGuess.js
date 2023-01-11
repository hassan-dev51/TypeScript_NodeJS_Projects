import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.rgb(255, 102, 0)(`number gussing game`));
console.log(chalk.bold(`IN THIS GAME YOU HAVE 3 CHANCE TO FIND THE HIDDEN NUMBER .\n\n `));
const player_name = await inquirer.prompt([
    {
        name: "user",
        type: "input",
        message: "Hey Player! Enter your name:",
    },
]);
const startGame = async () => {
    let random = Math.floor(Math.random() * 10);
    console.log(random);
    let guess = true;
    for (let index = 4; guess; index--) {
        if (index === 0) {
            console.log(chalk.rgb(255, 46, 46)(`you loose`));
            guess = false;
            restartGame();
            return;
        }
        const askedQuestion = await inquirer.prompt([
            {
                type: "input",
                name: "number",
                message: "Enter a number...",
                validate: (input) => {
                    const valid = !isNaN(parseFloat(input));
                    return valid || "Please enter a valid number.";
                },
            },
        ]);
        if (askedQuestion.number == random) {
            console.log("great you guess the write number");
            guess = false;
            restartGame();
        }
        else if (askedQuestion.number != random) {
            console.log(`enter again! you have ${index - 1} round left`);
        }
    }
};
async function restartGame() {
    let ask_user = await inquirer.prompt([
        {
            name: "restart",
            type: "input",
            message: chalk.italic.white(`Do you want to play Again ? 'Y' for YES and 'N' for NO`),
        },
    ]);
    if (ask_user.restart.toLowerCase() == "y" ||
        ask_user.restart.toLowerCase() == "yes") {
        startGame();
    }
    else {
        console.log(chalk.cyanBright.bold(`Hope you enjoyed the game! ${player_name.user}`));
    }
}
startGame();
//# sourceMappingURL=numberGuess.js.map