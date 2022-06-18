import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { addPostDB } from "../redux/modules/post";

import { size, type, style, area } from "../shared/postOptions";
import { HeaderContainer } from "../components/Header";
import { BigBlueButton } from "../elements/Button";
import { Select } from "../elements/Select.js";
import { Textarea } from "../elements/Textarea";

const PostNewEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [preview, setPreview] = useState(null);

  const sizeRef = useRef("");
  const typeRef = useRef("");
  const styleRef = useRef("");
  const areaRef = useRef("");
  const fileRef = useRef("");
  const contentRef = useRef("");

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

  const onSubmit = (event) => {
    event.preventDefault();
    if (!fileRef.current.files[0] || areaRef.current.value === "-1") {
      console.log(fileRef.current.files[0], areaRef.current.value);
      return false;
    }

    const formData = new FormData(event.target);

    // formData.append("size", sizeRef);
    // formData.append("type", typeRef);
    // formData.append("style", styleRef);
    // formData.append("area", areaRef);
    // formData.append("content", contentRef);
    // formData.append("imageFile", fileRef.current.files[0]);
    for (let value of formData.values()) {
      //   console.log(value);
    }
    dispatch(addPostDB(formData)).then(() => navigate("/"));
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <HeaderContainer>
          <div>
            <img
              src="/images/TextLogo.png"
              alt="Logo"
              height="30px"
              onClick={() => navigate("/")}
            />
            <BigBlueButton type="submit">올리기</BigBlueButton>
          </div>
        </HeaderContainer>

        <SelectContainer>
          <Select name="size" ref={sizeRef} defaultValue="-1">
            <option value="-1" disabled>
              평수
            </option>
            {size.map((element, index) => (
              <option value={index} key={index}>
                {element}
              </option>
            ))}
          </Select>

          <Select name="type" ref={typeRef} defaultValue="-1">
            <option value="-1" disabled>
              주거형태
            </option>
            {type.map((element, index) => (
              <option value={index} key={index}>
                {element}
              </option>
            ))}
          </Select>

          <Select name="style" ref={styleRef} defaultValue="-1">
            <option value="-1" disabled>
              스타일
            </option>
            {style.map((element, index) => (
              <option value={index} key={index}>
                {element}
              </option>
            ))}
          </Select>
        </SelectContainer>
        <div style={{ display: "flex" }}>
          {/* <SmallPreviewWrap>
            <SmallPreview src={preview} alt="small preview" />
          </SmallPreviewWrap> */}
          <ImageUpload
            type="file"
            name="imageFile"
            accept="image/*"
            ref={fileRef}
            onChange={onChangeFile}
            src={preview}
          />
          <ImgDescription>
            <Select name="area" ref={areaRef} defaultValue="-1">
              <option value="-1" disabled>
                공간 (필수)
              </option>
              {area.map((element, index) => (
                <option value={index} key={index}>
                  {element}
                </option>
              ))}
            </Select>
            <Textarea
              name="content"
              ref={contentRef}
              placeholder="사진에 대해 설명해주세요."
            />
          </ImgDescription>
        </div>
      </form>
    </>
  );
};
const SelectContainer = styled.div`
  select {
    margin-right: 10px;
  }
`;

const ImgDescription = styled.div``;

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

const ImageUpload = styled.input`
  position: relative;
  overflow: hidden;
  width: 400px;
  height: 300px;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  background-image: z-index 1;
  border-radius: 4px;
  background-color: #f9f9f9;
  cursor: pointer;
  vertical-align: middle;
  color: transparent;
  &::file-selector-button {
    display: none;
  }
  &:hover {
    opacity: 0.65;
  }
  border: 1px dashed #d3d3d3;
  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
  }
`;
export default PostNewEdit;
