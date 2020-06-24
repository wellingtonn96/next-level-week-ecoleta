import express, { json } from "express";
import path from "path";
import routes from "./routes";
import cors from "cors";

const app = express();

app.use(cors());
app.use(json());
app.use(routes);

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.listen(3333);
