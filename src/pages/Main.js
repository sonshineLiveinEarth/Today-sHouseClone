import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import MainCard from "../components/MainCard";
import Header from "../components/Header";
import { getPostListDB } from "../redux/modules/post";

const Main = () => {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.post.postList);
  // console.log(postList);

  useEffect(() => {
    dispatch(getPostListDB());
  }, [dispatch]);

  return (
    <>
      <Header />
      <MainGrid>
        <Blank />
        {postList.map((postObj, index) => {
          return <MainCard postObj={postObj} key={index} />;
        })}
      </MainGrid>
    </>
  );
};
const Blank = styled.div`
  height: 50px;
  grid-column: 1/-1;
`;
const MainGrid = styled.main`
  margin: 30px auto;
  max-width: 1256px;
  padding: 0 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-gap: 20px;
`;

export default Main;
