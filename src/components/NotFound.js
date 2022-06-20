import React from "react";
import styled from "styled-components";

const NotFound = () => {
  return <Info>올바른 주소로 접속해주세요 🥲</Info>;
};

const Info = styled.div`
  height: 100vh;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eee;
`;

export default NotFound;
