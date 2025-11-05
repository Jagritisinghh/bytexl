import styled from "styled-components"

export const WeatherMainContainer = styled.div`
  min-width: 620px;
  margin: 50px auto;
  padding: 2rem;
  background-image: linear-gradient(135deg, #00feba, #5b548a);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  text-align: center;
  transition: all 0.3s ease;
`;


export const SearchContainer=styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
`

export const InputCity = styled.input`
  width: 80%;
  border: 2px solid #ddd;
  border-radius: 8px;
  outline: none;
    padding:10px;

 
`;

export const FetchWeatherButton = styled.button`
  padding:10px;
  border: none;
  background-color: #4a90e2;
  color: white;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  font-size:1rem;

&:hover {
    background-color: #357abd;
  }
`;

export const ErrorMessage = styled.p`
  color: #ff4d4f;
  margin-top: 1rem;
`;

export const WeatherSubContainer = styled.div`
  border-radius: 12px;
  text-align: center;
  margin:0px;
`;

export const WeatherIcon=styled.img`
height:150px;
`

export const Temperature=styled.p`
color:white;
font-size:40px;
margin:0px;
`
export const City = styled.h2`
  font-size: 2.8rem;
  font-weight: 600;
  color: #ffffffff;
  margin: 10px 0 5px;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #444;
  margin-bottom: 15px;
  text-transform: capitalize;
`;



export const HumidityWindSpeedContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
  gap: 20px;
  flex-wrap: wrap;
`;

export const HumidityContainer = styled.div`
  text-align: center;
`;

export const HumidityValue = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  color: #fff;
`;

export const HumidityText = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin:0px;
`
export const WindSpeedContainer = styled.div`
  text-align: center;
`;

export const WindSpeedvalue = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  color: #fff;
`;

export const WindSpeedText = styled.p`
  font-size: 1.1rem;
  color: #444;
`;

// Quotes styles

export const QuotesContainer = styled.div`
  text-align: center;
  padding: 2rem;
  background: transparent;
  border:2px solid white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  max-width: 600px;
  margin: 2rem auto;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
  @media (max-width: 576px) {
    padding: 1rem;
    border:none;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    max-width: 90%;
  }

`;

export const QuoteText = styled.p`
  font-size: 3rem;
  font-style: italic;
  color: #fff;
  margin-bottom: 1rem;
  line-height: 1.6;

   @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const QuoteAuthor = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  color: #555;
  text-align:right;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const NewQuoteButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.6rem 1.4rem;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

   @media (max-width: 768px) {
    padding: 0.5rem 1.2rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.4rem 1rem;
    font-size: 0.8rem;
  }
`;



