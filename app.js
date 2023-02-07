const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes/routes");

//Middlewares
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(morgan("dev"));

DB_URL =
  "mongodb+srv://admin:BFqMhWny3RYBUQmA@cluster0.hwplq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const port = process.env.PORT || 3334;

const db_config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

app.use("/api/v1", routes);

mongoose
  .connect(DB_URL, db_config)
  .then((status) => {
    console.log(`connnected to database successfully`);
  })
  .catch((err) => {
    console.log(`erroe in connecting to database - ${err}`);
  });

//INIT Server
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
