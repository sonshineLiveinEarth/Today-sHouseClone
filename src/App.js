import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Main from "./pages/Main";
import PostNewEdit from "./pages/PostNewEdit";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contents/new" element={<PostNewEdit />} />
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
