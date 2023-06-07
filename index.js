require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const jobsRouter = require("./controllers/jobs");
const usersRouter = require("./controllers/users");

const { errorHandler } = require("./utils/middleware");

const PORT = process.env.PORT;

app.use(express.static("build"));
app.use(express.json());
app.use(cors());
app.use("/api/jobs", jobsRouter);
app.use("/api/users", usersRouter);
app.use(errorHandler);

app.listen(PORT || 3001, () =>
  console.log(`Server is running on port ${PORT}`)
);
