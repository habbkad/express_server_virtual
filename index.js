const express = require("express");
const studentRoutes = require("./routes/students_routes");
const authRoute = require("./routes/auth_routes");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const connect = require("./api/db");

const app = express();

//connect to db
connect();

//middlewares
app.use(bodyParser.json());
app.use(cookieParser());

//routes
app.use("/", studentRoutes);
app.use("/", authRoute);

app.listen(5001, () => {
  console.log("server running on port 5001");
});
