import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { loginDB } from "../redux/modules/users";
import { Dispatch } from "react";
import { SignupDB, NicknameDB } from "../redux/modules/users";
import { useSelector } from "react-redux";

// import "../App.css";

//이미지
import Logo from "../image/Logo.png";
import TextLogo from "../image/TextLogo.png";
import { useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const isLogin = localStorage.getItem("jwtToken");
  // if (isLogin) navigate("/");

  const _loginUser = (userEmail, userPassword) => {
    console.log("로그인 시도!");
    if (userEmail === "" || userPassword === "") {
      window.alert("빈칸을 다 채워주세요.");
      return;
    }
    console.log(userEmail, userPassword);
    dispatch(loginDB(userEmail, userPassword));

    if (isLogin) navigate("/");
  };

  return (
    <Background>
      <ImgWrap>
        <LogoImg src={Logo} />
        <TLogoImg src={TextLogo} />
      </ImgWrap>

      <Wrap>
        <InputEM
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
          placeholder="이메일"
        />
        <InputPW
          onChange={(e) => {
            setUserPassword(e.target.value);
          }}
          placeholder="비밀번호"
          type="password"
          autocomplete="off"
        />
        <LoginBtn
          onClick={() => {
            _loginUser(userEmail, userPassword);
          }}
        >
          로그인
        </LoginBtn>
      </Wrap>
      <SignunBtn
        onClick={() => {
          navigate("/signup");
        }}
      >
        회원가입
      </SignunBtn>
    </Background>
  );
};

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fafafa;
  font-family: "Noto Sans KR", "Apple SD Gothic Neo", "맑은 고딕",
    "Malgun Gothic", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImgWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LogoImg = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 30px;
`;

const TLogoImg = styled.img`
  width: auto;
  height: 30px;
  margin-bottom: 30px;
  margin-left: 10px;
`;
const Wrap = styled.div``;

const InputEM = styled.input`
  width: 270px;
  position: relative;
  display: block;
  border-radius: 4px 4px 0 0;
  margin-top: -1px;
  font-size: 15px;
  line-height: 21px;
  resize: none;
  padding: 13px 15px 14px;
  border-width: 1px;
  border-style: solid;
  box-sizing: border-box;
  border-color: rgb(219, 219, 219);
  &::placeholder {
    color: rgb(219, 219, 219);
  }
  &:focus {
    border: 2px solid #9fe9ff;
    outline: none;
  }
  &:hover {
    background-color: rgb(250, 250, 250);
  }
`;

const InputPW = styled.input`
  width: 270px;
  position: relative;
  display: block;
  border-radius: 0 0 4px 4px;
  margin-top: -1px;
  font-size: 15px;
  line-height: 21px;
  resize: none;
  padding: 13px 15px 14px;
  border-width: 1px;
  border-style: solid;
  box-sizing: border-box;
  border-color: rgb(219, 219, 219);
  font-size: 16px;
  &::placeholder {
    color: rgb(219, 219, 219);
  }
  &:focus {
    border: 2px solid #9fe9ff;
    outline: none;
  }
  &:hover {
    background-color: rgb(250, 250, 250);
  }
`;

const LoginBtn = styled.button`
  width: 100%;
  padding: 15px 10px;
  line-height: 20px;
  font-size: 17px;
  min-height: 50px;
  margin: 20px 0px;
  background-color: #35c5f0;
  border-color: #35c5f0;
  color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #2badd3;
  }
`;

const SignunBtn = styled.span`
  line-height: 10px;
  font-size: 14px;
  min-height: 50px;
  background-color: transparent;
  border-color: #35c5f0;
  color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  color: #424242;
  opacity: 0.8;
  text-align: center;
  cursor: pointer;
`;

export default Login;
