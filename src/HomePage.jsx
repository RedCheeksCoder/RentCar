import BookForm from "./BookForm";
import Header from "./Header";
import Headline from "./Headline";
import Steps from "./Steps";
import PickCar from "./PickCar";
import Banner from "./Banner";
import WhyChoose from "./WhyChoose";
import Footer from "./Footer";
import Testimonies from "./Testimonies";
import FAQ from "./FAQ";
import AppDownload from "./AppDownload";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function HomePage() {
  return (
    <Container>
      <Header />
      <Headline />
      <BookForm />
      <Steps />
      <PickCar />
      <Banner>
        Experience the Journey, Discover Your <span>Freedom</span>
      </Banner>
      <WhyChoose />
      <Testimonies />
      <FAQ />
      <AppDownload />
      <Banner>
        RESERVE A CAR VIA OUR CONTACT <span>(02) 882-0925</span>
      </Banner>
      <Footer />
    </Container>
  );
}

export default HomePage;
