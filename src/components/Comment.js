import React, { useState } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  getCommentListDB,
  addCommentDB,
  deleteCommentDB,
} from "../redux/modules/comment";

//이미지
import Profile from "../image/Profile.png";
import Heart from "../image/Heart.png";

const Comment = () => {
  const navigate = useNavigate();

  const comment_list = useSelector((state) => state.comment.list);
  console.log(comment_list);

  // 댓글 작성 시간
  const [time, setTime] = useState(comment_list.createdAt);

  const dispatch = useDispatch();
  const params = useParams();
  console.log(params.id);
  const commentText = React.useRef("");

  //포스팅 작성한 시간 커스텀하기
  const now = new Date();
  const Day = now.getDate();
  const month = Number(now.getMonth() + 1);
  const year = now.getFullYear();
  const yearSub = year.toString().substr(2, 4);
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const postTime = hours + ":" + minutes;

  const postDay = yearSub + "." + month + "." + Day + " " + postTime;

  // 댓글 달린 시간표시
  // const today = new Date();
  // const timeValue = new Date(comment_list.createdAt);
  // console.log(today, typeof today);
  // console.log(...comment_list, typeof comment_list?.createdAt);

  // const betweenTime = Math.floor(
  //   (comment_list.createdAt.getTime() - timeValue.getTime()) / 1000 / 60
  // );
  // if (betweenTime < 1) console.log("방금전");
  // if (betweenTime < 60) {
  //   setTime(`${betweenTime}분전`);
  // }

  // const betweenTimeHour = Math.floor(betweenTime / 60);
  // if (betweenTimeHour < 24) {
  //   setTime(`${betweenTimeHour}시간전`);
  // }

  // const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  // if (betweenTimeDay < 365) {
  //   setTime(`${betweenTimeDay}일전`);
  // }

  React.useEffect(() => {
    dispatch(getCommentListDB(params.id));
  }, [dispatch]);

  // 댓글 추가
  const addComment = () => {
    if (commentText.current.value === "") {
      window.alert("댓글을 작성해주세요!");
    } else {
      // api에 데이터 추가하기!
      dispatch(
        addCommentDB({
          postId: params.id,
          comment: commentText.current.value,
        })
      );
      navigate(0);
      commentText.current.value = "";
    }
  };
  console.log(commentText.current.value);

  return (
    <>
      <Wrap id="1">
        <Hr />
        <CommentT>댓글</CommentT>
        <CommentNum>{comment_list.length}</CommentNum>
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
          ? comment_list.map((list, index) => {
              // 댓글 달린 시간표시
              const today = new Date();
              const timeValue = new Date(list.createdAt);

              // console.log(list.createdAt);
              // console.log(timeValue.getTime());
              // console.log(today.getTime());

              const betweenTime = Math.floor(
                (today.getTime() - timeValue.getTime()) / 1000 / 60
              );
              const betweenTimeHour = Math.floor(betweenTime / 60);
              const betweenTimeDay = Math.floor(betweenTime / 60 / 24);

              // if (betweenTime < 1) setTime("방금전");
              // else if (betweenTime < 60) {
              //   setTime(`${betweenTime}분전`);
              // } else if (betweenTimeHour < 24) {
              //   setTime(`${betweenTimeHour}시간전`);
              // } else if (betweenTimeDay < 365) {
              //   setTime(`${betweenTimeDay}일전`);
              // }

              // console.log(list.createdAt);
              // const time = list.createdAt;
              // const Month = time.split("-")[1];
              // const Day = time.split("-")[2].substr(0, 2);
              // const Time = Day.split(":")[1];
              // const Min = Day.split(":")[2];
              // const CommentTime = Month + "/" + Day + " " + Time + ":" + Min;
              // console.log(time);

              return (
                <CommentBox key={index}>
                  <UserProfile src={Profile} alt="userProfile" />
                  <CommentInfo>
                    <Nickname>{list.userNickname}</Nickname>
                    <CommentText>{list.comment}</CommentText>
                    <Info>
                      <Time>6시간 전</Time> <Point />
                      <HeartIcon src={Heart} alt="좋아요아이콘" />
                      <Like>좋아요</Like>
                      <Point />
                      <Re>답글 달기</Re>
                      <Point />
                      <Re
                        onClick={() => {
                          const result = window.confirm(
                            "댓글을 삭제하시겠습니까? 삭제한 댓글은 되돌릴 수 없습니다."
                          );
                          if (result) {
                            dispatch(deleteCommentDB(list.id));
                            navigate(0);
                          }
                        }}
                      >
                        삭제
                      </Re>
                    </Info>
                  </CommentInfo>
                </CommentBox>
              );
            })
          : null}
      </Wrap>
    </>
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
