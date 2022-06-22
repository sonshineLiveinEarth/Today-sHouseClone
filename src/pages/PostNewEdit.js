import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

import { addPostDB } from "../redux/modules/post";

import { size, type, style, area } from "../shared/postOptions";
import { BigBlueButton } from "../elements/Button";
import { Select } from "../elements/Select.js";
import { Textarea } from "../elements/Textarea";

const PostNewEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  let post = useSelector((state) => state.post.postOne);
  if (!id) post = null;
  const [preview, setPreview] = useState(post?.imageUrl);

  const sizeRef = useRef(post?.size);
  const typeRef = useRef(post?.type);
  const styleRef = useRef(post?.style);
  const areaRef = useRef(post?.area);
  const fileRef = useRef();
  const contentRef = useRef(post?.content);

  // 이미지 미리보기
  const onChangeFile = (event) => {
    const {
      target: { files },
    } = event;
    const file = files[0];

    if (!file) {
      setPreview(null);
      return false;
    }

    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setPreview(result);
    };
    reader.readAsDataURL(file);
  };

  // 이미지 삭제
  const onClickDelete = () => {
    setPreview(null);
    fileRef.current.value = null;
  };

  // 올리기 클릭
  const onSubmit = (event) => {
    event.preventDefault();

    if (!preview || areaRef.current.value === "-1") {
      window.alert("사진과 공간은 필수 항목입니다.");
      return false;
    }

    const formData = new FormData(event.target);
    if (sizeRef.current.value === "평수") formData.append("size", "평수");
    if (typeRef.current.value === "주거형태")
      formData.append("type", "주거형태");
    if (styleRef.current.value === "스타일") formData.append("style", "스타일");

    dispatch(addPostDB(id, formData));
    navigate("/");
  };

  return (
    <form onSubmit={onSubmit}>
      <Header>
        <div>
          <img
            src="/images/TextLogo.png"
            alt="Logo"
            height="30px"
            onClick={() => navigate("/")}
          />
          <BigBlueButton type="submit">올리기</BigBlueButton>
        </div>
      </Header>
      <FormWrap>
        <SelectContainer>
          <Select name="size" ref={sizeRef} defaultValue={post?.size ?? "평수"}>
            <option value="평수" disabled>
              평수
            </option>
            {size.map((element, index) => (
              <option value={element} key={index}>
                {element}
              </option>
            ))}
          </Select>

          <Select
            name="type"
            ref={typeRef}
            defaultValue={post?.type ?? "주거형태"}
          >
            <option value="주거형태" disabled>
              주거형태
            </option>
            {type.map((element, index) => (
              <option value={element} key={index}>
                {element}
              </option>
            ))}
          </Select>

          <Select
            name="style"
            ref={styleRef}
            defaultValue={post?.style ?? "스타일"}
          >
            <option value="스타일" disabled>
              스타일
            </option>
            {style.map((element, index) => (
              <option value={element} key={index}>
                {element}
              </option>
            ))}
          </Select>
        </SelectContainer>
        <div style={{ display: "flex" }}>
          {preview && (
            <PreviewWrap>
              <Preview src={preview} />
              <ImageGradient />
              <label htmlFor="upload">
                <ChangeIcon src="/images/change.png" />
              </label>
              <DeleteIcon onClick={onClickDelete} src="/images/trash.png" />
            </PreviewWrap>
          )}

          <input
            type="file"
            id="upload"
            style={{ display: "none" }}
            name="imageUrl"
            accept="image/*"
            ref={fileRef}
            onChange={onChangeFile}
          />
          <label htmlFor="upload">
            <UploadBox preview={preview}>
              <img src="/images/camera.png" alt="camera" height="40px" />
              <span>사진 올리기</span>
            </UploadBox>
          </label>
          <ImgDescription>
            <Select name="area" ref={areaRef} defaultValue={post?.area ?? "-1"}>
              <option value="-1" disabled>
                공간 (필수)
              </option>
              {area.map((element, index) => (
                <option value={element} key={index}>
                  {element}
                </option>
              ))}
            </Select>
            <Textarea
              name="content"
              ref={contentRef}
              placeholder="사진에 대해 설명해주세요."
              defaultValue={post?.content ?? ""}
            />
          </ImgDescription>
        </div>
      </FormWrap>
    </form>
  );
};
const Header = styled.header`
  height: 80px;

  margin: 0px auto;
  padding: 0 30px;

  box-sizing: border-box;
  border-bottom: 1px solid rgb(219, 219, 219);
  display: flex;
  div {
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    max-width: 1256px;
    flex-direction: row;
    justify-content: space-between;
  }
  img {
    cursor: pointer;
  }
`;

const FormWrap = styled.div`
  max-width: 800px;
  margin: 30px auto;
`;
const SelectContainer = styled.div`
  margin-bottom: 30px;
  select {
    margin-right: 10px;
  }
`;
const UploadBox = styled.div`
  width: 460px;
  height: 300px;
  background-color: #f9f9f9;
  border: 1px dashed #d3d3d3;
  display: ${(props) => (props.preview ? "none" : "flex")};
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  &:hover {
    opacity: 0.65;
  }
  span {
    margin-top: 10px;
    color: #8d8d8d;
    font-weight: bold;
  }
`;
const PreviewWrap = styled.div`
  position: relative;
`;
const Preview = styled.img`
  width: 460px;
  border-radius: 6px;
`;
const ImageGradient = styled.div`
  height: 80px;
  width: 460px;
  position: absolute;
  bottom: 4px;
  background: linear-gradient(to top, #00000090, #00000090 10%, transparent);
  border-radius: 0 0 6px 6px;
`;
const Icon = css`
  position: absolute;
  height: 20px;
  bottom: 25px;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    filter: brightness(70%);
  }
`;
const ChangeIcon = styled.img`
  ${Icon}
  left: 20px;
`;

const DeleteIcon = styled.img`
  ${Icon}
  left: 70px;
`;

const ImgDescription = styled.div`
  margin-left: 30px;
  select {
    margin-bottom: 10px;
  }
`;

const SmallPreviewWrap = styled.div`
  position: relative;
  height: 60px;
  width: 60px;
  border-radius: 4px;
  overflow: hidden;
`;
const SmallPreview = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
`;

export default PostNewEdit;
