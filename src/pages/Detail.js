import React, { useState } from "react";
import styled from "styled-components";

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getPostDB } from "../redux/modules/post";

// js
import { deletePostDB } from "../redux/modules/post";
import Header from "../components/Header";
import Comment from "../components/Comment";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const Detail = () => {
  const post = useSelector((state) => state.post.postOne);
  // const post = post_list?.post?.data?.body;
  console.log(post);
  // console.log(post_list);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  // 수정&삭제 모달창 띄우기
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    if (!showModal) setShowModal(true);
    else setShowModal(false);
  };

  const onClickEdit = () => {
    navigate("/contents/edit/" + params.id);
  };

  const onClickDelete = () => {
    const yes = window.confirm("정말로 삭제하시겠습니까?");
    if (yes) {
      dispatch(deletePostDB(params.id));
      navigate("/");
    }
  };

  React.useEffect(() => {
    dispatch(getPostDB(params.id));
  }, []);

  return (
    <>
      <Header />
      <Background>
        <Wrap>
          <TopWrap
            onClick={() => {
              openModal();
            }}
          >
            <CategoryWrap>
              {post !== undefined && post.size && (
                <>
                  <Category>{post.size}</Category> <HrS />
                </>
              )}
              {post !== undefined && post.style && (
                <>
                  <Category>{post.style}</Category> <HrS />
                </>
              )}
              {post !== undefined && post.type && (
                <Category>{post.type}</Category>
              )}
            </CategoryWrap>

            <SettingWrap>
              <Setting />
              <Setting />
              <Setting />
            </SettingWrap>
          </TopWrap>
          {showModal && (
            <ModalContainer showModal={showModal}>
              <WriteTitle onClick={onClickEdit}>수정하기</WriteTitle>
              <Delete onClick={onClickDelete}>삭제하기</Delete>
            </ModalContainer>
          )}

          <PostImage url={post?.imageUrl} showModal={showModal} />
          <PostContent>{post?.content}</PostContent>
          <CoWrap>
            <CoWrap>
              <Label>조회</Label>
              <ViewNum>{post?.viewCnt}</ViewNum>
            </CoWrap>
            <CoWrap>
              <Label>댓글</Label>
              <CommentNum>{post?.commentCnt}</CommentNum>
            </CoWrap>
          </CoWrap>
        </Wrap>
        <Comment />
        <Banner
          commentCnt={post?.commentCnt}
          bookmarkCnt={post?.bookmarkCnt}
          heartCnt={post?.bookmarkCnt}
        />
      </Background>
      {/* <Footer
        commentCnt={post?.commentCnt}
        bookmarkCnt={post?.bookmarkCnt}
        heartCnt={post?.bookmarkCnt}
      /> */}
    </>
  );
};

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  font-family: "Noto Sans KR", "Apple SD Gothic Neo", "맑은 고딕",
    "Malgun Gothic", sans-serif;
  display: grid;
  grid-template-columns: 1fr 720px 1fr;
  justify-content: center;
  flex-flow: wrap;
  grid-gap: 0px;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  } ;
`;

const Wrap = styled.div`
  padding: 100px 0px 0px 0px;
  height: auto;
  font-family: "Noto Sans KR", "Apple SD Gothic Neo", "맑은 고딕",
    "Malgun Gothic", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  grid-column: 2 / 3;
  grid-row: 1 / 2;

  @media only screen and (max-width: 768px) {
    grid-column: 1 / 2;
    padding: 100px 16px 0px 16px;
  }
`;

const TopWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const CategoryWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Category = styled.span`
  font-size: 14px;
  line-height: 32px;
  color: #bbb;
  align-self: flex-start;
  margin-right: 4px;
`;

const HrS = styled.hr`
  width: 0px;
  height: 14px;
  border: 1px solid #eee;
  margin: 2px 6px 0px 4px;
`;

const SettingWrap = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Setting = styled.div`
  width: 4px;
  height: 4px;
  background-color: #424242;
  border: none;
  border-radius: 100%;
  margin-right: 4px;
`;

const ModalContainer = styled.div`
  z-index: 5;
  position: absolute;
  transform: none;
  transition: transform 0.2s ease 0s;
  color: #424242;
  position: absolute;
  padding: 0px 8px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(218, 221, 224);
  border-radius: 6px;
  box-shadow: rgb(63 71 77 / 20%) 0px 4px 10px 0px;
  width: 120px;
  transform: none;
  transition: transform 0.2s ease 0s;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-left: 32%;
  cursor: pointer;
  @media only screen and (max-width: 1700px) {
    margin-left: 36%;
  }
  @media only screen and (max-width: 1600px) {
    margin-left: 40%;
  }
  @media only screen and (max-width: 1500px) {
    right: 330px;
  }
  @media only screen and (max-width: 1400px) {
    right: 280px;
  }
  @media only screen and (max-width: 1300px) {
    right: 240px;
  }
  @media only screen and (max-width: 1200px) {
    right: 200px;
  }
  @media only screen and (max-width: 1100px) {
    right: 140px;
  }
  @media only screen and (max-width: 1000px) {
    right: 100px;
  }
  @media only screen and (max-width: 900px) {
    right: 60px;
  }
  @media only screen and (max-width: 800px) {
    right: 10px;
  }
  /* 팝업이 열릴때 스르륵 열리는 효과 */
  animation: modal-bg-show 0.3s;
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const WriteTitle = styled.span`
  padding: 16px;
  height: 20px;
  width: 104px;
  color: rgb(47, 52, 56);
  line-height: 20px;
  transition: background-color 0.2s ease-in-out 0s;
  margin: 0px -8px;
  cursor: pointer;
  &:hover {
    background-color: #f4f4f4;
  }
`;

const Delete = styled.span`
  padding: 16px;
  height: 20px;
  width: 104px;
  color: rgb(255, 119, 119);
  line-height: 20px;
  transition: background-color 0.2s ease-in-out 0s;
  margin: 0px -8px;
  cursor: pointer;
  &:hover {
    background-color: #f4f4f4;
  }
`;

// const ImgWrap = styled.div`
//   position: relative;
//   background-color: rgb(247, 249, 250);
//   padding-bottom: 177.778%;
// `;

// const PostImage = styled.div`
//   max-width: 600px;
//   width: 100%;
//   position: absolute;
//   background-color: #ddd;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `;

const PostImage = styled.div`
  max-width: 720px;
  width: 100%;
  padding-bottom: 100%;
  background-image: url(${(props) => props.url});
  /* background-image: url(https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164422528068537909.jpeg?gif=1&w=1080); */
  background-position: center 30%;
  background-size: cover;
  position: ${(props) => (props.showModal ? "relative" : "static")};
  @media only screen and (max-width: 768px) {
    padding: 16px;
    padding-bottom: 100%;
  }
`;

const PostContent = styled.span`
  margin-top: 40px;
  padding: 0px;
  margin: 24px 0px;
  font-size: 16px;
  line-height: 24px;
  color: rgb(47, 52, 56);
  align-self: flex-start;
`;

const CoWrap = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: left;
`;

const Label = styled.span`
  font-size: 14px;
  line-height: 32px;
  color: #bbb;
  align-self: flex-start;
  margin-bottom: 10px;
`;

const ViewNum = styled.span`
  font-size: 14px;
  line-height: 32px;
  color: #424242;
  align-self: flex-start;
  margin-bottom: 10px;
  margin-left: 4px;
  margin-right: 10px;
`;

const CommentNum = styled.span`
  font-size: 14px;
  line-height: 32px;
  color: #424242;
  align-self: flex-start;
  margin-bottom: 10px;
  margin-left: 4px;
`;

export default Detail;
