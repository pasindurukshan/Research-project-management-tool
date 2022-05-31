const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const EvaluateTopicRoutes = require("./routes/evaluate.js");
const EvaluatePresentationRoutes = require("./routes/evaluate.js");

const GetEvaluateTopicsRoutes = require("./routes/evaluate.js");

const AddTestRoutes = require("./routes/evaluate.js");
const GetTestsRoutes = require("./routes/evaluate.js");

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.static("public")); //This lines means the static data like css, images... are in the public directory

app.use(express.json());
app.use("/api/evt", EvaluateTopicRoutes);
app.use("/api/evp", EvaluatePresentationRoutes);
app.use("/api/get", GetEvaluateTopicsRoutes);
app.use("/api/addtest", AddTestRoutes);
app.use("/api/gettest", GetTestsRoutes);

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
