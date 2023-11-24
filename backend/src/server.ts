import dotenv from "dotenv";
dotenv.config();

import express = require("express");
import cors = require("cors");
import bodyParser = require("body-parser");
import foodRouter from "./routers/food.router";
import userRouter from "./routers/user.router";
import orderRouter from "./routers/order.router";
import { dbconnect } from "./configs/database.config";
import paymentRouter from "./routers/payment.router";

dbconnect();
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:4200",
  })
);

app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/payments", paymentRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
