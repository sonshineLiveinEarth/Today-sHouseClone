import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainRank = ({ postObj, rank }) => {
  const navigate = useNavigate();
  return (
    <Wrap onClick={() => navigate("/detail/" + postObj.id)}>
      <ImageWrap>
        <Image src={postObj.imageUrl} />
      </ImageWrap>
      <ImageGradient />
      <Rank>
        <RankIcon src="/images/rank.png" />
        <RankNum>{rank + 1}</RankNum>
      </Rank>
      <Nickname>
        <img
          src="/images/Avatar.png"
          alt="profile"
          height="22"
          style={{ verticalAlign: "bottom" }}
        />
        <span>{postObj.userNickname}</span>
      </Nickname>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: relative;
  cursor: pointer;
`;

const ImageWrap = styled.div`
  border-radius: 6px;
  overflow: hidden;
  width: 100%;
  height: 0;
  position: relative;
  padding-bottom: 100%;
`;
const Image = styled.img`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
  transition: all 0.1s linear;
  &:hover {
    transform: scale(1.05);
  }
`;
const ImageGradient = styled.div`
  height: 80px;
  width: 100%;
  position: absolute;
  bottom: 0px;
  background: linear-gradient(to top, #0000006f, #0000006f 10%, transparent);
  border-radius: 0 0 6px 6px;
`;
const Rank = styled.div`
  position: absolute;
  top: 0;
  left: 10px;
`;
const RankIcon = styled.img`
  opacity: 0.8;
  height: 36px;
`;
const RankNum = styled.span`
  color: #fff;
  font-weight: bold;
  position: absolute;
  top: 5px;
  left: 10px;
`;
const Nickname = styled.div`
  position: absolute;
  height: 20px;
  left: 15px;
  bottom: 20px;
  color: #fff;
  font-size: 13px;
  font-weight: bold;
  transition: all 0.2s;
  cursor: pointer;
  span {
    margin-left: 7px;
  }
`;
export default MainRank;
