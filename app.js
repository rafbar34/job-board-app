import * as dotenv from "dotenv";

dotenv.config();
import express from "express";
import morgan from "morgan";
import routerJob from "./routes/index.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { body, validationResult } from "express-validator";
import routerAuth from "./routes/authRouter.js";
import cookieParser from "cookie-parser";
import { authenticateUser } from "./middleware/authMiddleware.js";
import userRouter from "./routes/userRouter.js";
import cors from "cors";
const app = express();
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(bodyParser.json({ limit: "10mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "10mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(
  cors({
    origin: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use(cookieParser());
app.use("/api/v1/auth", routerAuth);
app.use("/api/v1/users", authenticateUser, userRouter);
app.use("/api/v1/jobs", routerJob);
app.use("*", (req, res) => {
  res.status(200).json({ msg: "not found" });
  res.end();
});
app.use((err, req, res, next) => {
  res.status(500).json({ msg: "something went wrong", err: err });
  res.end();
});
try {
  await mongoose.connect(
    `mongodb+srv://${process.env.EMAIL}:${process.env.PASSWORD}@cluster0.pdjzyjw.mongodb.net`
  );
  app.listen(process.env.PORT, () => {
    console.log("server Runneing...");
  });
} catch (err) {
  console.log(err);
  process.exit(1);
}
