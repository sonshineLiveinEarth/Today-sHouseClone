import { createGlobalStyle } from "styled-components";

import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

// js파일
import Main from "./pages/Main";
import PostNewEdit from "./pages/PostNewEdit";
import Detail from "./components/Detail";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contents/new" element={<PostNewEdit />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
`;

export default App;
