import express, { json } from "express";
import path from "path";
import routes from "./routes";

const app = express();

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(json());
app.use(routes);

app.listen(3333);
