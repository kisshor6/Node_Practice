const chalk = require("chalk");
const validator = require("validator");

// console.log(chalk.green.inverse('Successfully inserted!'));

const res = validator.isEmail("l43te95@gmail.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));