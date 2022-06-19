import React from "react";
import styled from "styled-components";
//이미지
import Profile from "../image/Profile.png";
import Heart from "../image/Heart.png";

const Comment = () => {
  return (
    <>
      <Wrap id="1">
        <Hr />
        <CommentT>댓글</CommentT>
        <CommentNum>1</CommentNum>
        <InputWrap>
          <UserProfile src={Profile} alt="userProfile" />
          <CommentInput placeholder="칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다 :)" />
          <CommentBtn type="button" value="입력" />
        </InputWrap>
        <CommentBox>
          <UserProfile src={Profile} alt="userProfile" />
          <CommentInfo>
            <Nickname>이설이</Nickname>
            <CommentText>블루 톤이 시원해보여요 :)</CommentText>
            <Info>
              <Time>6시간 전</Time> <Point />
              <HeartIcon src={Heart} alt="좋아요아이콘" />
              <Like>좋아요</Like>
              <Point />
              <Re>답글 달기</Re>
            </Info>
          </CommentInfo>
        </CommentBox>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  max-width: 720px;
  width: 95%;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  padding-bottom: 80px;

  @media only screen and (max-width: 768px) {
    grid-column: 1 / 2;
  }
`;

const Hr = styled.hr`
  width: 100%;
  height: 1px;
  border: none;
  background-color: rgb(234, 237, 239);
  margin-bottom: 30px;
`;

const CommentT = styled.span`
  font-size: 16px;
  line-height: 32px;
  color: #424242;
  align-self: flex-start;
  margin-bottom: 10px;
  font-weight: bold;
  margin-left: 14px;
`;

const CommentNum = styled.span`
  font-size: 16px;
  line-height: 32px;
  color: #35c5f0;
  align-self: flex-start;
  margin-bottom: 10px;
  font-weight: bold;
  margin-left: 8px;
`;

const UserProfile = styled.img`
  width: 36px;
  height: 36px;
  margin-left: 14px;
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 30px;
`;

const CommentInput = styled.input`
  width: 100%;
  color: rgb(47, 52, 56);
  outline: none;
  height: 44px;
  min-width: 100px;
  margin-left: 16px;
  box-sizing: border-box;
  border: 1px solid rgb(194, 200, 204);
  border-radius: 4px;
  padding: 0px 16px;
  margin-right: 20px;
  &::placeholder {
    color: rgb(194, 200, 204);
    display: block;
  }
`;

const CommentBtn = styled.input`
  width: auto;
  height: auto;
  margin-left: -60px;
  position: relative;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 16px;
  color: rgb(194, 200, 204);
`;

const CommentBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 30px;
  margin-bottom: 16px;
`;

const CommentInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 16px;
`;

const Nickname = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #424242;
`;

const CommentText = styled.span`
  font-size: 16px;
  color: #424242;
  margin-top: 8px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

const Time = styled.span`
  font-size: 12px;
  color: rgb(130, 140, 148);
`;

const Point = styled.hr`
  width: 0.5px;
  border: 0.5px solid rgb(130, 140, 148);
  margin: 0px 8px;
`;

const HeartIcon = styled.img`
  width: 16px;
  height: auto;
`;

const Like = styled.span`
  font-size: 12px;
  color: rgb(130, 140, 148);
  margin-left: 4px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Re = styled.span`
  font-size: 12px;
  color: rgb(130, 140, 148);
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default Comment;
