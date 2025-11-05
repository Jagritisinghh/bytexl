import axios from "axios";

export const convertCurrency = async (req, res) => {
  try {
   const { amount } = req.query;

   const from="INR";

    // Validate inputs
    if ( !amount) {
      return res.status(400).json({ error: "Please provide correct 'amount'." });
    }

    const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${from.toUpperCase()}`);
    const data = response.data;

    // Check if target currency exists
    const usdRate = data.rates["USD"];
    const eurRate=data.rates["EUR"];

   if (!usdRate || !eurRate) {
      return res.status(400).json({ error: "Could not find USD or EUR rates." });
    }


    // Convert amount
     const convertedUSD = (amount * usdRate).toFixed(2);
    const convertedEUR = (amount * eurRate).toFixed(2);

    res.json({
     convertedUSD :Number(convertedUSD),
    convertedEUR:Number(convertedEUR),
      usdRate,
     eurRate
    });
  } catch (error) {
    console.error("Currency conversion error:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};
