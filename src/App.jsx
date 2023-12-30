import HomePage from "./HomePage";
import About from "./About";
import Steps from "./Steps";
import Contact from "./WhyChoose";
import Footer from "./Footer";
import AppDownload from "./AppDownload";
import Testimonies from "./Testimonies";
import Information from "./Information";
import Team from "./Team";
import Models from "./Models";
import PickCar from "./PickCar";
import Display from "./Display";
import ScrollToTopButton from "./BackToTop";
import FAQ from "./FAQ";
import BookForm from "./BookForm";

import { ModalProvider } from "styled-react-modal";
import FancyModalButton, { FadingBackground } from "./Modal";
import styled from "styled-components";

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  position: relative;
`;

const AppContainer = styled.div`
  width: 70vw;
  height: 100dvh;
`;

const ImageContainer = styled.div`
  position: absolute;
  right: 0;
  z-index: 1;
  margin-right: 3rem;
`;

function App() {
  return (
    <ModalProvider backgroundComponent={FadingBackground}>
      <StyledApp>
        <ImageContainer>
          <img
            src="../public/Presentation1.png"
            alt=""
            width={600}
            height={600}
          />
        </ImageContainer>
        <AppContainer>
          <section id="home">
            <HomePage />
            <ScrollToTopButton />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="models">
            <Steps />
          </section>
          <section id="testimonials">
            <Testimonies />
          </section>
          <section id="team">
            <AppDownload />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <Information />
          <Team />
          <PickCar />
          <Models />
          <Display />
          <FAQ />
          <FancyModalButton>I AM A NEW MODAL</FancyModalButton>
          <BookForm />
          <Footer />{" "}
        </AppContainer>
      </StyledApp>
    </ModalProvider>
  );
}

export default App;
