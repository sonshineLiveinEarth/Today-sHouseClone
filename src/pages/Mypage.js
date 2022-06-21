import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
// 이미지
import Profile from "../image/Profile.png";

const Mypage = () => {
  return (
    <>
      <Header />
      <Wrap>
        <ProfileWrap>
          <ProfileImage src={Profile} alt="프로필 이미지" />{" "}
          <Nickname>yunjooo</Nickname>
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

export default Mypage;
