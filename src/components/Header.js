import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { TextButton, BlueButton } from "../elements/Button";
//이미지
import Arrow from "../image/Arrow.png";
import ImgIcon from "../image/ImgIcon.png";

const Header = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  // 모달창 띄우기
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    if (!showModal) setShowModal(true);
    else setShowModal(false);
  };

  return (
    <>
      <HeaderContainer>
        <div>
          <img
            src="/images/TextLogo.png"
            alt="Logo"
            height="30px"
            onClick={() => navigate("/")}
          />

          <nav>
            {isLogin ? (
              <img src="/images/Avatar.png" alt="avatar" height="40px" />
            ) : (
              <>
                <TextButton onClick={() => setIsLogin(true)}>로그인</TextButton>
                <TextButton
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  회원가입
                </TextButton>
              </>
            )}

            <BlueButton
              onClick={() => {
                openModal();
              }}
            >
              글쓰기 <Icon src={Arrow} />
            </BlueButton>
          </nav>
        </div>
      </HeaderContainer>

      {showModal && (
        <ModalContainer showModal={showModal}>
          <WriteWrap
            onClick={() => {
              navigate("/contents/new");
            }}
          >
            <ImageIcon src={ImgIcon} />
            <TextWrap>
              <WriteTitle>사진 올리기</WriteTitle>
              <WriteSub>우리 집의 공간과 나의 일상을 기록해 보세요.</WriteSub>
            </TextWrap>
          </WriteWrap>
        </ModalContainer>
      )}
    </>
  );
};

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 80px;
  margin: 0px auto;
  padding: 0 30px;
  background-color: white;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(219, 219, 219);
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  div {
    width: 1256px;
    padding: 0 60px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    @media only screen and (max-width: 800px) {
      padding: 0 40px;
    }
  }
  nav {
    display: flex;
  }
  img {
    cursor: pointer;
    margin-right: 10px;
  }
`;

const Icon = styled.img`
  width: 14px;
  height: auto;
  padding-top: 2px;
  margin-left: 6px;
  margin-left: 8px;
`;

const ModalContainer = styled.div`
  transform: none;
  transition: transform 0.2s ease 0s;
  position: fixed;
  right: 560px;
  padding: 8px;
  top: 70px;
  /* transform: translate(-50%, -50%); */
  width: 270px;
  background: white;
  border-radius: 10px;
  text-align: center;
  border: 1px solid rgb(218, 221, 224);
  border-radius: 6px;
  box-shadow: rgb(63 71 77 / 20%) 0px 4px 10px 0px;
  visibility: visible;
  @media only screen and (max-width: 1700px) {
    right: 440px;
  }
  @media only screen and (max-width: 1600px) {
    right: 400px;
  }
  @media only screen and (max-width: 1500px) {
    right: 330px;
  }
  @media only screen and (max-width: 1400px) {
    right: 280px;
  }
  @media only screen and (max-width: 1300px) {
    right: 240px;
  }
  @media only screen and (max-width: 1200px) {
    right: 200px;
  }
  @media only screen and (max-width: 1100px) {
    right: 140px;
  }
  @media only screen and (max-width: 1000px) {
    right: 100px;
  }
  @media only screen and (max-width: 900px) {
    right: 60px;
  }
  @media only screen and (max-width: 800px) {
    width: 20rem;
    position: fixed;
    right: 10px;
  }
  /* 팝업이 열릴때 스르륵 열리는 효과 */
  animation: ${(props) =>
    props.showModal ? "modal-bg-show 0.3s" : "modal-bg-close 0.3s"};
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes modal-close {
    from {
      opacity: 1;
      margin-top: 0;
    }
    to {
      opacity: 0;
      margin-top: -50px;
    }
  }
  @keyframes modal-bg-close {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

const WriteWrap = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  &:hover {
    background-color: #f4f4f4;
  }
`;

const ImageIcon = styled.img`
  width: 27px;
  height: auto;
  padding-top: 2px;
  margin-left: 6px;
  padding-bottom: 4px;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 12px;
`;

const WriteTitle = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: rgb(47, 52, 56); ;
`;

const WriteSub = styled.span`
  font-size: 10px;
  margin-top: 4px;
  color: rgb(130, 140, 148); ;
`;

export default Header;
