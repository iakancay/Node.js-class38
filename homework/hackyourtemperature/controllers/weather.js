import { keys } from "../sources/keys.js";
import fetch from "node-fetch";

export const getTemperature = async (req, res) => {
  const { cityName } = req.body;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${keys.API_KEY}&units=metric`
  );
  const weatherData = await response.json();
  if (weatherData.cod === "404") {
    res.status(404).send({ msg: weatherData.message });
  } else {
    res
      .status(200)
      .send(
        `The temperature of ${cityName} is now ${weatherData.main.temp} celsius degrees.`
      );
  }
};
