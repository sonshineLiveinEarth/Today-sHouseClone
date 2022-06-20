import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

// 이미지
import HeartB from "../image/HeartB.png";
import CommentIcon from "../image/CommentIcon.png";

const Banner = () => {
  return (
    <Wrap>
      <Div>
        <HeartIcon src={HeartB} alt="좋아요 버튼" />
        <Count>26</Count>
      </Div>
      <Div>
        <Link to="1" spy={true} smooth={true}>
          <CoIcon src={CommentIcon} alt="댓글 탭 이동" />
        </Link>
        <Count>2</Count>
      </Div>
    </Wrap>
  );
};

const Wrap = styled.span`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    width: 100vw;
    height: 62px;
    font-size: 13px;
    color: #424242;
    z-index: 10;

    display: flex;
    -webkit-box-align: center;
    align-items: center;
    justify-content: space-around;
    padding-bottom: env(safe-area-inset-bottom, 0);
    background: rgba(255, 255, 255, 0.9);
    position: fixed;
    bottom: 0;
    left: 0;
  }
`;

const Div = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

const HeartIcon = styled.img`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    width: 24px;
    height: auto;
  }
`;

const CoIcon = styled.img`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    width: 23px;
    height: auto;
  }
`;

const Count = styled.span`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    font-size: 14px;
    color: rgb(130, 140, 148);
    margin-left: 8px;
  }
`;

export default Banner;
