import styled from "styled-components";

const TopButton = () => {
  return (
    <Wrap>
      <button
        onClick={() => {
          window.scroll({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <img src="/images/arrow.png" alt="arrow" height="20" />
      </button>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: sticky;
  bottom: 20px;
  margin-left: 94%;
  button {
    background: rgb(255, 255, 255);
    box-shadow: rgb(63 71 77 / 25%) 0px 2px 10px;
    border-radius: 100%;
    border: 0;
    padding: 15px;
  }
`;

export default TopButton;
