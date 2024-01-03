import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import Steps from "./Steps";

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
`;
const Title = styled.div`
  height: 40dvh;
  width: 100%;
  position: absolute;
  top: 0;
  background: #ffffff url(/pagebg.jpg) center center/cover no-repeat;
  z-index: -999;
  opacity: 0.2;
`;

const HeaderTitle = styled.div`
  margin: 3rem 0;
  font-size: 2rem;
`;
function PagesContainer({ title, content }) {
  return (
    <StyledAbout>
      <Header />
      <Title></Title>
      <HeaderTitle>
        <h1>{title}</h1>
      </HeaderTitle>
      {content}
      <Steps />
      <Banner>
        RESERVE A CAR VIA OUR CONTACT <span>(02) 882-0925</span>
      </Banner>
      <Footer />
    </StyledAbout>
  );
}

export default PagesContainer;
