import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
// 이미지
import Profile from "../image/ProfileNemo.png";

const ProfileModifi = () => {
  return (
    <>
      <Header />
      <Wrap>
        <TitleWrap>
          <Title>회원정보수정</Title>
          <EBoxWrap>
            <LabelWrap>
              <Label>이메일</Label>
              <Labelsub>*필수항목</Labelsub>
            </LabelWrap>
            <EWrap>
              <EmailWrap>
                <InputE placeholder="이메일" />
                <Gol> @ </Gol>
                <SelectEM>
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
              <EmailErr>
                이메일을 변경하시려면 운영자에게 이메일을 보내주세요.
              </EmailErr>
            </EWrap>
          </EBoxWrap>
        </TitleWrap>

        <TitleWrap>
          <EBoxWrap>
            <LabelWrap>
              <Label>별명</Label>
              <Labelsub>*필수항목</Labelsub>
            </LabelWrap>
            <EWrap>
              <EmailWrap>
                <Input placeholder="별명" />
              </EmailWrap>
            </EWrap>
          </EBoxWrap>
        </TitleWrap>

        <TitleWrap>
          <EBoxWrap>
            <LabelWrap>
              <Label>홈페이지</Label>
            </LabelWrap>
            <EWrap>
              <EmailWrap>
                <Input placeholder="http://ohou.se" />
              </EmailWrap>
            </EWrap>
          </EBoxWrap>
        </TitleWrap>

        <TitleWrap>
          <EBoxWrap>
            <LabelWrap>
              <Label>성별</Label>
            </LabelWrap>
            <EWrap>
              <RadioWrap>
                <RInput type="radio" name="gender" value="남성" />
                <Lab>남성</Lab>
                <RInput type="radio" name="gender" value="여성" />
                <Lab>여성</Lab>
              </RadioWrap>
            </EWrap>
          </EBoxWrap>
        </TitleWrap>

        <TitleWrap>
          <EBoxWrap>
            <LabelWrap>
              <Label>생년월일</Label>
            </LabelWrap>
            <EWrap>
              <EmailWrap>
                <Input placeholder="YYYY-MM-DD" />
              </EmailWrap>
            </EWrap>
          </EBoxWrap>
        </TitleWrap>

        <TitleWrap>
          <EBoxWrap>
            <LabelWrap>
              <Label>프로필 이미지</Label>
            </LabelWrap>
            <EWrap>
              <EmailWrap>
                <ProfileImage src={Profile} alt="프로필 사진" />
                <DeleteBtn>삭제</DeleteBtn>
              </EmailWrap>
            </EWrap>
          </EBoxWrap>
        </TitleWrap>

        <TitleWrap>
          <EBoxWrap>
            <LabelWrap>
              <Label>한줄 소개</Label>
            </LabelWrap>
            <EWrap>
              <EmailWrap>
                <Input />
              </EmailWrap>
            </EWrap>
          </EBoxWrap>
        </TitleWrap>
        <DoneBtn>회원정보 수정</DoneBtn>
      </Wrap>
    </>
  );
};

const Wrap = styled.span`
  max-width: 1256px;
  width: 90%;
  margin: 120px auto 30px auto;
  box-shadow: 0px 1px 3px 0px rgb(0 0 0 / 20%);
  color: #292929;
  height: 934px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media only screen and (max-width: 760px) {
    width: 100%;
  }
`;

const TitleWrap = styled.div`
  max-width: 1256px;
  width: 90%;
  height: auto;
  margin: auto;
`;

const Title = styled.div`
  font-size: 24px;
  color: #000;
  font-weight: 700;
  margin-bottom: 60px;
  margin-top: 30px;
`;

const LabelWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Label = styled.span`
  margin-top: 4px;
  font-size: 14px;
  color: #757575;
  @media only screen and (max-width: 760px) {
    font-size: 12px;
  }
`;

const Labelsub = styled.span`
  margin-top: 4px;
  font-size: 10px;
  color: #757575;
`;

const EBoxWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  @media only screen and (max-width: 1000px) {
    justify-content: space-between;
  }
`;

const EWrap = styled.div`
  width: 500px;
  margin-bottom: 20px;
  @media only screen and (max-width: 1000px) {
    width: 500px;
  }
  @media only screen and (max-width: 760px) {
    /* width: 320px; */
    width: 80%;
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

const RadioWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */
  margin-bottom: 10px;
  margin-left: 60px;
  @media only screen and (max-width: 760px) {
    width: 100%;
    margin-left: -10px;
  }
`;

const EmailErr = styled.span`
  display: block;
  margin: 10px 0px 20px 10px;
  font-size: 13px;
  color: #9e9e9e;
  font-weight: 500;
  line-height: 21px;
  word-break: keep-all;
  @media only screen and (max-width: 760px) {
    margin-left: -12px;
  }
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

const Input = styled.input`
  width: 368px;
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
    width: 90%;
    margin-left: -8px;
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

const RInput = styled.input`
  margin-left: 10px;
`;

const Lab = styled.span`
  margin-left: 4px;
`;

const ProfileImage = styled.img`
  width: 198px;
  height: 198px;
  margin-left: -150px;
  position: relative;
  &:hover {
    opacity: 0.5;
  }
`;

const DeleteBtn = styled.button`
  width: 50px;
  height: 30px;
  margin-left: -160px;
  position: absolute;
  margin-left: -40px;
  margin-top: -140px;
  background-color: #35c5f0;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
`;

const DoneBtn = styled.button`
  margin: 50px 0;
  width: 268px;
  padding: 11px 10px;
  font-size: 17px;
  line-height: 26px;
  background-color: #35c5f0;
  border-color: #35c5f0;
  color: #fff;
  text-align: center;
  transition: color 0.1s, background-color 0.1s, border-color 0.1s;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  margin-left: 15%;
  @media only screen and (max-width: 760px) {
    width: 90%;
    margin: auto;
  }
`;

export default ProfileModifi;
