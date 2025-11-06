import { useState,useEffect} from "react";
import {getWeatherData} from "../api/weatherApi";
import { TbTemperatureCelsius } from "react-icons/tb";
import {
  WeatherMainContainer,
  InputCity,
  FetchWeatherButton,
  ErrorMessage,
  WeatherSubContainer,
  SearchContainer,
  WeatherIcon,
  Temperature,
  City,
  Description,
  HumidityContainer,
  HumidityText,
  HumidityValue,
  HumidityWindSpeedContainer,
  WindSpeedContainer,
  WindSpeedvalue,
  WindSpeedText

 
} from "../styles/styledComponent";
import Loader from "./Loader";


export default function Weather() {
  const [city, setCity] = useState("New York");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading,setLoading]=useState(false);

  const fetchWeather = async (selectedCity) => {
    setLoading(true);
    setData("")
    try{
        const data=await getWeatherData(selectedCity);
        // console.log(data);

        setData(data);
    }catch(e){
        setError("Please enter a valid input.");
      console.error("e",e);
      setData(null)
    }finally{
        setLoading(false);
    }

    
  };
   useEffect(() => {
  if (!city) return; 
  setError("");       
  fetchWeather(city);
}, [city]);


 const weatherData = () => {
  if (!data) return null; 
  return (
    <WeatherSubContainer>
      <WeatherIcon alt="weather icon" src={data.icon}/>
     <Temperature>{data.temperature}<TbTemperatureCelsius size={30}/> </Temperature>
     <City>{data.city}</City>
     <Description>{data.description}</Description>

     <HumidityWindSpeedContainer>
        <HumidityContainer>
            <HumidityValue>{data.humidity}%</HumidityValue>
            <HumidityText>Humidity</HumidityText>
        </HumidityContainer>
        <WindSpeedContainer>
            <WindSpeedvalue>{data.wind_speed}</WindSpeedvalue>
            <WindSpeedText>Wind Speed</WindSpeedText>
        </WindSpeedContainer>
     </HumidityWindSpeedContainer>
    </WeatherSubContainer>
  );
};
  return (
    <WeatherMainContainer>
      <SearchContainer>

      <InputCity value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city" />
      <FetchWeatherButton onClick={() => fetchWeather(city)}>Search</FetchWeatherButton>
      </SearchContainer>
      {error && <ErrorMessage style={{ color: "red" }}>{error}</ErrorMessage>}
      
      {
        loading?<Loader/>:weatherData()
      }
       
     
    </WeatherMainContainer>
  );
}
