import inquirer from "inquirer";
import chalk from "chalk";
import gradient from "gradient-string";
import figlet from "figlet";

const wait = () => {
  return new Promise((res) => {
    setTimeout(res, 1000);
  });
};

const welcome = async () => {
  figlet.text("Currency \nConvertor \nApplication", (error, res) => {
    if (error) {
      console.log(chalk.red("Error"));
    } else {
      console.log(gradient.instagram(res));
    }
  });

  await wait();
};
welcome();
