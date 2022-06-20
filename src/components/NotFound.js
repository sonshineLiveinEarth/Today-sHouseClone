import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//이미지
import TextLogo from "../image/TextLogo.png";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header>
        <Logo
          onClick={() => {
            navigate("/");
          }}
          src={TextLogo}
          alt="오늘의 집 로고"
        />
      </Header>
      <Info>
        <Wrap>
          <Err>404</Err>
          <br />
          <ErrMessage>요청하신 페이지를 찾을 수 없습니다!</ErrMessage>
          <ErrMessageSub>
            방문하시려는 페이지의 주소가 잘못 입력되었거나, 삭제되어 사용하실 수
            없습니다.
          </ErrMessageSub>
          <br />
          <ErrMessageSub>
            입력하신 주소가 정확한지 다시 한번 확인해 주세요.
          </ErrMessageSub>
        </Wrap>
      </Info>
      ;
    </>
  );
};

const Header = styled.div`
  width: 100%;
  height: 40px;
  padding: 15px 0;
  background-color: white;
  border-bottom: 1px solid #eeeeee;
  position: relative;
`;

const Logo = styled.img`
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 56px;
`;

const Info = styled.div`
  height: 100vh;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fafafa;
`;

const Wrap = styled.div`
  padding: 40px;
  max-width: 800px;
  width: 80%;
  background-color: white;
  border-radius: 25px;
  text-align: center;
  box-sizing: border-box;
  margin-top: 50px;
`;

const Err = styled.span`
  font-size: 100px;
  font-weight: bold;
  color: #35c5f0;
`;

const ErrMessage = styled.span`
  font-size: 24px;
  display: block;
  color: #424242;
  font-weight: 400;
  margin: 30px 0px;
`;

const ErrMessageSub = styled.span`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;

export default NotFound;
