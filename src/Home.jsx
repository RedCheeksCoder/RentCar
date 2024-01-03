import styled from "styled-components";
import ScrollToTopButton from "./BackToTop";
import HomePage from "./HomePage";

const AppContainer = styled.div`
  width: 70%;
  @media (max-width: 890px) {
    width: 100%;
  }
`;
const ImageContainer = styled.div`
  position: absolute;
  right: 0;
  top: 5.5rem;
  z-index: 1;
  object-fit: contain;
  img {
    height: 50%;
  }
  @media (max-width: 1160px) {
    display: none;
  }
`;

function Home() {
  return (
    <AppContainer>
      <ImageContainer>
        <img src="/Presentation1.png" alt="" width={600} height={600} />
      </ImageContainer>
      <HomePage />
      <ScrollToTopButton />
    </AppContainer>
  );
}

export default Home;
