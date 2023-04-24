const express = require("express");

const app = express();

const routes = require("./routes/routes");

app.use("/", routes);

app.listen(5001, () => {
  console.log("server running on port 5001");
});

//get retrive
//post create
//delete delete
//put update/edit
//use (CRUD) middleware
