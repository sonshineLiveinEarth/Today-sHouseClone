import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addHeartDB, bookmarkDB } from "../redux/modules/post";

//이미지
import HeartFull from "../image/HeartFull.png";
import Heart from "../image/HeartB.png";
import Profile from "../image/Profile.png";
import Bookmark from "../image/Bookmark.png";
import BookmarkFull from "../image/BookmarkFull.png";
import CommentIcon from "../image/CommentIcon.png";

const MainCard = ({ postObj }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postLike = useSelector((state) => state.post.postlike);
  const [Like, setLike] = useState(false);
  const [bookmark, setBookmark] = useState(false);

  const id = postObj?.id;
  // console.log(postObj);
  return (
    <CardWrap>
      <CardHeader>
        <img src={Profile} alt="profile" height="36" />
        <span>{postObj?.userNickname}</span>
      </CardHeader>
      <ImageWrap
        onClick={() => {
          navigate("/detail/" + id);
        }}
      >
        <CardImage src={postObj?.imageUrl} alt="card image" />
      </ImageWrap>
      <IconWrap>
        <IconCnt>
          <Icon
            onClick={() => {
              dispatch(addHeartDB(id));
            }}
            src={Like ? HeartFull : Heart}
            alt="좋아요"
          />
          <span>{postObj?.heartCnt === 0 ? "" : postObj?.heartCnt}</span>
        </IconCnt>
        <IconCnt>
          <Icon
            src={bookmark ? BookmarkFull : Bookmark}
            alt="Bookmark"
            onClick={() => {
              dispatch(bookmarkDB(id));
              // setBookmark((prev) => !prev);
            }}
          />
          <span>{postObj?.bookmarkCnt === 0 ? "" : postObj?.bookmarkCnt}</span>
        </IconCnt>
        <IconCnt
          onClick={() => {
            navigate("/detail/" + id);
          }}
        >
          <Icon src={CommentIcon} alt="CommentIcon" />
          <span>{postObj?.commentCnt === 0 ? "" : postObj?.commentCnt}</span>
        </IconCnt>
      </IconWrap>
      <Text
        onClick={() => {
          navigate("/detail/" + id);
        }}
      >
        {postObj?.content}
      </Text>

      {postObj?.commentOne && (
        <CommentWrap
          onClick={() => {
            navigate("/detail/" + id);
          }}
        >
          <CommentProfile src="/images/Avatar.png" alt="profile" height="24" />

          <Text>
            <span>{postObj?.commentOne.user.userNickname}</span>
            {postObj?.commentOne.comment}
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
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
`;
const CardImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
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
  margin: 7px 10px 0 0;
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
