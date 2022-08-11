import express from "express";
import { v4 } from "uuid";
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello from backend to frontend!");
});
app.post("/weather", (req, res) => {
  const newCity = {
    id: v4(),
    name: req.body.cityName,
  };
  if (!newCity.name) {
    return res.status(400).json({ msg: "Please enter a city name." });
  }
  res.status(200).json(newCity);
});

app.listen(PORT, () => {
  `Server is running on ${PORT} port...`;
});
