import styled from "styled-components";
import ScrollToTopButton from "./BackToTop";
import HomePage from "./HomePage";

const AppContainer = styled.div`
  width: 70vw;
  height: 100dvh;
`;
const ImageContainer = styled.div`
  position: absolute;
  right: 0;
  top: 5.5rem;
  z-index: 1;
  margin-right: 3rem;
  img {
    height: 50%;
  }
`;

function Home() {
  return (
    <AppContainer>
      <ImageContainer>
        <img
          src="../public/Presentation1.png"
          alt=""
          width={600}
          height={600}
        />
      </ImageContainer>
      <HomePage />
      <ScrollToTopButton />
    </AppContainer>
  );
}

export default Home;
