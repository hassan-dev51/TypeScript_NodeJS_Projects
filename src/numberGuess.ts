import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const wait = () => {
  return new Promise((res) => {
    setTimeout(res, 2000);
  });
};

const start = async () => {
  let title = chalkAnimation.neon("Number Guessing Game");
  await wait();
  title.stop();
};
start();
