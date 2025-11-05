import axios from "axios";

const API_BASE_URL = "https://bytexlserver.onrender.com/api";


export const getCurrency = async (amount) => {
    console.log(amount);
    console.log(typeof(amount));
  try {
    const response = await axios.get(`${API_BASE_URL}/currency/convert?amount=${amount}`);
    return response.data;
  } catch (error) {
    console.error("Error converting the Currency", error);
    throw new Error("Unable to convert the amount. Please try again later.");
  }
};

