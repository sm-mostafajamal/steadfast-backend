require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const jobsRouter = require("./controllers/jobs");
const { errorHandler } = require("./utils/middleware");

const PORT = process.env.PORT;

app.use(express.static("build"));
app.use(express.json());
app.use(cors());
app.use("/api/jobs", jobsRouter);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
