import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserPostsDB, getUserInfoDB } from "../redux/modules/post";

// 이미지
import Profile from "../image/Profile.png";
import BookMark from "../image/Bookmark.png";
import Heart from "../image/HeartB.png";
import coupon from "../image/coupon.png";
import Comment from "../image/CommentIcon.png";

const MyCollections = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const post = useSelector((state) => state.post.userPosts);
  const userInfo = useSelector((state) => state.post.userInfo);
  console.log(post);

  const isLogin = localStorage.getItem("jwtToken");
  // const Email = localStorage.getItem("username");
  // console.log(isLogin);
  // console.log(Email);

  const loginCheck = () => {
    if (!isLogin) {
      return navigate("/login");
    }
  };

  const Email = localStorage.getItem("nickname");
  console.log(Email);

  React.useEffect(() => {
    dispatch(getUserPostsDB());
    dispatch(getUserInfoDB());
    loginCheck();
  }, [dispatch]);

  return (
    <React.Fragment>
      <Header />
      <Wrap>
        <ProfileWrap>
          <ProfileImage src={Profile} alt="프로필 이미지" />
          <Nickname>{userInfo.userNickname}</Nickname>
          <ProfileBtn
            onClick={() => {
              navigate("/users/edit");
            }}
          >
            설정
          </ProfileBtn>
          <BottomWrap>
            <MiniDiv>
              <Book src={BookMark} alt="스크랩북" />
              <Span>스크랩북</Span>
              <Num>{userInfo.bookmarkCnt}</Num>
            </MiniDiv>
            <MiniDiv>
              <HeartIcon src={Heart} alt="좋아요" />
              <Span>좋아요</Span>
              <Num>{userInfo.heartCnt}</Num>
            </MiniDiv>
            <MiniDiv>
              <CouponIcon src={coupon} alt="쿠폰" />
              <Span>내 쿠폰</Span>
              <Num>0</Num>
            </MiniDiv>
          </BottomWrap>
        </ProfileWrap>
        <Div />

        <PhotoWrap>
          {post.map((list, index) => {
            return (
              <>
                <PhotoBox>
                  <PhotoTitle>
                    <Propfile src={Profile} alt="프로필 사진" />
                    <MiniNickname>{list.userNickname}</MiniNickname>
                  </PhotoTitle>
                  <Photo
                    onClick={() => {
                      navigate(`/detail/${list.id}`);
                    }}
                    key={index}
                    imageUrl={list.imageUrl}
                  />
                  <PhotoBottomWrap>
                    <IconBox>
                      <HeartIconMin src={Heart} alt="좋아요" />
                      <CNum> {list?.heartCnt > 1 ? list?.heartCnt : null}</CNum>
                    </IconBox>
                    <IconBox>
                      <BookIconMin src={BookMark} alt="북마크" />
                      <CNum>
                        {list?.bookmarkCnt > 1 ? list?.bookmarkCnt : null}
                      </CNum>
                    </IconBox>
                    <IconBox>
                      <CommentIconMin src={Comment} alt="댓글" />
                      <CNum>
                        {list?.commentCnt > 1 ? list?.commentCnt : null}
                      </CNum>
                    </IconBox>
                  </PhotoBottomWrap>
                  <CommentT> {list?.content ? list?.content : null}</CommentT>
                </PhotoBox>
              </>
            );
          })}
        </PhotoWrap>
      </Wrap>
    </React.Fragment>
  );
};

const Wrap = styled.div`
  max-width: 1256px;
  width: 90%;
  height: 600px;
  /* margin-left: 6px;
  margin-left: 8px; */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  margin: auto;
  padding-top: 150px;
  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 90%;
  }
`;

const ProfileWrap = styled.div`
  width: 195px;
  height: 376px;
  padding: 30px 25px 18px 25px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgb(218, 220, 224);
  box-shadow: rgb(63 71 77 / 6%) 0px 2px 4px 0px;
  @media only screen and (max-width: 1024px) {
    width: 95%;
    margin: 40px 0px;
  }
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
`;

const Nickname = styled.span`
  margin-top: 10px;
  font-size: 26px;
  color: rgb(41, 41, 41);
  font-weight: bold;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Div = styled.div`
  width: 8.33333%;
  padding-left: 10px;
  padding-right: 10px;
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

const PhotoWrap = styled.div`
  width: 66.6667%;
  height: 1000px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  /* margin: auto; */
  /* margin-bottom: 20px; */
  @media only screen and (max-width: 770px) {
    width: 30%;
    height: 1200px;

    flex-wrap: wrap;
  }
`;

const IconBox = styled.div`
  cursor: pointer;
`;

const PhotoBox = styled.div`
  display: flex;
  flex-direction: column;
  /* margin: 0px 0px 20px 0px; */
  flex-wrap: wrap;
  margin-bottom: 10px;
  margin-top: 8px;

  @media only screen and (max-width: 770px) {
    flex-wrap: wrap;
  }
`;

const ProfileBtn = styled.button`
  margin-right: 6px;
  font-weight: normal;
  font-size: 12px;
  color: rgb(41, 41, 41);
  background-color: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  padding: 7px 16px 7px 16px;
  margin-top: 12px;
  font-size: 14px;
  line-height: 19px;
  &:hover {
    background-color: #f2f2f2;
  }
`;

const BottomWrap = styled.div`
  border-top: 1px solid rgb(234, 235, 239);
  padding: 24px 0px 6px;
  font-size: 15px;
  color: #424242;
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const CommentT = styled.span`
  max-width: 260px;
  max-width: 200px;
  height: 40px;
  font-size: 14px;
  color: #424242;
  margin-top: 8px;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
`;

const MiniDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Book = styled.img`
  width: 26px;
  height: auto;
  opacity: 0.8;
`;

const HeartIcon = styled.img`
  width: 30px;
  height: auto;
  opacity: 0.8;
`;

const CouponIcon = styled.img`
  width: 32px;
  height: auto;
  margin: 2px 0px;
  opacity: 0.8;
`;

const CNum = styled.span`
  font-size: 12px;
  font-weight: 500;
  margin: 0px 0px 0px 6px;
  position: relative;
  top: -6px;
`;

const Span = styled.span`
  font-size: 14px;
  margin: 8px 0px 4px 0px;
`;

const Num = styled.span`
  font-weight: bold;
  font-size: 18px;
`;

const PhotoTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Propfile = styled.img`
  width: 36px;
  height: 36px;
`;

const MiniNickname = styled.span`
  color: #424242;
  font-weight: 500;
  font-size: 15px;
  margin-left: 10px;
  margin-bottom: 6px;
`;

const Photo = styled.div`
  /* max-width: 200px; */
  width: 88%;
  min-width: 200px;
  height: 240px;
  margin: 10px 20px 0px 0px;
  box-sizing: border-box;
  border-radius: 6px;
  background-color: #aaa;
  /* background-image: url(https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/165571880930102526.jpeg?gif=1&w=1440); */
  background-image: url(${(props) => props.imageUrl});
  background-position: center 30%;
  background-size: cover;
  overflow: hidden;
  display: inline-block;
  cursor: pointer;
  @media only screen and (max-width: 770px) {
    display: flex;
    flex-wrap: wrap;
    width: 25%;
    height: 200px;
    margin: 14px 14px 0px 0px;
  }
  &:hover {
    transform: scale(1.02);
  }
`;

const PhotoBottomWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 88%;
  min-width: 200px;
  height: auto;
  margin: 10px 16px 0px 0px;
  @media only screen and (max-width: 770px) {
    display: flex;
    flex-wrap: wrap;
    width: 25%;
    margin: 14px 14px 0px 0px;
  }
`;

const HeartIconMin = styled.img`
  width: 24px;
  height: auto;
`;

const BookIconMin = styled.img`
  width: 20px;
  height: auto;
`;

const CommentIconMin = styled.img`
  width: 22px;
  height: auto;
`;

export default MyCollections;
