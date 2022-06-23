import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";

import {
  getPostPageDB,
  getRankingDB,
  currentPage,
} from "../redux/modules/post";

import Header from "../components/Header";
import MainCard from "../components/MainCard";
import MainRank from "../components/MainRank";
import TopButton from "../components/TopButton";

const Main = () => {
  const dispatch = useDispatch();

  const postList = useSelector((state) => state.post.postList);
  const postRank = useSelector((state) => state.post.ranking);
  const _totalPage = useSelector((state) => state.post.totalPage);
  const _currentPage = useSelector((state) => state.post.currentPage);

  const [inViewRef, inView] = useInView();
  const [page, setPage] = useState(_currentPage);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getRankingDB());
  }, [dispatch]);

  useEffect(() => {
    setIsLoading(true);
    if (page <= _totalPage) dispatch(getPostPageDB(page));
    dispatch(currentPage(page + 1));
    setIsLoading(false);
  }, [page]);

  useEffect(() => {
    if (inView && !isLoading) {
      setPage((prev) => prev + 1);
    }
  }, [inView, isLoading]);

  return (
    <Wrap>
      <Header />
      <Blank />
      <TitleWrap>
        <Title>오늘의 인기 사진</Title>
      </TitleWrap>

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
      <div ref={inViewRef}>🐱</div>
      <TopButton />
    </Wrap>
  );
};
const Wrap = styled.div`
  position: relative;
`;
const TitleWrap = styled.div`
  max-width: 1256px;
  width: 90%;
  height: auto;
  margin: auto;
`;

const Title = styled.div`
  font-size: 20px;
  color: #000;
  font-weight: 700;
  margin-bottom: 20px;
`;

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
