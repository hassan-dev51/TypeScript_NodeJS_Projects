import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimations from "chalk-animation";

console.log(chalk.blue("Welcome to HBL ATM "));

const wait = () => {
  return new Promise((res) => {
    setTimeout(res, 2000);
  });
};
const user_login: number = 654321;
const user_pin: number = 1234;

const startTransaction = async () => {
  let title = chalkAnimations.rainbow("Nice to see you again!");
  await wait();
  title.stop();
  const date = new Date().toLocaleString();
  const AtmLogin = await inquirer.prompt([
    {
      type: "number",
      name: "login",
      message: "Enter Your Atm Login Number",
    },
    {
      type: "password",
      name: "pin",
      message: "Enter your PIN Number",
      mask: "*",
    },
  ]);

  if (AtmLogin.login == user_login && AtmLogin.pin == user_pin) {
    console.log(`Welcome to Atm management service\nLogin Time : ${date}`);
    AtmTransaction();
  } else {
    console.log("please input correct credentials");
    return;
  }
};

await startTransaction();
async function AtmTransaction() {
  const current_balcance = 12000;
  const askedOperation = await inquirer.prompt([
    {
      type: "rawlist",
      name: "operations",
      message: "choose operation which you want to perform",
      choices: [
        "Deposit",
        "Fund Transfer",
        "Balance",
        "Withdraw",
        "Pay bills",
        "Show Account Details",
        "Exit",
      ],
    },
  ]);

  switch (askedOperation.operations) {
    case "Deposit":
      const deposit_amount = await inquirer.prompt([
        {
          type: "number",
          name: "deposite",
          message: "Enter the amount to deposit",
        },
      ]);
      console.log(
        `You deposite ${
          deposit_amount.deposite
        } rupess\nYour current amount is ${
          deposit_amount.deposite + current_balcance
        }`
      );
      break;
    case "Fund Transfer":
      const Transfer_amount = await inquirer.prompt([
        {
          type: "number",
          name: "receiver",
          message: "Enter the number of receiver",
        },
        {
          type: "number",
          name: "transfer",
          message: "Enter the amount to deposit",
        },
      ]);
      if (Transfer_amount.transfer > current_balcance) {
        console.log("You dont have enough funds to transfer");
      } else {
        console.log(
          `You Transfer ${chalk.red(Transfer_amount.transfer)} rupess to the ${
            Transfer_amount.receiver
          }\nYour current amount is ${chalk.green(
            current_balcance - Transfer_amount.transfer
          )}`
        );
      }
      break;
    case "Balance":
      console.log(
        `Your current balcance is ${chalk.bgCyan(
          chalk.green(current_balcance)
        )}`
      );
      break;
    case "Withdraw":
      const withdraw_amount = await inquirer.prompt([
        {
          type: "number",
          name: "withdraw",
          message: "Enter the amount to withdraw",
        },
      ]);
      console.log(
        `You withdraw ${chalk.red(
          withdraw_amount.withdraw
        )} rupess\nYour current amount is ${chalk.green(
          current_balcance - withdraw_amount.withdraw
        )}`
      );
      break;
    case "Pay bills":
      const pay_bills = await inquirer.prompt([
        {
          type: "list",
          name: "pay",
          message: "Select the bill company",
          choices: ["Gas", "Electric", "Phone"],
        },
        {
          type: "input",
          name: "reference",
          message: "Enter the reference number",
        },
        {
          type: "number",
          name: "dues",
          message: "Enter the dues",
        },
      ]);

      if (pay_bills.dues < current_balcance) {
        console.log("Bill has successfully paid");
      } else {
        console.log("You don't have enough funds to pay the bill");
      }
      break;
    case "Show Account Details":
      console.log(
        `Your account details\nYour Login Number is ${chalk.bgBlue(
          chalk.cyan(user_login)
        )}\nYour Login Password is ${chalk.red(
          user_pin
        )}\nYour current balnce is ${chalk.blue(current_balcance)}`
      );
      break;
    case "Exit":
      console.log("Thanks for using");
      return;

    default:
      break;
  }
}
