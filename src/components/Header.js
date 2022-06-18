import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { TextButton, BlueButton } from "../elements/Button";
//이미지
import Arrow from "../image/Arrow.png";

const Header = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  // 모달창 띄우기
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  // 스크롤에 따른 상단헤더 고정
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrolled && window.scrollY > 20) {
        setScrolled(true);
      } else if (scrolled && window.scrollY <= 20) {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      {scrolled ? (
        <HeaderContainerFix>
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
                  <TextButton onClick={() => setIsLogin(true)}>
                    로그인
                  </TextButton>
                  <TextButton>회원가입</TextButton>
                </>
              )}

              <BlueButton onClick={() => navigate("/contents/new")}>
                글쓰기 <Icon src={Arrow} />
              </BlueButton>
            </nav>
          </div>
        </HeaderContainerFix>
      ) : (
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
                  <TextButton onClick={() => setIsLogin(true)}>
                    로그인
                  </TextButton>
                  <TextButton>회원가입</TextButton>
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
      )}
      {showModal ? (
        // <Background>
        <ModalContainer>
          <div>사진올리기</div>
        </ModalContainer>
      ) : // </Background>
      null}
    </>
  );
};

const HeaderContainerFix = styled.header`
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
  div {
    width: 720px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    max-width: 1256px;
    flex-direction: row;
    justify-content: space-between;
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
`;

export const HeaderContainer = styled.header`
  height: 80px;
  margin: 0px auto;
  padding: 0 30px;
  background-color: white;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(219, 219, 219);
  display: flex;
  div {
    width: 720px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    max-width: 1256px;
    flex-direction: row;
    justify-content: space-between;
  }
  nav {
    display: flex;
  }
  img {
    cursor: pointer;
    margin-right: 10px;
  }
`;

const ModalContainer = styled.div`
  transform: none;
  transition: transform 0.2s ease 0s;
  position: fixed;
  right: -170px;
  padding: 8px;
  top: 130px;
  transform: translate(-50%, -50%);
  max-height: 80%;
  width: 20rem;
  height: 100px;
  background: white;
  border-radius: 10px;
  text-align: center;
  border: 1px solid rgb(218, 221, 224);
  border-radius: 6px;
  box-shadow: rgb(63 71 77 / 20%) 0px 4px 10px 0px;
  visibility: visible;
`;

export default Header;
