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
import Registration from "./Registration";

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
    </Container>
  );
}

export default HomePage;
