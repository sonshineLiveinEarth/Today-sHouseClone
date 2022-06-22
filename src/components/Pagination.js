import React from "react";
import styled from "styled-components";
// 이미지
import ArrowLeft from "../image/ArrowLeft.png";
import ArrowRight from "../image/ArrowRight.png";

const Pagination = ({ total, limit, page, setPage }) => {
  // const numPages = Math.ceil(total / limit);
  console.log({ total, limit, page, setPage });
  const numPages = Math.ceil(total / limit);
  console.log(total, limit, page, numPages);

  return (
    <>
      <Nav>
        <NextBtn onClick={() => setPage(page - 1)} disabled={page === 1}>
          <ArrowL src={ArrowLeft} alt="아이콘" />
        </NextBtn>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
            </Button>
          ))}
        <NextBtn onClick={() => setPage(page + 1)} disabled={page === numPages}>
          <ArrowR src={ArrowRight} alt="아이콘" />
        </NextBtn>
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 40px 0px;
`;

const ArrowL = styled.img`
  width: 8px;
  margin: 4px 0px 0px -2px;
`;

const ArrowR = styled.img`
  width: 8px;
  margin: 4px 0px 0px 0px;
`;

const Button = styled.button`
  display: inline-block;
  margin: 0px;
  background: none;
  font-style: inherit;
  font-variant: inherit;
  font-stretch: inherit;
  font-family: inherit;
  font-size: 14px;
  line-height: 20px;
  height: 32px;
  border-radius: 4px;
  font-weight: 400;
  box-sizing: border-box;
  text-align: center;
  color: rgb(47, 52, 56);
  border: none;
  width: 32px;
  padding: 0px;
  vertical-align: middle;

  &:hover {
    background: #eee;
    cursor: pointer;
  }

  &[disabled] {
    display: inline-block;
    background: none rgb(247, 249, 250);
    font-style: inherit;
    font-variant: inherit;
    font-stretch: inherit;
    font-family: inherit;
    font-size: 14px;
    line-height: 20px;
    height: 32px;
    border-radius: 4px;
    font-weight: 400;
    box-sizing: border-box;
    text-align: center;
    color: rgb(194, 200, 204);
    border: 1px solid rgb(234, 237, 239);
    width: 32px;
    padding: 0px;
    vertical-align: middle;
  }

  &[aria-current] {
    display: inline-block;
    margin: 0px 4px;
    border: none;
    background: none rgb(53, 197, 240);
    font-style: inherit;
    font-variant: inherit;
    font-stretch: inherit;
    font-family: inherit;
    font-size: 14px;
    line-height: 20px;
    height: 32px;
    border-radius: 4px;
    font-weight: 400;
    box-sizing: border-box;
    text-align: center;
    color: rgb(255, 255, 255);
    width: 32px;
    padding: 0px;
    vertical-align: middle;
  }
`;

const NextBtn = styled.button`
  display: inline-block;
  margin: 0px;
  background: none;
  font-style: inherit;
  font-variant: inherit;
  font-stretch: inherit;
  font-family: inherit;
  font-size: 14px;
  line-height: 20px;
  height: 32px;
  border-radius: 4px;
  font-weight: 400;
  box-sizing: border-box;
  text-align: center;
  color: rgb(47, 52, 56);
  border: 1px solid rgb(194, 200, 204);
  width: 32px;
  padding: 0px;
  vertical-align: middle;
  margin-left: 4px;
  &:hover {
    background: #eee;
    cursor: pointer;
  }

  &[disabled] {
    display: inline-block;
    background: none rgb(247, 249, 250);
    font-style: inherit;
    font-variant: inherit;
    font-stretch: inherit;
    font-family: inherit;
    font-size: 14px;
    line-height: 20px;
    height: 32px;
    border-radius: 4px;
    font-weight: 400;
    box-sizing: border-box;
    text-align: center;
    color: rgb(194, 200, 204);
    border: 1px solid rgb(234, 237, 239);
    width: 32px;
    padding: 0px;
    vertical-align: middle;
  }
`;

export default Pagination;
