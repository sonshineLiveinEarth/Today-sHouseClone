import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

// js파일
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/detail" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
