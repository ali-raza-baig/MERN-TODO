import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv"

// Configraturation Settings
const app = express();
dotenv.config();


// Middleware configraturation
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(cookieParser());


// App initialization
app.listen(5000, () => {
  console.log("App listing on 5000");
});
