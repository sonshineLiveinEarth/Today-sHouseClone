import React, { useEffect, useState } from "react";
import styled from "styled-components";
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
  // console.log(postList);
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
      <div ref={inViewRef} />
    </>
  );
};
const Blank = styled.div`
  height: 100px;
  grid-column: 1/-1;
`;
const RankGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 0 30px;
  @media screen and (max-width: 700px) {
    grid-template-columns: none;
  }
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
