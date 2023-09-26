const express = require("express");
var morgan = require("morgan");
const teacherRouter = require("./routes/teacherRoute");
const childRouter = require("./routes/childRouter");
const classRouter = require("./routes/classRouter");

const server = express();
server.listen(8080, () => {
  console.log("I am listening....");
});

//
server.use(morgan("combined"));

//End points
server.use(express.json());
// server.use(express.urlencoded);
server.use(teacherRouter);
server.use(childRouter);
server.use(classRouter);

//
server.use((request, response) => {
  response.status(404).json({ message: "Not Found" });
});

//
server.use((error, request, response, next) => {
  res.status(500).json({ message: " " + error });
});
