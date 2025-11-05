import express from "express";
import dotenv from "dotenv"
dotenv.config();

import cors from "cors";
const app=express();
app.use(cors());
app.use(express.json());

const PORT=5000;


import weatherRoutes from "./routes/weatherRoutes.js";
import currencyRoutes from "./routes/currencyRoutes.js";
import quoteRoutes from "./routes/quoteRoutes.js";


app.use("/api/weather", weatherRoutes);
app.use("/api/currency", currencyRoutes);
app.use("/api/quotes", quoteRoutes);


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

export default app;