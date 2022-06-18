import React from "react";
import styled from "styled-components";
import Header from "../Header";

const Detail = () => {
  return (
    <>
      <Header />
      <Background>
        <Wrap>
          <Category>침실</Category>
          <PostImage />
          <PostContent>
            여름맞이 침구 🤍 보기만 해도 시원해지는 기분 ➿
          </PostContent>
          <CoWrap>
            <Label>댓글</Label>
            <CommentNum>0</CommentNum>
          </CoWrap>
          <Hr />
        </Wrap>
      </Background>
    </>
  );
};

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  font-family: "Noto Sans KR", "Apple SD Gothic Neo", "맑은 고딕",
    "Malgun Gothic", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
`;

const Wrap = styled.div`
  max-width: 720px;
  width: 100%;
  padding: 60px 0px;
  height: 100vh;
  font-family: "Noto Sans KR", "Apple SD Gothic Neo", "맑은 고딕",
    "Malgun Gothic", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Category = styled.span`
  font-size: 14px;
  line-height: 32px;
  color: #bbb;
  align-self: flex-start;
  margin-bottom: 10px;
`;

// const ImgWrap = styled.div`
//   position: relative;
//   background-color: rgb(247, 249, 250);
//   padding-bottom: 177.778%;
// `;

// const PostImage = styled.img`
//   max-width: 600px;
//   width: 100%;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `;

const PostImage = styled.div`
  max-width: 720px;
  width: 100%;
  padding-bottom: 100%;
  /* background-image: url(${(props) => props.profileImage}); */
  background-image: url(https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164422528068537909.jpeg?gif=1&w=1080);
  background-position: center 30%;
  background-size: cover;
`;

const PostContent = styled.span`
  margin-top: 40px;
  padding: 0px;
  margin: 24px 0px;
  font-size: 16px;
  line-height: 24px;
  color: rgb(47, 52, 56);
  align-self: flex-start;
`;

const CoWrap = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: left;
`;

const Label = styled.span`
  font-size: 14px;
  line-height: 32px;
  color: #bbb;
  align-self: flex-start;
  margin-bottom: 10px;
`;

const CommentNum = styled.span`
  font-size: 14px;
  line-height: 32px;
  color: #424242;
  align-self: flex-start;
  margin-bottom: 10px;
  margin-left: 4px;
`;

const Hr = styled.hr`
  width: 100%;
  height: 1px;
  border: none;
  background-color: rgb(234, 237, 239);
`;

export default Detail;
