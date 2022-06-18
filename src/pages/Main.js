import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import MainCard from "../components/MainCard";
import Header from "../components/Header";

const Main = () => {
  const postList = useSelector((state) => state.post.postList);

  return (
    <>
      <Header />
      <MainGrid>
        {postList.map((postObj, index) => {
          return <MainCard postObj={postObj} key={index} />;
        })}
      </MainGrid>
    </>
  );
};

const MainGrid = styled.main`
  margin: 30px auto;
  max-width: 1256px;
  padding: 0 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-gap: 20px;
`;

export default Main;
