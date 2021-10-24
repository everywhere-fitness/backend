const express = require("express");
const server = express();
const cors = require("cors");
const helmet = require("helmet");

server.use(express.json());
server.use(cors());
server.use(helmet());

server.use('/', (req, res, next) => {
  res.send('<h1>Hey There<h1>')
})

const userRouter = require("./users/router");
server.use("/api/users", userRouter);

const classRouter = require("./classes/router");
server.use("/api/classes", classRouter);

const authRouter = require("./auth/auth_router");
server.use("/api/auth", authRouter);

server.use("*", (req, res, next) => {
  console.log(`hitting${req.method} and ${req.baseUrl}`);
  next({ status: 404, message: "not found" });
});

server.use((err, req, res) => {
  res.status(err.status || 500).json({ message: `Horror: ${err.message}` });
});

module.exports = server;
