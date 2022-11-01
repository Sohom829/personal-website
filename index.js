const express = require("express");
const app = require("./app");
const PORT = 3000;
const Hostname = "localhost";

app.listen(PORT, () => {
  console.log(`Server started as http://${Hostname}:${PORT}`);
});
