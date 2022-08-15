import express, { urlencoded } from "express";
import { getHomePage } from "./controllers/home.js";
import { getTemperature } from "./controllers/weather.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", getHomePage);
app.post("/weather", getTemperature);

export default app;
