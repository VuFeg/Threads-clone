import express from "express";
import { envConfig } from "./utils/config";
import database from "./services/database.services";

const app = express();
const PORT = envConfig.port;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

database.connectDB()

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
