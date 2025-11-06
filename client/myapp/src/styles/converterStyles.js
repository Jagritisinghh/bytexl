import styled from "styled-components";

export const CurrencyMainContainer = styled.div`
  width: 400px;
  margin: 50px auto;
  padding: 30px;
  background-image: linear-gradient(135deg, #ccc, #3594dcff);
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Tablet */
  @media (max-width: 768px) {
    width: 80%;
    padding: 25px;
  }

  /* Mobile */
  @media (max-width: 480px) {
    width: 100%;
    padding: 20px;
  }
`;

export const CurrencyHeading = styled.h2`
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

export const Input = styled.input`
  width: 80%;
  padding: 10px 15px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  outline: none;

  &:focus {
    border-color: #0077ff;
  }

  @media (max-width: 768px) {
    width: 85%;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 0.9rem;
    padding: 8px 12px;
  }
`;

export const ConvertButton = styled.button`
  padding: 10px 25px;
  font-size: 1rem;
  color: white;
  background-color: #0077ff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #005fcc;
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    padding: 8px 20px;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 7px 16px;
    font-size: 0.9rem;
  }
`;

export const ConvertedAmountContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    width: 90%;
    padding: 8px 12px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 6px;
    padding: 8px 10px;
  }
`;

export const Amount = styled.span`
  font-weight: bold;
  font-size: 1rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const Rate = styled.span`
  font-size: 1rem;
  color: #555;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-family: "Roboto";
  font-size: 20px;
  text-align: center;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
