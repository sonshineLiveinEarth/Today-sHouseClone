import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
      <Text>{postObj.content}</Text>
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
const Text = styled.div`
  margin-top: 10px;
  width: 100%;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export default MainCard;
