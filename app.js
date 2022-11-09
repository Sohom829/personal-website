const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
app.get("/friends", (req, res) => {
  res.sendFile(__dirname + "/views/friends.html");
});
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});
app.get("/github", (req, res) => {
  res.sendFile(__dirname + "/views/github.html");
});
app.use(express.static(__dirname + "/views"));
app.use((req, res) => {
  res.sendFile(__dirname + "/views/not-found.html");
});
module.exports = app;
