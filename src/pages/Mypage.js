import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
// 이미지
import Profile from "../image/Profile.png";
import BookMark from "../image/Bookmark.png";
import Heart from "../image/HeartB.png";

const Mypage = () => {
  return (
    <>
      <Header />
      <Wrap>
        <ProfileWrap>
          <ProfileImage src={Profile} alt="프로필 이미지" />{" "}
          <Nickname>yunjooo</Nickname>
          <ProfileBtn>설정</ProfileBtn>
          <BottomWrap>
            <Book src={BookMark} alt="스크랩북" />
            <HeartIcon src={Heart} alt="좋아요" />
          </BottomWrap>
        </ProfileWrap>
        <Div />
        <PhotoWrap>마이페이지입니다.</PhotoWrap>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  width: 1156px;
  height: 600px;
  padding-top: 2px;
  /* margin-left: 6px;
  margin-left: 8px; */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  margin: auto;
  padding-top: 150px;
`;

const ProfileWrap = styled.div`
  width: 195px;
  height: 376px;
  padding: 30px 25px 18px 25px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgb(218, 220, 224);
  box-shadow: rgb(63 71 77 / 6%) 0px 2px 4px 0px;
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
`;

const Nickname = styled.span`
  margin-top: 10px;
  font-size: 26px;
  color: rgb(41, 41, 41);
  font-weight: bold;
`;

const Div = styled.div`
  width: 8.33333%;
  padding-left: 10px;
  padding-right: 10px;
  @media only screen and (max-width: 1600px) {
    padding-left: 5px;
    padding-right: 5px;
  }
`;

const PhotoWrap = styled.div`
  width: 66.6667%;
  height: 673px;
  background-color: #aaa;
`;

const ProfileBtn = styled.button`
  margin-right: 6px;
  font-weight: normal;
  font-size: 12px;
  color: rgb(41, 41, 41);
  background-color: #fff;
  color: #757575;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  padding: 7px 16px 7px 16px;
  margin-top: 12px;
  font-size: 14px;
  line-height: 19px;
`;

const BottomWrap = styled.div`
  border-top: 1px solid rgb(234, 235, 239);
  padding: 24px 0px 6px;
  font-size: 15px;
  color: #424242;
  width: 100%;
  height: 76px;
  margin-top: 20px;
`;

const Book = styled.img`
  width: 28px;
  height: auto;
`;

const HeartIcon = styled.img`
  width: 32px;
  height: auto;
`;

export default Mypage;
