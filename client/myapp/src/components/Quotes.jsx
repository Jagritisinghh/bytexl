import React ,{useState,useEffect}from 'react'
import { QuotesContainer, QuoteText, QuoteAuthor ,NewQuoteButton} from "../styles/styledComponent";
import {getQuote} from "../api/quoteApi"
import Loader from './Loader';

export default function Quotes() {
    const [quote,setQuote]=useState("");
    const [loading,setLoading]=useState(false);
     const [error, setError] = useState("");

    const fetchQuote=async()=>{
        setLoading(true);
        setError("");
        try{
            const data=await getQuote();
            setQuote(data);

        }catch(e){
                setError("Unable to fetch quote. Please try again later.");
        }finally{

            setLoading(false)
        }
    }

   useEffect(()=>{
    fetchQuote()
   },[])
  
  
  return (
     <QuotesContainer>

     {  loading?<Loader/>:
       (<> <QuoteText>"{quote.text}"</QuoteText>
      <QuoteAuthor>- {quote.author}</QuoteAuthor>
      {error&&<p>{error}</p>}
      <NewQuoteButton onClick={fetchQuote}>New Quote</NewQuoteButton>
      </>
      )

      }
      
    </QuotesContainer>
  )
}

