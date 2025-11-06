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
`;

export const CurrencyHeading = styled.h2`
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: 20px;
  text-align: center;
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
`;

export const Amount = styled.span`
  font-weight: bold;
  font-size: 1rem;
  color: #333;
`;

export const Rate = styled.span`
  font-size: 1rem;
  color: #555;
`;

export const ErrorMessage=styled.p`
color:red;
font-family:"Roboto";
font-size:20px;`


