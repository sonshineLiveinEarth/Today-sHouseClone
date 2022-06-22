import React, { useState } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  getCommentListDB,
  addCommentDB,
  deleteCommentDB,
  modifiCommentDB,
} from "../redux/modules/comment";

//이미지
import Profile from "../image/Profile.png";
import Heart from "../image/Heart.png";
import HeartFull from "../image/HeartFull.png";

//js
import Pagination from "./Pagination";

const Comment = () => {
  const navigate = useNavigate();
  // 페이지네이션
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const offset = (page - 1) * limit;

  const comment_list = useSelector((state) => state.comment.commentList);
  console.log(comment_list);

  const dispatch = useDispatch();
  const params = useParams();
  console.log(params.id);
  const commentText = React.useRef("");

  const isLogin = localStorage.getItem("jwtToken");

  const loginCheck = () => {
    if (!isLogin) {
      return navigate("/login");
    }
  };

  React.useEffect(() => {
    dispatch(getCommentListDB(params.id));
    loginCheck();
  }, [dispatch]);

  // 댓글 추가
  const addComment = () => {
    if (commentText.current.value === "") {
      window.alert("댓글을 작성해주세요!");
    } else if (!isLogin) {
      window.alert("로그인 후 댓글을 남기실 수 있습니다.");
    } else {
      // api에 데이터 추가하기!
      dispatch(
        addCommentDB({
          postId: params.id,
          comment: commentText.current.value,
        })
      );
      commentText.current.value = "";
    }
  };
  console.log(commentText.current.value);

  const LikeComment = async (id) => {
    await dispatch(modifiCommentDB(id));
  };

  // const LikeIconChange = () => {
  //   comment_list.map((comment) => {
  //     if (comment.commentHeartCheck) setLikeCo(true);
  //     else {
  //       return LikeCo;
  //     }
  //   });
  // };

  return (
    <React.Fragment>
      <Wrap id="1">
        <Hr />
        <CommentT>댓글</CommentT>
        <CommentNum>{comment_list?.length}</CommentNum>
        <InputWrap>
          <UserProfile src={Profile} alt="userProfile" />
          <CommentInput
            ref={commentText}
            placeholder="칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다 :)"
          />
          <CommentBtn
            onClick={() => {
              addComment();
            }}
            type="button"
            value="입력"
          />
        </InputWrap>
        {comment_list !== undefined
          ? comment_list.slice(offset, offset + limit).map((list, index) => {
              // 받아온 시간 데이터 가공
              console.log(list);
              const One = list?.createdAt?.toString();
              console.log(One);
              const Two = One.split("T");
              const Four = Two[1]?.split(".");

              const time = Number(Four[0].split(":")[0]);
              const realTime = time + 9;
              if (realTime >= 24) return realTime - 24;
              const minnsecond = Four[0].substring(2, 8);
              console.log(Four, typeof Four);
              console.log(time, typeof time);
              console.log(realTime, typeof realTime);

              const Three = Two[0] + " " + realTime + minnsecond;
              console.log(Three, typeof Three);

              // // 댓글 달린 시간표시
              const today = new Date();
              console.log(today);
              const timeValue = new Date(Three);

              const betweenTime = Math.floor(
                (today.getTime() - timeValue.getTime()) / 1000 / 60
              );
              const betweenTimeHour = Math.floor(betweenTime / 60);
              const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
              const betweenTimeYear = Math.floor(betweenTime / 60 / 24 / 365);
              console.log(list.commentHeartCheck);

              return (
                <>
                  <CommentBox key={list.id}>
                    <UserProfile src={Profile} alt="userProfile" />
                    <CommentInfo>
                      <Nickname>{list.userNickname}</Nickname>
                      <CommentText>{list.comment}</CommentText>
                      <Info>
                        <Time>
                          {betweenTime < 1 ? "방금 전" : null}
                          {betweenTime >= 1 && betweenTime < 60
                            ? `${betweenTime}분 전`
                            : null}
                          {betweenTime >= 60 && betweenTimeHour < 24
                            ? `${betweenTimeHour}시간 전`
                            : null}
                          {betweenTimeHour >= 24 && betweenTimeDay < 365
                            ? `${betweenTimeDay}일 전`
                            : null}
                          {betweenTimeDay >= 365
                            ? `${betweenTimeYear}년 전`
                            : null}
                        </Time>
                        <Point />
                        {list.commentHeartCheck ? (
                          <HeartIcon
                            onClick={() => {
                              LikeComment(list.id);
                            }}
                            src={HeartFull}
                            alt="좋아요아이콘"
                          />
                        ) : (
                          <HeartIcon
                            onClick={() => {
                              LikeComment(list.id);
                            }}
                            src={Heart}
                            alt="좋아요아이콘"
                          />
                        )}

                        <Like
                          onClick={() => {
                            LikeComment(list.id);
                          }}
                        >
                          좋아요
                        </Like>
                        {/* <Point />
                        <Re>답글 달기</Re> */}
                        <Point />
                        <Re
                          onClick={() => {
                            const result = window.confirm(
                              "댓글을 삭제하시겠습니까? 삭제한 댓글은 되돌릴 수 없습니다."
                            );
                            if (result) {
                              dispatch(deleteCommentDB(list.id));
                            }
                          }}
                        >
                          삭제
                        </Re>
                      </Info>
                    </CommentInfo>
                  </CommentBox>
                </>
              );
            })
          : null}
        <Pagination
          page={page}
          setPage={setPage}
          total={comment_list?.length}
          limit={limit}
        />
      </Wrap>
    </React.Fragment>
  );
};

const Wrap = styled.div`
  max-width: 720px;
  width: 95%;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  padding-bottom: 80px;

  @media only screen and (max-width: 768px) {
    grid-column: 1 / 2;
  }
`;

const Hr = styled.hr`
  width: 100%;
  height: 1px;
  border: none;
  background-color: rgb(234, 237, 239);
  margin-bottom: 30px;
`;

const CommentT = styled.span`
  font-size: 16px;
  line-height: 32px;
  color: #424242;
  align-self: flex-start;
  margin-bottom: 10px;
  font-weight: bold;
  margin-left: 14px;
`;

const CommentNum = styled.span`
  font-size: 16px;
  line-height: 32px;
  color: #35c5f0;
  align-self: flex-start;
  margin-bottom: 10px;
  font-weight: bold;
  margin-left: 8px;
`;

const UserProfile = styled.img`
  width: 36px;
  height: 36px;
  margin-left: 14px;
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 30px;
`;

const CommentInput = styled.input`
  width: 100%;
  color: rgb(47, 52, 56);
  outline: none;
  height: 44px;
  min-width: 100px;
  margin-left: 16px;
  box-sizing: border-box;
  border: 1px solid rgb(194, 200, 204);
  border-radius: 4px;
  padding: 0px 16px;
  margin-right: 20px;
  font-size: 16px;
  &::placeholder {
    color: rgb(194, 200, 204);
    display: block;
    font-size: 16px;
  }
`;

const CommentBtn = styled.input`
  width: auto;
  height: auto;
  margin-left: -60px;
  position: relative;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 16px;
  color: rgb(194, 200, 204);
`;

const CommentBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 30px;
  margin-bottom: 16px;
`;

const CommentInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 16px;
`;

const Nickname = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #424242;
`;

const CommentText = styled.span`
  font-size: 16px;
  color: #424242;
  margin-top: 8px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

const Time = styled.span`
  font-size: 12px;
  color: rgb(130, 140, 148);
`;

const Point = styled.hr`
  width: 0.5px;
  border: 0.5px solid rgb(130, 140, 148);
  margin: 0px 8px;
`;

const HeartIcon = styled.img`
  width: 16px;
  height: auto;
  cursor: pointer;
`;

const Like = styled.span`
  font-size: 12px;
  color: rgb(130, 140, 148);
  margin-left: 4px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Re = styled.span`
  font-size: 12px;
  color: rgb(130, 140, 148);
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default Comment;
