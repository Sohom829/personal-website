const express = require("express");
const app = require("./app");
const PORT = 3000;
const Hostname = "localhost";
const chalk = require("chalk");
const {
  LoggerColors,
  greenBorder,
  bigLines,
  lines,
  BoldLines,
  bgLines,
} = require("./chalkLogger");
const Coral = chalk.hex(`${LoggerColors.HostLoggingColor}`);
const LemonChiffon = chalk.hex(`${LoggerColors.NodeJSVersionColor}`);
const FireBrick = chalk.hex(`${LoggerColors.ErrorColor}`);
try {
  app.listen(PORT, () => {
    console.log(BoldLines);
    console.log(Coral(`Server started as http://${Hostname}:${PORT}`));
    console.log(LemonChiffon(`NodeJS Version: ${process.version}`));
    console.log(BoldLines);
  });
} catch (err) {
  console.log(FireBrick(err));
}
