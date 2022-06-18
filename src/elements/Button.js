import styled from "styled-components";

export const TextButton = styled.span`
  cursor: pointer;
  padding: 0 10px;
  margin: auto 0;
`;

export const BlueButton = styled.button`
  cursor: pointer;
  border: none;

  height: 40px;
  border-radius: 4px;
  padding-left: 16px;
  font-weight: 400;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #35c5f0;
  margin-left: 10px;
  &:hover {
    background-color: #10afea;
  }
`;
