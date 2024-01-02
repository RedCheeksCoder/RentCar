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
  margin-right: 3rem;
  img {
    height: 50%;
  }
`;

function Home() {
  return (
    <AppContainer>
      <HomePage />
      <ScrollToTopButton />
    </AppContainer>
  );
}

export default Home;
