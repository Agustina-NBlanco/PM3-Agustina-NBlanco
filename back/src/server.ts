import express, { Express } from "express";
import router from "./routes/indexRouter";
import cors from "cors";
import morgan from "morgan";

const app: Express = express()

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(router);



export default app