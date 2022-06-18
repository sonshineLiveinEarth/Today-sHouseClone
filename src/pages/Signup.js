import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SignupDB } from "../redux/modules/users";

//이미지
import Logo from "../image/Logo.png";
import TextLogo from "../image/TextLogo.png";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 회원정보
  const [email, setEmail] = useState("");
  const [userMail, setUserMail] = useState("");
  const [password, setUserPassword] = useState("");
  const [userPasswordRe, setUserPasswordRe] = useState("");
  const [userNickname, setUserNickname] = useState("");

  const username = email + "@" + userMail;
  // 이메일 에러
  const [userIdError, setUserIdError] = useState(false);

  const onChangeUserId = (e) => {
    const userIdRegex = /^[A-Za-z0-9+]{5,}$/;
    if (!e.target.value || userIdRegex.test(e.target.value))
      setUserIdError(false);
    else setUserIdError(true);
    setEmail(e.target.value);
  };

  // 비밀번호 에러
  const [passwordErr, setUserPasswordErr] = useState(false);

  const onChangePassword = (e) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!e.target.value || passwordRegex.test(e.target.value))
      setUserPasswordErr(false);
    else setUserPasswordErr(true);

    if (!passwordErr || e.target.value === passwordErr) setPasswordReErr(false);
    else setPasswordReErr(true);
    setUserPassword(e.target.value);
  };

  // 비밀번호 확인에러
  const [passwordReErr, setPasswordReErr] = useState(false);

  const onChangePasswordRe = (e) => {
    if (e.target.value === password) setPasswordReErr(false);
    else setPasswordReErr(true);
    setUserPasswordRe(e.target.value);
  };

  const AddUser = (username, password, userNickname) => {
    dispatch(SignupDB(username, password, userNickname));
    // navigate("/");
  };

  return (
    <>
      <Background>
        <Wrap>
          <ImgWrap
            onClick={() => {
              navigate("/");
            }}
          >
            <LogoImg src={Logo} />
            <TLogoImg src={TextLogo} />
          </ImgWrap>
          <Title>회원가입</Title>
          <EWrap>
            <LabelE userIdError={userIdError}>이메일</LabelE>
            <EmailWrap>
              <InputE
                userIdError={userIdError}
                placeholder="이메일"
                onChange={(e) => {
                  onChangeUserId(e);
                }}
              />
              <Gol> @ </Gol>
              <SelectEM
                userIdError={userIdError}
                onChange={(e) => setUserMail(e.target.value)}
              >
                <option value="">선택해주세요</option>
                <option value="naver.com">naver.com</option>
                <option value="hanmail.net">hanmail.net</option>
                <option value="daum.net">daum.net</option>
                <option value="gmail.com">gmail.com</option>
                <option value="nate.com">nate.com</option>
                <option value="hotmail.com">hotmail.com</option>
                <option value="outlook.com">outlook.com</option>
                <option value="icloud.com">icloud.com</option>
                <option value="직접입력">직접입력</option>
              </SelectEM>
            </EmailWrap>

            {userIdError && (
              <EmailErr>이메일 형식이 올바르지 않습니다.</EmailErr>
            )}
          </EWrap>

          <PWWrap>
            <LabelP passwordErr={passwordErr}>비밀번호</LabelP>
            <Info>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</Info>
            <InputPw
              passwordErr={passwordErr}
              onChange={(e) => {
                onChangePassword(e);
              }}
              placeholder="비밀번호"
              type="password"
            />
            {passwordErr && (
              <PasswordErr>
                비밀번호는 영문, 숫자를 포함하여 8자 이상이어야 합니다.
              </PasswordErr>
            )}
          </PWWrap>
          <PWWrap>
            <Label>비밀번호 확인</Label>
            <InputPwRe
              passwordReErr={passwordReErr}
              onChange={(e) => {
                onChangePasswordRe(e);
              }}
              placeholder="비밀번호 확인"
              type="password"
            />
            {!passwordErr && passwordReErr && (
              <PasswordErr>비밀번호가 일치하지 않습니다.</PasswordErr>
            )}
          </PWWrap>
          <PWWrap>
            <Label>닉네임</Label>
            <Info>다른 유저와 겹치지 않는 별명을 입력해주세요. (2~15자)</Info>
            <Input
              onChange={(e) => {
                setUserNickname(e.target.value);
              }}
              placeholder="별명 (2~15자)"
            />
          </PWWrap>
          <SignUpBtn
            onClick={() => {
              // navigate("/");
              AddUser(username, password, userNickname);
            }}
          >
            회원가입하기
          </SignUpBtn>
          <LogWrap>
            <Info>이미 아이디가 있으신가요?</Info>
            <LoginBtn
              onClick={() => {
                navigate("/login");
              }}
            >
              로그인
            </LoginBtn>
          </LogWrap>
        </Wrap>
      </Background>
    </>
  );
};

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  font-family: "Noto Sans KR", "Apple SD Gothic Neo", "맑은 고딕",
    "Malgun Gothic", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
`;

const ImgWrap = styled.div`
  width: 88;
  height: 31;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  align-self: flex-start;
  cursor: pointer;
`;

const LogoImg = styled.img`
  width: 30px;
  height: 30px;
  margin-bottom: 30px;
`;

const TLogoImg = styled.img`
  width: auto;
  height: 20px;
  margin-bottom: 30px;
  margin-left: 10px;
`;

const Wrap = styled.div`
  width: 360px;
  padding: 60px 0px;
  height: 100vh;
  font-family: "Noto Sans KR", "Apple SD Gothic Neo", "맑은 고딕",
    "Malgun Gothic", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  overflow: hidden;
  @media only screen and (max-width: 760px) {
    width: 90%;
  }
`;

const EWrap = styled.div`
  margin-left: 10px;
  width: 100%;
  margin-bottom: 20px;
  @media only screen and (max-width: 760px) {
    width: 96%;
  }
`;

const EmailWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  margin-left: -10px;
  @media only screen and (max-width: 760px) {
    width: 100%;
  }
`;

const EmailErr = styled.span`
  display: block;
  margin: 10px 0px 20px 0px;
  font-size: 13px;
  color: rgb(255, 119, 119);
  line-height: 21px;
  word-break: keep-all;
  @media only screen and (max-width: 760px) {
    margin-left: -12px;
  }
`;

const PasswordErr = styled.span`
  display: block;
  margin: 10px 0px 0px 0px;
  font-size: 13px;
  color: rgb(255, 119, 119);
  line-height: 21px;
  word-break: keep-all;
`;

const PWWrap = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: rgb(41, 41, 41);
  align-self: flex-start;
`;

const Label = styled.label`
  display: block;
  margin: 0px 0px 12px;
  font-size: 15px;
  font-weight: bold;
  color: rgb(41, 41, 41);
  line-height: 21px;
  word-break: keep-all;
  align-self: flex-start;
`;

const LabelE = styled.label`
  display: block;
  margin: 0px 0px 12px;
  font-size: 15px;
  font-weight: bold;

  color: rgb(
    ${(props) => (props.userIdError ? "255, 119, 119" : "41, 41, 41")}
  );
  line-height: 21px;
  word-break: keep-all;
  align-self: flex-start;
  @media only screen and (max-width: 760px) {
    margin-left: -12px;
  }
`;

const LabelP = styled.label`
  display: block;
  margin: 0px 0px 12px;
  font-size: 15px;
  font-weight: bold;

  color: rgb(
    ${(props) => (props.passwordErr ? "255, 119, 119" : "41, 41, 41")}
  );
  line-height: 21px;
  word-break: keep-all;
  align-self: flex-start;
`;

const Info = styled.p`
  margin-bottom: 10px;
  font-size: 13px;
  color: #757575;
  align-self: flex-start;
`;

const InputE = styled.input`
  width: 37%;
  position: relative;
  display: block;
  border-radius: 4px;
  margin-top: -1px;
  font-size: 15px;
  line-height: 21px;
  resize: none;
  padding: 8px 15px 9px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(
    ${(props) => (props.userIdError ? "255, 119, 119" : "219, 219, 219")}
  );
  margin-left: -2px;
  &::placeholder {
    color: rgb(219, 219, 219);
  }
  &:focus {
    border: 2px solid
      rgb(${(props) => (props.userIdError ? "255, 119, 119" : "159, 233, 255")});
    outline: none;
  }
  @media only screen and (max-width: 760px) {
    width: 44%;
    margin-left: -8px;
  }
`;

const InputPw = styled.input`
  width: 350px;
  margin: 0;
  padding: 8px 15px 9px;
  position: relative;
  display: block;
  border-radius: 4px;
  margin-top: -1px;
  font-size: 15px;
  line-height: 21px;
  resize: none;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(
    ${(props) => (props.passwordErr ? "255, 119, 119" : "219, 219, 219")}
  );
  box-sizing: border-box;
  &::placeholder {
    color: rgb(219, 219, 219);
  }
  @media only screen and (max-width: 760px) {
    width: 95%;
  }
  &:focus {
    border: 2px solid
      rgb(${(props) => (props.passwordErr ? "255, 119, 119" : "159, 233, 255")});
    outline: none;
  }
`;

const InputPwRe = styled.input`
  width: 350px;
  margin: 0;
  padding: 8px 15px 9px;
  position: relative;
  display: block;
  border-radius: 4px;
  margin-top: -1px;
  font-size: 15px;
  line-height: 21px;
  resize: none;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(
    ${(props) => (props.passwordReErr ? "255, 119, 119" : "219, 219, 219")}
  );
  box-sizing: border-box;
  &::placeholder {
    color: rgb(219, 219, 219);
  }
  @media only screen and (max-width: 760px) {
    width: 95%;
  }
  &:focus {
    border: 2px solid
      rgb(
        ${(props) => (props.passwordReErr ? "255, 119, 119" : "159, 233, 255")}
      );
    outline: none;
  }
`;

const Input = styled.input`
  width: 350px;
  margin: 0;
  padding: 8px 15px 9px;
  position: relative;
  display: block;
  border-radius: 4px;
  margin-top: -1px;
  font-size: 15px;
  line-height: 21px;
  resize: none;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(219, 219, 219);
  box-sizing: border-box;
  &::placeholder {
    color: rgb(219, 219, 219);
  }
  @media only screen and (max-width: 760px) {
    width: 95%;
  }
  &:focus {
    border: 2px solid #9fe9ff;
    outline: none;
  }
`;

const Gol = styled.span`
  margin: 0px 4px;
  font-size: 15px;
  color: #dbdbdb;
`;

const SelectEM = styled.select`
  width: 43%;
  position: relative;
  display: block;
  border-radius: 4px;
  margin-top: -1px;
  font-size: 15px;
  line-height: 21px;
  resize: none;
  padding: 8px 15px 9px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(
    ${(props) => (props.userIdError ? "255, 119, 119" : "219, 219, 219")}
  );
  &::placeholder {
    color: #424242;
  }
`;

const LoginBtn = styled.span`
  line-height: 10px;
  font-size: 14px;
  background-color: transparent;
  border-color: #35c5f0;
  color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  color: #424242;
  opacity: 0.8;
  text-align: center;
  cursor: pointer;
  margin-left: 6px;
  font-weight: bold;
  text-decoration: underline;
  padding-top: 1px;
`;

const SignUpBtn = styled.button`
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
  @media only screen and (max-width: 760px) {
    width: 95%;
    margin-left: -14px;
  }
  &:hover {
    background-color: #2badd3;
  }
`;

const LogWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export default Signup;
