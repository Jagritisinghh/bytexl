import { useState } from "react";
import { getCurrency } from "../api/currencyApi";
import Loader from "./Loader";

import {
  CurrencyMainContainer,
  CurrencyHeading,
  Input,
  ConvertButton,
  ConvertedAmountContainer,
  Amount,
  Rate,
  ErrorMessage
} from "../styles/converterStyles";

export default function Converter() {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);
  const [error,setError]=useState("");
  const [loading,setLoading]=useState(false)

  const convert = async () => {
    setLoading(true);
    setError("")
    try{
        const data = await getCurrency(Number(amount));
        console.log("data",data)
        setResult(data);

    }
    catch(e){
        setError("Unable the convert the given Amount. Try again later.")
        console.log(e)

    }finally{
        setLoading(false)
    }
  };

  const convertedData=()=>{
    if (!result) return null; 
    return(
 <>
        <ConvertedAmountContainer>
            <Amount>USD: {result.convertedUSD}</Amount>
            <Rate>Rate: {result.usdRate}</Rate>
        </ConvertedAmountContainer>
        <ConvertedAmountContainer>
           <Amount>EUR: {result.convertedEUR}</Amount>
            <Rate>Rate: {result.eurRate}</Rate>
        </ConvertedAmountContainer>
        
        </>
    )
  }

  return (
    <CurrencyMainContainer>
 
      <CurrencyHeading>Convert INR to USD/EUR</CurrencyHeading>
      <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount in INR" />
      <ConvertButton onClick={convert}>Convert</ConvertButton>
       {loading?<Loader/>:convertedData()}
       {error&&<ErrorMessage>{error}</ErrorMessage>}
    </CurrencyMainContainer>
  );
}
