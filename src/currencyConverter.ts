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
  figlet.text("Currency   \nConvertor   \nApplication", (error, res) => {
    if (error) {
      console.log(chalk.red("Error"));
    } else {
      console.log(gradient.instagram(res));
    }
  });

  await wait();
};

//this function will get the currency which we have to convert.
const askedConverision = async () => {
  await welcome();
  let asked = await inquirer.prompt({
    name: "currency",
    type: "list",
    message: "Please Select a Currency Which You want to Convert",
    choices: ["PKR", "USD", "EUR", "POUND", "AED", "SAR"],
  });
  switch (asked.currency) {
    case "PKR":
      const pkr = await inquirer.prompt({
        name: "currency",
        type: "list",
        message: "In which currency you want to convert",
        choices: ["PKR", "USD", "EUR", "POUND", "AED", "SAR"],
      });
      if (pkr.currency === "PKR") {
        console.log(
          chalk.yellow(
            "Please enter a another currency because same currencies can't be converted"
          )
        );
      } else if (pkr.currency === "USD") {
        const usd = await inquirer.prompt({
          name: "usd",
          type: "number",
          message: "Enter amount to Convert",
        });
        console.log(
          chalk.cyan(
            `Pakistani ${chalk.green("Rs")} ${chalk.green(
              usd.usd
            )} is equal to ${chalk.yellow("$")} ${chalk.yellow(
              Number(usd.usd / 260).toFixed(2)
            )} American dollars\n\n`
          )
        );
        console.log("========================================================");
        console.log(
          chalk.red("These rates are calculated on hard-coded numbers")
        );
        console.log("========================================================");
      } else if (pkr.currency === "EUR") {
        const eur = await inquirer.prompt({
          name: "eur",
          type: "number",
          message: "Enter amount to Convert",
        });
        console.log(
          chalk.cyan(
            `Pakistani ${chalk.green("Rs")} ${chalk.green(
              eur.eur
            )} is equal to ${chalk.yellow("€")} ${chalk.yellow(
              Number(eur.eur / 272).toFixed(2)
            )} Euros`
          )
        );
        console.log("========================================================");
        console.log(
          chalk.red("These rates are calculated on hard-coded numbers")
        );
        console.log("========================================================");
      } else if (pkr.currency === "POUND") {
        const pound = await inquirer.prompt({
          name: "pound",
          type: "number",
          message: "Enter amount to Convert",
        });
        console.log(
          chalk.cyan(
            `Pakistani ${chalk.green("Rs")} ${chalk.green(
              pound.pound
            )} is equal to ${chalk.yellow("£")} ${chalk.yellow(
              Number(pound.pound / 310).toFixed(2)
            )} British Pounds`
          )
        );
        console.log("========================================================");
        console.log(
          chalk.red("These rates are calculated on hard-coded numbers")
        );
        console.log("========================================================");
      } else if (pkr.currency === "AED") {
        const aed = await inquirer.prompt({
          name: "aed",
          type: "number",
          message: "Enter amount to Convert",
        });
        console.log(
          chalk.cyan(
            `Pakistani ${chalk.green("Rs")} ${chalk.green(
              aed.aed
            )} is equal to ${chalk.yellow("DH")} ${chalk.yellow(
              Number(aed.aed / 68).toFixed(2)
            )} Dirhams`
          )
        );
        console.log("========================================================");
        console.log(
          chalk.red("These rates are calculated on hard-coded numbers")
        );
        console.log("========================================================");
      } else if (pkr.currency === "SAR") {
        const usd = await inquirer.prompt({
          name: "usd",
          type: "number",
          message: "Enter amount to Convert",
        });
        console.log(
          chalk.cyan(
            `Pakistani ${chalk.green("Rs")} ${chalk.green(
              usd.usd
            )} is equal to ${chalk.yellow("SR")} ${chalk.yellow(
              Number(usd.usd / 66).toFixed(2)
            )}Saudi Riyal`
          )
        );
        console.log("========================================================");
        console.log(
          chalk.red("These rates are calculated on hard-coded numbers")
        );
        console.log("========================================================");
      }
      break;
    case "USD":
      const usd = await inquirer.prompt({
        name: "currency",
        type: "list",
        message: "In which currency you want to convert",
        choices: ["PKR", "USD", "EUR", "POUND", "AED", "SAR"],
      });
      if (usd.currency === "USD") {
        console.log(
          chalk.yellow(
            "Please enter a another currency because same currencies can't be converted"
          )
        );
      } else if (usd.currency === "PKR") {
        const usd = await inquirer.prompt({
          name: "usd",
          type: "number",
          message: "Enter amount to Convert",
        });
        console.log(
          chalk.cyan(
            `American dollars ${chalk.green("$")} ${chalk.green(
              usd.usd
            )} is equal to ${chalk.yellow("RS")} ${chalk.yellow(
              Number(usd.usd * 260).toFixed(2)
            )} Pakistani Rupees\n\n`
          )
        );
        console.log("========================================================");
        console.log(
          chalk.red("These rates are calculated on hard-coded numbers")
        );
        console.log("========================================================");
      } else if (usd.currency === "EUR") {
        const eur = await inquirer.prompt({
          name: "eur",
          type: "number",
          message: "Enter amount to Convert",
        });
        console.log(
          chalk.cyan(
            `American dollars ${chalk.green("$")} ${chalk.green(
              eur.eur
            )} is equal to ${chalk.yellow("€")} ${chalk.yellow(
              Number(eur.eur * 0.92).toFixed(2)
            )} Euros`
          )
        );
        console.log("========================================================");
        console.log(
          chalk.red("These rates are calculated on hard-coded numbers")
        );
        console.log("========================================================");
      } else if (usd.currency === "POUND") {
        const pound = await inquirer.prompt({
          name: "pound",
          type: "number",
          message: "Enter amount to Convert",
        });
        console.log(
          chalk.cyan(
            `American dollars ${chalk.green("$")} ${chalk.green(
              pound.pound
            )} is equal to ${chalk.yellow("£")} ${chalk.yellow(
              Number(pound.pound * 0.81).toFixed(2)
            )} British Pounds`
          )
        );
        console.log("========================================================");
        console.log(
          chalk.red("These rates are calculated on hard-coded numbers")
        );
        console.log("========================================================");
      } else if (usd.currency === "AED") {
        const aed = await inquirer.prompt({
          name: "aed",
          type: "number",
          message: "Enter amount to Convert",
        });
        console.log(
          chalk.cyan(
            `American Dollar ${chalk.green("$")} ${chalk.green(
              aed.aed
            )} is equal to ${chalk.yellow("DH")} ${chalk.yellow(
              Number(aed.aed * 3.67).toFixed(2)
            )} Dirhams`
          )
        );
        console.log("========================================================");
        console.log(
          chalk.red("These rates are calculated on hard-coded numbers")
        );
        console.log("========================================================");
      } else if (usd.currency === "SAR") {
        const usd = await inquirer.prompt({
          name: "usd",
          type: "number",
          message: "Enter amount to Convert",
        });
        console.log(
          chalk.cyan(
            `American dollar ${chalk.green("$")} ${chalk.green(
              usd.usd
            )} is equal to ${chalk.yellow("SR")} ${chalk.yellow(
              Number(usd.usd * 3.75).toFixed(2)
            )}Saudi Riyal`
          )
        );
        console.log("========================================================");
        console.log(
          chalk.red("These rates are calculated on hard-coded numbers")
        );
        console.log("========================================================");
      }
      break;
    case "EUR":
      const euro = await inquirer.prompt({
        name: "currency",
        type: "list",
        message: "In which currency you want to convert",
        choices: ["PKR", "USD", "EUR", "POUND", "AED", "SAR"],
      });
      if (euro.currency === "EUR") {
        console.log(
          chalk.yellow(
            "Please enter a another currency because same currencies can't be converted"
          )
        );
      } else if (euro.currency === "PKR") {
        const euro = await inquirer.prompt({
          name: "euro",
          type: "number",
          message: "Enter amount to Convert",
        });
        console.log(
          chalk.cyan(
            `Euro ${chalk.green("€")} ${chalk.green(
              euro.euro
            )} is equal to ${chalk.yellow("RS")} ${chalk.yellow(
              Number(euro.euro * 272).toFixed(2)
            )} Pakistani Rupees\n\n`
          )
        );
        console.log("========================================================");
        console.log(
          chalk.red("These rates are calculated on hard-coded numbers")
        );
        console.log("========================================================");
      } else if (euro.currency === "USD") {
        const eur = await inquirer.prompt({
          name: "eur",
          type: "number",
          message: "Enter amount to Convert",
        });
        console.log(
          chalk.cyan(
            `Euro ${chalk.green("€")} ${chalk.green(
              eur.eur
            )} is equal to ${chalk.yellow("$")} ${chalk.yellow(
              Number(eur.eur * 1.09).toFixed(2)
            )} American Dollar`
          )
        );
        console.log("========================================================");
        console.log(
          chalk.red("These rates are calculated on hard-coded numbers")
        );
        console.log("========================================================");
      } else if (euro.currency === "POUND") {
        const pound = await inquirer.prompt({
          name: "pound",
          type: "number",
          message: "Enter amount to Convert",
        });
        console.log(
          chalk.cyan(
            `Euro ${chalk.green("€")} ${chalk.green(
              pound.pound
            )} is equal to ${chalk.yellow("£")} ${chalk.yellow(
              Number(pound.pound * 0.88).toFixed(2)
            )} British Pounds`
          )
        );
        console.log("========================================================");
        console.log(
          chalk.red("These rates are calculated on hard-coded numbers")
        );
        console.log("========================================================");
      } else if (euro.currency === "AED") {
        const aed = await inquirer.prompt({
          name: "aed",
          type: "number",
          message: "Enter amount to Convert",
        });
        console.log(
          chalk.cyan(
            `Euro ${chalk.green("€")} ${chalk.green(
              aed.aed
            )} is equal to ${chalk.yellow("DH")} ${chalk.yellow(
              Number(aed.aed * 3.99).toFixed(2)
            )} Dirhams`
          )
        );
        console.log("========================================================");
        console.log(
          chalk.red("These rates are calculated on hard-coded numbers")
        );
        console.log("========================================================");
      } else if (euro.currency === "SAR") {
        const euro = await inquirer.prompt({
          name: "euro",
          type: "number",
          message: "Enter amount to Convert",
        });
        console.log(
          chalk.cyan(
            `Euro ${chalk.green("€")} ${chalk.green(
              euro.euro
            )} is equal to ${chalk.yellow("SR")} ${chalk.yellow(
              Number(euro.euro * 4.08).toFixed(2)
            )} Saudi Riyal`
          )
        );
        console.log("========================================================");
        console.log(
          chalk.red("These rates are calculated on hard-coded numbers")
        );
        console.log("========================================================");
      }
      break;
    case "POUND":
      const pound = await inquirer.prompt({
        name: "currency",
        type: "list",
        message: "In which currency you want to convert",
        choices: ["PKR", "USD", "EUR", "POUND", "AED", "SAR"],
      });
      if (pound.currency === "POUND") {
        console.log(
          chalk.yellow(
            "Please enter a another currency because same currencies can't be converted"
          )
        );
      } else if (pound.currency === "PKR") {
        const pound = await inquirer.prompt({
          name: "pound",
          type: "number",
          message: "Enter amount to Convert",
        });
        console.log(
          chalk.cyan(
            `Pound ${chalk.green("£")} ${chalk.green(
              pound.pound
            )} is equal to ${chalk.yellow("RS")} ${chalk.yellow(
              Number(pound.pound * 310).toFixed(2)
            )} Pakistani Rupees\n\n`
          )
        );
        console.log("========================================================");
        console.log(
          chalk.red("These rates are calculated on hard-coded numbers")
        );
        console.log("========================================================");
      } else if (pound.currency === "USD") {
        const eur = await inquirer.prompt({
          name: "eur",
          type: "number",
          message: "Enter amount to Convert",
        });
        console.log(
          chalk.cyan(
            `Pound ${chalk.green("£")} ${chalk.green(
              eur.eur
            )} is equal to ${chalk.yellow("$")} ${chalk.yellow(
              Number(eur.eur * 1.24).toFixed(2)
            )} American Dollar`
          )
        );
        console.log("========================================================");
        console.log(
          chalk.red("These rates are calculated on hard-coded numbers")
        );
        console.log("========================================================");
      } else if (pound.currency === "EUR") {
        const pound = await inquirer.prompt({
          name: "pound",
          type: "number",
          message: "Enter amount to Convert",
        });
        console.log(
          chalk.cyan(
            `Pound ${chalk.green("£")} ${chalk.green(
              pound.pound
            )} is equal to ${chalk.yellow("€")} ${chalk.yellow(
              Number(pound.pound * 1.14).toFixed(2)
            )} Euros`
          )
        );
        console.log("========================================================");
        console.log(
          chalk.red("These rates are calculated on hard-coded numbers")
        );
        console.log("========================================================");
      } else if (pound.currency === "AED") {
        const aed = await inquirer.prompt({
          name: "aed",
          type: "number",
          message: "Enter amount to Convert",
        });
        console.log(
          chalk.cyan(
            `Pound ${chalk.green("£")} ${chalk.green(
              aed.aed
            )} is equal to ${chalk.yellow("DH")} ${chalk.yellow(
              Number(aed.aed * 4.55).toFixed(2)
            )} Dirhams`
          )
        );
        console.log("========================================================");
        console.log(
          chalk.red("These rates are calculated on hard-coded numbers")
        );
        console.log("========================================================");
      } else if (pound.currency === "SAR") {
        const pound = await inquirer.prompt({
          name: "pound",
          type: "number",
          message: "Enter amount to Convert",
        });
        console.log(
          chalk.cyan(
            `Pound ${chalk.green("£")} ${chalk.green(
              pound.pound
            )} is equal to ${chalk.yellow("SR")} ${chalk.yellow(
              Number(pound.pound * 4.65).toFixed(2)
            )} Saudi Riyal`
          )
        );
        console.log("========================================================");
        console.log(
          chalk.red("These rates are calculated on hard-coded numbers")
        );
        console.log("========================================================");
      }
      break;
    case "AED":
      const aed = await inquirer.prompt({
        name: "currency",
        type: "list",
        message: "In which currency you want to convert",
        choices: ["PKR", "USD", "EUR", "POUND", "AED", "SAR"],
      });
      if (aed.currency === "AED") {
        console.log(
          chalk.yellow(
            "Please enter a another currency because same currencies can't be converted"
          )
        );
      } else if (aed.currency === "PKR") {
        const aed = await inquirer.prompt({
          name: "aed",
          type: "number",
          message: "Enter amount to Convert",
        });
        console.log(
          chalk.cyan(
            `United Arab Emirates Dirham ${chalk.green("AED")} ${chalk.green(
              aed.aed
            )} is equal to ${chalk.yellow("RS")} ${chalk.yellow(
              Number(aed.aed * 69).toFixed(2)
            )} Pakistani Rupees\n\n`
          )
        );
        console.log("========================================================");
        console.log(
          chalk.red("These rates are calculated on hard-coded numbers")
        );
        console.log("========================================================");
      } else if (aed.currency === "USD") {
        const eur = await inquirer.prompt({
          name: "eur",
          type: "number",
          message: "Enter amount to Convert",
        });
        console.log(
          chalk.cyan(
            `United Arab Emirates Dirham ${chalk.green("AED")} ${chalk.green(
              eur.eur
            )} is equal to ${chalk.yellow("$")} ${chalk.yellow(
              Number(eur.eur * 0.27).toFixed(2)
            )} American Dollar`
          )
        );
        console.log("========================================================");
        console.log(
          chalk.red("These rates are calculated on hard-coded numbers")
        );
        console.log("========================================================");
      } else if (aed.currency === "EUR") {
        const aed = await inquirer.prompt({
          name: "aed",
          type: "number",
          message: "Enter amount to Convert",
        });
        console.log(
          chalk.cyan(
            `United Arab Emirates Dirham ${chalk.green("AED")} ${chalk.green(
              aed.aed
            )} is equal to ${chalk.yellow("€")} ${chalk.yellow(
              Number(aed.aed * 0.25).toFixed(2)
            )} Euros`
          )
        );
        console.log("========================================================");
        console.log(
          chalk.red("These rates are calculated on hard-coded numbers")
        );
        console.log("========================================================");
      } else if (aed.currency === "POUND") {
        const aed = await inquirer.prompt({
          name: "aed",
          type: "number",
          message: "Enter amount to Convert",
        });
        console.log(
          chalk.cyan(
            `United Arab Emirates Dirham ${chalk.green("AED")} ${chalk.green(
              aed.aed
            )} is equal to ${chalk.yellow("DH")} ${chalk.yellow(
              Number(aed.aed * 0.22).toFixed(2)
            )} Dirhams`
          )
        );
        console.log("========================================================");
        console.log(
          chalk.red("These rates are calculated on hard-coded numbers")
        );
        console.log("========================================================");
      } else if (aed.currency === "SAR") {
        const aed = await inquirer.prompt({
          name: "aed",
          type: "number",
          message: "Enter amount to Convert",
        });
        console.log(
          chalk.cyan(
            `United Arab Emirates Dirham ${chalk.green("AED")} ${chalk.green(
              aed.aed
            )} is equal to ${chalk.yellow("SR")} ${chalk.yellow(
              Number(aed.aed * 1.02).toFixed(2)
            )} Saudi Riyal`
          )
        );
        console.log("========================================================");
        console.log(
          chalk.red("These rates are calculated on hard-coded numbers")
        );
        console.log("========================================================");
      }
      break;
    case "SAR":
      const saR = await inquirer.prompt({
        name: "currency",
        type: "list",
        message: "In which currency you want to convert",
        choices: ["PKR", "USD", "EUR", "POUND", "AED", "SAR"],
      });
      if (saR.currency === "SAR") {
        console.log(
          chalk.yellow(
            "Please enter a another currency because same currencies can't be converted"
          )
        );
      } else if (saR.currency === "PKR") {
        const saR = await inquirer.prompt({
          name: "saR",
          type: "number",
          message: "Enter amount to Convert",
        });
        console.log(
          chalk.cyan(
            `Saudi Riyal ${chalk.green("SR")} ${chalk.green(
              saR.saR
            )} is equal to ${chalk.yellow("RS")} ${chalk.yellow(
              Number(saR.saR * 66.67).toFixed(2)
            )} Pakistani Rupees\n\n`
          )
        );
        console.log("========================================================");
        console.log(
          chalk.red("These rates are calculated on hard-coded numbers")
        );
        console.log("========================================================");
      } else if (saR.currency === "USD") {
        const eur = await inquirer.prompt({
          name: "eur",
          type: "number",
          message: "Enter amount to Convert",
        });
        console.log(
          chalk.cyan(
            `Saudi Riyal ${chalk.green("SR")} ${chalk.green(
              eur.eur
            )} is equal to ${chalk.yellow("$")} ${chalk.yellow(
              Number(eur.eur * 0.27).toFixed(2)
            )} American Dollar`
          )
        );
        console.log("========================================================");
        console.log(
          chalk.red("These rates are calculated on hard-coded numbers")
        );
        console.log("========================================================");
      } else if (saR.currency === "EUR") {
        const saR = await inquirer.prompt({
          name: "saR",
          type: "number",
          message: "Enter amount to Convert",
        });
        console.log(
          chalk.cyan(
            `Saudi Riyal ${chalk.green("SR")} ${chalk.green(
              saR.saR
            )} is equal to ${chalk.yellow("€")} ${chalk.yellow(
              Number(saR.saR * 0.25).toFixed(2)
            )} Euros`
          )
        );
        console.log("========================================================");
        console.log(
          chalk.red("These rates are calculated on hard-coded numbers")
        );
        console.log("========================================================");
      } else if (saR.currency === "AED") {
        const aed = await inquirer.prompt({
          name: "aed",
          type: "number",
          message: "Enter amount to Convert",
        });
        console.log(
          chalk.cyan(
            `Saudi Riyal ${chalk.green("SR")} ${chalk.green(
              aed.aed
            )} is equal to ${chalk.yellow("DH")} ${chalk.yellow(
              Number(aed.aed * 0.98).toFixed(2)
            )} Dirhams`
          )
        );
        console.log("========================================================");
        console.log(
          chalk.red("These rates are calculated on hard-coded numbers")
        );
        console.log("========================================================");
      } else if (saR.currency === "POUND") {
        const saR = await inquirer.prompt({
          name: "saR",
          type: "number",
          message: "Enter amount to Convert",
        });
        console.log(
          chalk.cyan(
            `Saudi Riyal ${chalk.green("SR")} ${chalk.green(
              saR.saR
            )} is equal to ${chalk.yellow("£")} ${chalk.yellow(
              Number(saR.saR * 0.22).toFixed(2)
            )} Pounds`
          )
        );
        console.log("========================================================");
        console.log(
          chalk.red("These rates are calculated on hard-coded numbers")
        );
        console.log("========================================================");
      }
      break;
    default:
      break;
  }
};
askedConverision();
