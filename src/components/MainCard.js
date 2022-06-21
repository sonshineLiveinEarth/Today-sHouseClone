import React from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import Heart from "../image/Heart.png";
import Bookmark from "../image/Bookmark.png";
import CommentIcon from "../image/CommentIcon.png";

const MainCard = ({ postObj }) => {
  const navigate = useNavigate();
  // console.log(postObj);
  return (
    <CardWrap>
      <CardHeader>
        <img src="/images/Avatar.png" alt="profile" height="36" />
        <span>{postObj.userNickname}</span>
      </CardHeader>
      <ImageWrap
        onClick={() => {
          navigate("/detail/" + postObj.id);
        }}
      >
        <CardImage src={postObj.imageUrl} alt="card image" />
      </ImageWrap>
      <IconWrap>
        <IconCnt>
          <Icon src={Heart} alt="heart" />
          <span>{postObj.heartCnt === 0 ? "" : postObj.heartCnt}</span>
        </IconCnt>
        <IconCnt>
          <Icon src={Bookmark} alt="Bookmark" />
          <span>{postObj.bookmarkCnt === 0 ? "" : postObj.bookmarkCnt}</span>
        </IconCnt>
        <IconCnt
          onClick={() => {
            navigate("/detail/" + postObj.id);
          }}
        >
          <Icon src={CommentIcon} alt="CommentIcon" />
          <span>{postObj.commentCnt === 0 ? "" : postObj.commentCnt}</span>
        </IconCnt>
      </IconWrap>
      <Text
        onClick={() => {
          navigate("/detail/" + postObj.id);
        }}
      >
        {postObj.content}
      </Text>
      {postObj.commentOne && (
        <CommentWrap>
          <CommentProfile src="/images/Avatar.png" alt="profile" height="24" />

          <Text>
            {/* <span>{postObj.commentOne[0].user.userNickname}</span> */}
            {postObj.commentOne[0].comment}
          </Text>
        </CommentWrap>
      )}
    </CardWrap>
  );
};

const CardWrap = styled.article`
  cursor: pointer;
  margin-bottom: 30px;
`;
const Hover = css`
  &:hover {
    opacity: 0.65;
  }
`;
const CardHeader = styled.div`
  ${Hover}
  display: flex;
  margin: 10px 0;
  span {
    margin: auto 10px;
    font-weight: bold;
  }
`;
const ImageWrap = styled.div`
  border-radius: 6px;
  overflow: hidden;
  width: 100%;
  height: 270px;
`;
const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
  transition: all 0.1s linear;
  &:hover {
    transform: scale(1.05);
  }
`;
const IconWrap = styled.div`
  max-width: 270px;
  max-height: 30px;
  margin: 15px 20px;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
`;
const IconCnt = styled.div`
  display: flex;
  align-items: center;
`;
const Icon = styled.img`
  ${Hover}
  height: 22px;
  margin-right: 7px;
`;

const CommentProfile = styled.img`
  margin: 10px 10px 0 0;
`;
const CommentWrap = styled.div`
  display: flex;
`;

const Text = styled.div`
  ${Hover}
  margin-top: 10px;
  width: 100%;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  font-size: 15px;
  span {
    font-weight: bold;
    margin: 10px 10px 0 0;
  }
`;

export default MainCard;
