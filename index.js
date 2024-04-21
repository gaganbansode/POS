const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
require("./config/config")();
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(morgan("dev"));
// routes
app.use("/api/items", require("./routes/itemRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/bills", require("./routes/billsRoute"));
app.get("/", (req, res) => {
  res.send("<h1>POS Backend</h1>");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("App is runing");
});
