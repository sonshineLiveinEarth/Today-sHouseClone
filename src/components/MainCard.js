import React from "react";
import styled from "styled-components";

const MainCard = ({ postObj }) => {
  return (
    <CardWrap>
      <CardHeader>
        <img src="/images/Avatar.png" alt="profile" height="36" />
        <span>{postObj.userNickname}</span>
      </CardHeader>
      <CardImg src={postObj.imageFile} alt="card image" />

      {/* {post.title.substr(0, 20)}
        {post.title.length > 20 ? "..." : ""} */}

      <div style={{ width: "100%" }}>
        {postObj.content}
        {/* {post.content.substr(0, 68)}
        {post.content.length > 68 ? "..." : ""} */}
      </div>
    </CardWrap>
  );
};

const CardWrap = styled.article`
  cursor: pointer;
  &:hover {
    opacity: 0.65;
  }
`;
const CardHeader = styled.div`
  display: flex;
  margin: 10px 0;
  span {
    margin: auto 10px;
    font-weight: bold;
  }
`;

const CardImg = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  border-radius: 6px;
`;

export default MainCard;
