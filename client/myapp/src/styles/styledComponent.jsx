import styled from "styled-components";

export const WeatherMainContainer = styled.div`
  width: 90%;
  max-width: 620px;
  margin: 50px auto;
  padding: 2rem;
  background-image: linear-gradient(135deg, #00feba, #5b548a);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  text-align: center;
  transition: all 0.3s ease;

  @media (max-width: 1024px) {
    max-width: 550px;
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 1.2rem;
    margin: 30px auto;
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 1rem;
    border-radius: 12px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  align-items: center;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const InputCity = styled.input`
  flex: 1;
  border: 2px solid #ddd;
  border-radius: 8px;
  outline: none;
  padding: 10px;
  font-size: 1rem;
  transition: border 0.3s ease;

  &:focus {
    border-color: #4a90e2;
  }

  @media (max-width: 576px) {
    width: 95%;
    font-size: 0.95rem;
  }
`;

export const FetchWeatherButton = styled.button`
  padding: 10px 16px;
  border: none;
  background-color: #4a90e2;
  color: white;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #357abd;
  }

  @media (max-width: 576px) {
    width: 50%;
    align-self:center;
    font-size: 0.95rem;
  }
`;

export const ErrorMessage = styled.p`
  color: #ff4d4f;
  margin-top: 1rem;
  font-size: 0.95rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const WeatherSubContainer = styled.div`
  border-radius: 12px;
  text-align: center;
  margin: 20px 0;
`;

export const WeatherIcon = styled.img`
  height: 150px;

  @media (max-width: 768px) {
    height: 120px;
  }

  @media (max-width: 480px) {
    height: 100px;
  }
`;

export const Temperature = styled.p`
  color: white;
  font-size: 3rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const City = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
  color: #fff;
  margin: 10px 0 5px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #eee;
  margin-bottom: 15px;
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

// 💧 HUMIDITY & WIND
export const HumidityWindSpeedContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const HumidityContainer = styled.div`
  text-align: center;
`;

export const HumidityValue = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  color: #fff;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const HumidityText = styled.p`
  font-size: 1rem;
  color: #ddd;
  margin: 0;
`;

export const WindSpeedContainer = styled.div`
  text-align: center;
`;

export const WindSpeedvalue = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  color: #fff;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const WindSpeedText = styled.p`
  font-size: 1rem;
  color: #ddd;
`;

// 📝 QUOTES SECTION
export const QuotesContainer = styled.div`
  text-align: center;
  padding: 2rem;
  background: transparent;
  border: 2px solid white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  max-width: 600px;
  margin: 2rem auto;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    max-width: 90%;
  }

  @media (max-width: 576px) {
    padding: 1rem;
    border: none;
    box-shadow: none;
  }
`;

export const QuoteText = styled.p`
  font-size: 2rem;
  font-style: italic;
  color: #fff;
  margin-bottom: 1rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

export const QuoteAuthor = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  color: #eee;
  text-align: right;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
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
