const express = require("express");
const studentRoutes = require("./routes/students_routes");
const bodyParser = require("body-parser");
const connect = require("./api/db");

const app = express();

//connect to db
connect();

//middlewares
app.use(bodyParser.json());

//routes
app.use("/", studentRoutes);

app.listen(5001, () => {
  console.log("server running on port 5001");
});
