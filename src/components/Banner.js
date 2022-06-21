import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

// 이미지
import HeartB from "../image/HeartB.png";
import CommentIcon from "../image/CommentIcon.png";
import BookMark from "../image/Bookmark.png";

const Banner = (props) => {
  console.log(props);
  return (
    <Wrap>
      <Box>
        <HeartIcon src={HeartB} alt="좋아요 버튼" />
      </Box>
      <Count>{props.heartCnt}</Count>
      <Box>
        <MarkIcon src={BookMark} alt="포스팅 저장하기" />
      </Box>
      <Count>{props.bookmarkCnt}</Count>
      <Hr />
      <Link to="1" spy={true} smooth={true}>
        <Box2>
          <CoIcon src={CommentIcon} alt="댓글 탭 이동" />
        </Box2>
      </Link>

      <Count>{props.commentCnt}</Count>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 60px;
  height: 100vh;
  position: fixed;
  top: 120px;
  right: 300px;
  box-sizing: border-box;
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 1600px) {
    right: 100px;
  }
  @media only screen and (max-width: 1000px) {
    right: 50px;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Box = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 100%;
  box-sizing: border-box;
  border: 1px solid rgb(194, 200, 204);
  background: rgb(255, 255, 255);
  box-shadow: rgb(63 71 77 / 15%) 0px 2px 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  &:hover {
    box-shadow: rgb(63 71 77 / 30%) 0px 2px 6px;
  }
`;

const Hr = styled.hr`
  width: 54px;
  height: 1px;
  margin-top: 20px;
  border: 0px;
  background: rgb(234, 237, 239);
`;

const Box2 = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  box-sizing: border-box;
  border: none;
  background: rgb(247, 249, 250);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  &:hover {
    background: #ededed;
  }
`;

const HeartIcon = styled.img`
  width: 22px;
  height: auto;
`;

const MarkIcon = styled.img`
  width: 18px;
  height: auto;
  margin-top: 2px;
`;

const CoIcon = styled.img`
  width: 22px;
  height: auto;
`;

const Count = styled.span`
  font-size: 14px;
  color: rgb(130, 140, 148);
  margin-top: 6px;
`;

export default Banner;
