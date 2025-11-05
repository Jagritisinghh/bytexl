import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";


export const getQuote=async()=>{
     try {
    const response = await axios.get(`${API_BASE_URL}/quotes`);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw new Error("Unable to fetch weather details. Please try again later.");
  }
}