const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const EvaluateTopicRoutes = require("./routes/evaluate.js");
const GetEvaluateTopicsRoutes = require("./routes/evaluate.js");
const GetEvaluateTopicByIdRoutes = require("./routes/evaluate.js");
const UpdateEvaluateTopic = require("./routes/evaluate.js");
const DelEvaluateTopicsRoutes = require("./routes/evaluate.js");
const EvaluatePresentationRoutes = require("./routes/evaluate.js");
const GetEvaluatePresentationRoutes = require("./routes/evaluate.js");
const GetEvaluatePresentationByIdRoutes = require("./routes/evaluate.js");
const UpdateEvaluatePresentationRoutes = require("./routes/evaluate.js");

const AddTestRoutes = require("./routes/evaluate.js");
const GetTestsRoutes = require("./routes/evaluate.js");
const DelTestsRoutes = require("./routes/evaluate.js");

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.static("public")); //This lines means the static data like css, images... are in the public directory

app.use(express.json());
app.use("/api/add", EvaluateTopicRoutes);
app.use("/api/get", GetEvaluateTopicsRoutes);
app.use("/api/get", GetEvaluateTopicByIdRoutes);
app.use("/api/put", UpdateEvaluateTopic);
app.use("/api/del", DelEvaluateTopicsRoutes);
app.use("/api/add", EvaluatePresentationRoutes);
app.use("/api/get", GetEvaluatePresentationRoutes);
app.use("/api/get", GetEvaluatePresentationByIdRoutes);
app.use("/api/put", UpdateEvaluatePresentationRoutes);

app.use("/api/addtest", AddTestRoutes);
app.use("/api/gettest", GetTestsRoutes);
app.use("/api/deltest", DelTestsRoutes);

const connectionString = process.env["MONGO_DB"];

//fix the error and use the env variable connectionstring
mongoose
  .connect(
    "mongodb+srv://user:user123@cluster0.f6a9d.mongodb.net/New?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(4000, () => {
      console.log("Server is running on port 4000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
