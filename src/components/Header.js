import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { TextButton, BlueButton } from "../elements/Button";

const Header = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  return (
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
              <TextButton>회원가입</TextButton>
            </>
          )}

          <BlueButton onClick={() => navigate("/contents/new")}>
            글쓰기
          </BlueButton>
        </nav>
      </div>
    </HeaderContainer>
  );
};

export const HeaderContainer = styled.header`
  height: 80px;

  margin: 0px auto;
  padding: 0 30px;

  box-sizing: border-box;
  border-bottom: 1px solid rgb(219, 219, 219);
  display: flex;
  div {
    width: 100%;
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

export default Header;
