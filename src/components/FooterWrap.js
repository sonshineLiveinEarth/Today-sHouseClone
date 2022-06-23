import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Div>
      <Wrap>
        <TitleWrap>
          <Center>고객센터</Center>
          <Number>1670-0876</Number>
          <Info>평일 09:00 ~ 18:00 (주말 & 공휴일 제외)</Info>

          <Info2>
            브랜드 스토리 &nbsp;&nbsp; 회사소개 &nbsp;&nbsp;
            채용정보&nbsp;&nbsp;이용약관&nbsp;&nbsp;개인정보처리방침&nbsp;&nbsp;공지사항&nbsp;&nbsp;고객센터&nbsp;&nbsp;고객의
            소리 &nbsp;&nbsp;전문가 등록&nbsp;&nbsp;사업자
            구매회원&nbsp;&nbsp;제휴/광고 문의&nbsp;&nbsp;입점신청
            문의&nbsp;&nbsp;안전거래센터
          </Info2>
          <Info3>
            상호명(주)버킷플레이스이메일(고객문의) cs@bucketplace.net (제휴문의)
            contact@bucketplace.net대표이사이승재사업자등록번호119-86-91245통신판매업신고번호제2018-서울서초-0580호
            사업자정보확인
          </Info3>
          <Info3>
            주소서울 서초구 서초대로74길 4 삼성생명서초타워 25, 27층우리은행
            채무지급보증안내(주)버킷플레이스는 고객님이 현금결제한 금액에 대해
            우리은행과 채무지급보증 계약을 체결하여 안전거래를 보장하고
            있습니다. 서비스가입사실 확인
          </Info3>
          <Info3>
            주)버킷플레이스는 통신판매중개자로 거래 당사자가 아니므로, 판매자가
            등록한 상품정보 및 거래 등에 대해 책임을 지지 않습니다
          </Info3>
          <Info3>
            단, ㈜버킷플레이스가 판매자로 등록 판매한 상품은 판매자로서 책임을
            부담합니다
          </Info3>
        </TitleWrap>
      </Wrap>
    </Div>
  );
};

const Div = styled.div`
  background-color: #fafafa;
  width: 100%;
`;

const Wrap = styled.div`
  height: 400px;
  padding: 30px 60px 40px;
  box-sizing: border-box;
  display: block;
  margin: 50px auto auto auto;
  max-width: 1256px;
  font-size: 15px;
  color: #424242;
  z-index: 100;
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Center = styled.span`
  font-weight: bold;
  font-size: 13px;
`;

const Number = styled.span`
  font-weight: bold;
  font-size: 36px;
`;

const Info = styled.span`
  font-size: 13px;
  color: #757575;
  margin-top: 4px;
  margin-bottom: 10px;
`;

const Info2 = styled.span`
  font-size: 10px;
  font-weight: 500;
  color: #424242;
  cursor: pointer;
  margin: 20px 0px;
`;

const Info3 = styled.span`
  font-size: 10px;
  color: #757575;
  margin-top: 4px;
  margin-bottom: 10px;
`;

export default Footer;
