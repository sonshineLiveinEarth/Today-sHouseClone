import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import Bookmark from "../image/Bookmark.png";
import CommentIcon from "../image/CommentIcon.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addHeartDB } from "../redux/modules/post";

//이미지
import HeartFull from "../image/HeartFull.png";
import Heart from "../image/HeartB.png";

const MainCard = ({ postObj }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postLike = useSelector((state) => state.post.postlike);
  const [Like, setLike] = useState(false);

  const id = postObj?.id;
  // console.log(postObj);
  return (
    <CardWrap>
      <CardHeader>
        <img src="/images/Avatar.png" alt="profile" height="36" />
        <span>{postObj?.userNickname}</span>
      </CardHeader>
      <ImageWrap
        onClick={() => {
          navigate("/detail/" + postObj.id);
        }}
      >
        <CardImage src={postObj?.imageUrl} alt="card image" />
      </ImageWrap>
      <IconWrap>
        <IconCnt>
          <Icon
            onClick={() => {
              dispatch(addHeartDB(id));
              // if (!Like) setLike(true);
              // else setLike(false);
            }}
            src={postLike ? HeartFull : Heart}
            alt="heart"
          />
          <span>{postObj?.heartCnt === 0 ? "" : postObj?.heartCnt}</span>
        </IconCnt>
        <IconCnt>
          <Icon src={Bookmark} alt="Bookmark" />
          <span>{postObj?.bookmarkCnt === 0 ? "" : postObj?.bookmarkCnt}</span>
        </IconCnt>
        <IconCnt
          onClick={() => {
            navigate("/detail/" + postObj.id);
          }}
        >
          <Icon src={CommentIcon} alt="CommentIcon" />
          <span>{postObj?.commentCnt === 0 ? "" : postObj?.commentCnt}</span>
        </IconCnt>
      </IconWrap>
      <Text
        onClick={() => {
          navigate("/detail/" + postObj.id);
        }}
      >
        {postObj?.content}
      </Text>
      {postObj?.comment && (
        <CommentWrap>
          <CommentProfile src="/images/Avatar.png" alt="profile" height="24" />

          <Text>
            <span>{"nickname"}</span>
            {postObj?.comment}
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
