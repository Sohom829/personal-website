const chalk = require("chalk");

const LoggerColors = {
  HostLoggingColor: "#FF7F50",
  NodeJSVersionColor: "#FFFACD",
  ErrorColor: "#B22222",
};

const greenBorder = chalk.green("—");

const lines = greenBorder;
const bigLines =
  lines +
  lines +
  lines +
  lines +
  lines +
  lines +
  lines +
  lines +
  lines +
  lines +
  lines +
  lines +
  lines +
  lines +
  lines +
  lines +
  lines +
  lines +
  lines +
  lines +
  lines +
  lines +
  lines +
  lines +
  lines +
  lines +
  lines +
  lines +
  lines +
  lines +
  lines +
  lines +
  lines +
  lines +
  lines +
  lines +
  lines +
  lines +
  lines +
  lines +
  lines +
  lines +
  lines +
  lines +
  lines +
  lines;

const BoldLines = chalk.bold(bigLines);
const bgLines = chalk.bgGreen(bigLines);

module.exports = {
  LoggerColors,
  greenBorder,
  lines,
  bigLines,
  BoldLines,
  bgLines,
};
