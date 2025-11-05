import React from 'react'
import { Circles } from "react-loader-spinner";
import styled from "styled-components"

const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 150px;
  gap: 10px;
`;

export default function Loader() {
  return (
    <LoaderWrapper>
      <Circles
        height="80"
        width="80"
        color="#293eb7ff"
        ariaLabel="loading"
      />
    </LoaderWrapper>)
}

