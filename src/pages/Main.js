import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";

import MainCard from "../components/MainCard";
import Header from "../components/Header";
import { getPostListDB, getRankingDB } from "../redux/modules/post";
import MainRank from "../components/MainRank";

const Main = () => {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.post.postList);
  const postRank = useSelector((state) => state.post.ranking);
  console.log(postList);
  const [inViewRef, inView] = useInView();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getPostListDB());
    dispatch(getRankingDB());
  }, [dispatch]);

  // useEffect(() => {
  //   if (inView && !isLoading) {
  //     setPage((prev) => prev + 1);
  //   }
  // }, [inView, isLoading]);

  useEffect(() => {}, []);

  return (
    <>
      <Header />
      <Blank />
      <RankGrid>
        {postRank.map((postObj, index) => {
          return <MainRank postObj={postObj} key={index} rank={index} />;
        })}
      </RankGrid>
      <MainGrid>
        {postList !== undefined
          ? postList.map((postObj, index) => {
              return <MainCard postObj={postObj} key={index} />;
            })
          : null}
      </MainGrid>
      {/* <div ref={inViewRef} /> */}
    </>
  );
};
const Blank = styled.div`
  height: 100px;
  grid-column: 1/-1;
`;
const Grid = css`
  display: grid;
  grid-gap: 20px;
  padding: 0 30px;
  max-width: 1256px;
`;
const RankGrid = styled.div`
  ${Grid}
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr;
  @media screen and (max-width: 700px) {
    grid-template-columns: none;
  }
`;
const MainGrid = styled.main`
  ${Grid}
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  margin: 30px auto;
`;
export default Main;
