import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

 const apiKey = process.env.WEATHER_API_KEY


export const getWeather = async (req, res) => {
  try {
    const { city } = req.query;

    
  
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    const data=response.data;
    const filteredData = {
      city: data.name,
      country: data.sys.country,
      temperature: parseFloat((data.main.temp-273.15).toFixed(1)),
      feels_like: parseFloat((data.main.feels_like-273.15).toFixed(1)),
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      weather: data.weather[0].main,
      description: data.weather[0].description,
      wind_speed: data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    };

    res.json(filteredData);
  } catch (err) {
    res.status(500).json({ error: "Could not fetch weather"});
    console.log(err)
  }
};