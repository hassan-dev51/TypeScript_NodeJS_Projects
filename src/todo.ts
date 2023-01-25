import inquirer from "inquirer";
import figlet from "figlet";
import gradient from "gradient-string";
import chalk from "chalk";
//types
interface TASKS {
  taskId: number;
  taskName: string;
  createDate: Date;
}

//we store all our list in this array
let tasks: TASKS[] = [];

//function for the we showing just the piece of text for one second
const wait = () => {
  return new Promise((res) => {
    setTimeout(res, 1000);
  });
};

//function  to display the welcome text
const welcome = async () => {
  figlet.text("Todo List", (err, data) => {
    if (err) {
      console.log("Something went wrong");
      console.dir(err);
    }
    console.log(gradient.instagram(data));
  });
  await wait();
};

//main function to add the todo in the array
const addTodo = async () => {
  let t = await inquirer.prompt({
    name: "description",
    type: "input",
    message: "Input tasks... description",
  });

  let task: TASKS = {
    taskId: Math.floor(Math.random() * 1000000),
    taskName: t.description,
    createDate: new Date(),
  };

  tasks.push(task);
  console.log(task);
};
//function to delete the todo

const deleteTask = async (taskId: number) => {
  let dt = tasks.findIndex((x) => x.taskId === taskId);

  if (dt != -1) {
    tasks.splice(dt, 1);
  }
};

//function to get the list of todo

const getTask = async () => {
  if (tasks.length >= 1) {
    console.log(gradient.passion("Todo List\n"));
    console.log(chalk.green(`TaskId\t Date\t\t Description`));
    tasks.forEach((currElem) => {
      console.log(
        chalk.bold(
          `${currElem.taskId} \t ${currElem.createDate.getDate()} / ${
            currElem.createDate.getMonth() + 1
          } / ${currElem.createDate.getFullYear()} \t ${currElem.taskName} `
        )
      );
    });
    console.log(" ");
  } else {
    console.log(chalk.yellow("No Task Exits"));
  }
};

//function to get the input from the user

const getInput = async () => {
  let answer = await inquirer.prompt([
    {
      name: "action",
      type: "list",
      choices: ["1 : List ", "2 : Add ", "3 : Delete ", "4 : Exit "],
      message: "Select An Option..",
    },
  ]);
  return answer.action;
};

const getTaskId = async () => {
  console.clear();
  await getTask();

  let taskId = await inquirer.prompt({
    name: "action",
    type: "number",
    message: "Enter you taskId",
  });
  return taskId.action;
};

let keepContinue = false;

const startProgramme = async () => {
  await welcome();
  while (!keepContinue) {
    let x = await getInput();
    if ((x as string).includes("Exit")) {
      keepContinue = true;
      console.log(chalk.yellow("Thanks for your coming"));
    } else if ((x as string).includes("Add")) {
      await addTodo();
      console.log(chalk.yellow("Todo added"));
    } else if ((x as string).includes("List")) {
      await getTask();
    } else if ((x as string).includes("3")) {
      let taskId = await getTaskId();
      await deleteTask(taskId);
      await getTask();
      console.log(chalk.red("Task Deleted"));
    }
  }
};

startProgramme();
