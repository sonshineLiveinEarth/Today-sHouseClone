import styled from "styled-components";

export const Textarea = styled.textarea`
  width: 100%;
  padding: 15px;
  border-radius: 4px;
  border: 1px solid #dbdbdb;
  color: #424242;
  outline: none;
  transition: all 0.2s;
  margin: 0 0 10px;
  resize: none;

  /* overflow: hidden;
  overflow-wrap: break-word; */
  height: 145px;
  &:hover {
    border-color: #707070;
    background-color: #f9f9f9;
  }
  &:focus {
    outline: 2px solid #35c5f0;
    border: none;
    background-color: #fff;
  }
`;
