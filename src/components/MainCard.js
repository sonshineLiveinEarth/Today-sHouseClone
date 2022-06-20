import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Heart from "../image/Heart.png";
import Bookmark from "../image/Bookmark.png";
import CommentIcon from "../image/CommentIcon.png";

const MainCard = ({ postObj }) => {
  const navigate = useNavigate();

  return (
    <CardWrap
      onClick={() => {
        navigate("/detail/" + postObj.id);
      }}
    >
      <CardHeader>
        <img src="/images/Avatar.png" alt="profile" height="36" />
        <span>{postObj.userNickname}</span>
      </CardHeader>
      <ImageWrap>
        <CardImage src={postObj.imageFile} alt="card image" />
      </ImageWrap>
      <IconWrap>
        <IconCnt>
          <Icon src={Heart} alt="heart" />
          <span>{postObj.heartCnt}</span>
        </IconCnt>
        <IconCnt>
          <Icon src={Bookmark} alt="Bookmark" />
          <span>{postObj.bookmarkCnt}</span>
        </IconCnt>
        <IconCnt>
          <Icon src={CommentIcon} alt="CommentIcon" />
          <span>{postObj.commentCnt}</span>
        </IconCnt>
      </IconWrap>
      <Text>{postObj.content}</Text>
      <CommentWrap>
        <CommentProfile src="/images/Avatar.png" alt="profile" height="24" />

        <Text>
          <span>{"nickname"}</span>
          {postObj.comment}
        </Text>
      </CommentWrap>
    </CardWrap>
  );
};

const CardWrap = styled.article`
  cursor: pointer;
  &:hover {
    opacity: 0.65;
  }
  margin-bottom: 30px;
`;
const CardHeader = styled.div`
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
    transform: scale(1.1);
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
  margin-top: 10px;
  width: 100%;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  span {
    font-weight: bold;
    margin: 10px 10px 0 0;
  }
`;

export default MainCard;
