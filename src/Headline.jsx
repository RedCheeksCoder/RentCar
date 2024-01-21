import styled from "styled-components";
import { HiOutlineBookOpen, HiOutlineInformationCircle } from "react-icons/hi2";

const StyledHeadline = styled.div`
  height: 90dvh;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  @media (max-width: 1200px) {
    height: 80dvh;
  }
`;

const CarImage = styled.div`
  z-index: 10;
  img {
    height: auto;
    width: 50rem;
    /* 2xl */
    @media (max-width: 1836px) {
      width: 40rem;
    }

    /* xl */
    @media (max-width: 1620px) {
      width: 35rem;
    }

    /* lg */
    @media (max-width: 1500px) {
      width: 30rem;
    }

    /* md */
    @media (max-width: 1390px) {
      width: 25rem;
    }

    /* sm */
    @media (max-width: 1275px) {
      width: 20rem;
    }

    /* xs */
    @media (max-width: 1160px) {
      display: none;
    }
  }
`;

const HeadlineContainer = styled.div`
  z-index: 5;
  @media (max-width: 1160px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const Heading = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 4rem;
  line-height: 1;
  text-wrap: balance;

  b {
    color: #ff4d30;
  }
  @media (max-width: 1160px) {
    font-size: 6rem;
  }
  @media (max-width: 1160px) {
    font-size: 3rem;
  }
`;

const Hook = styled.p`
  color: #808080c8;
  text-wrap: balance;
  font-size: 1rem;
  @media (max-width: 1160px) {
    font-size: 1.5rem;
  }
  @media (max-width: 1160px) {
    font-size: 0.8rem;
  }
`;

const LearnMore = styled.a`
  box-sizing: border-box;
  background-color: #000000;
  border-radius: 3px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 1rem;
  text-decoration: none;
  width: 100%;
  text-align: center;
  &:hover {
    color: black;
    background-color: white;
    outline: 2px solid black;
    transition: all 0.2s;
  }
  @media (max-width: 1160px) {
    font-size: 1rem;
  }
`;

const CTA = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  margin-top: 2rem;
  padding-top: 1rem;
  @media (max-width: 1160px) {
    margin-top: 0.5rem;
    padding-top: 0;
    row-gap: 1rem;
    flex-direction: column;
  }
`;

const BookButton = styled.a`
  box-sizing: border-box;
  background-color: #ff7231;
  box-shadow: 0 10px 15px 0 rgba(255, 83, 48, 0.35);
  border-radius: 3px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 1rem;
  text-decoration: none;
  width: 100%;
  text-align: center;
  &:hover {
    background-color: #ff7231c5;
    transition: all 0.3s;
  }
  @media (max-width: 1160px) {
    font-size: 1rem;
  }
`;

const Title = styled.div`
  font-size: 2rem;
  margin-bottom: 2rem;
  @media (max-width: 1160px) {
    font-size: 1.3rem;
  }
`;
function Headline() {
  return (
    <StyledHeadline>
      <HeadlineContainer>
        <Heading>
          <Title>Map your journey now</Title>
          Rent a <b>car</b>, <span>not a hassle.</span>
        </Heading>
        <Hook>
          Drive your dream car today. The best cars at the best prices. Car
          rental made easy and affordable. Travel with comfort and convenience.
        </Hook>
        <CTA>
          <BookButton href="#bookform">
            Book ride Now <HiOutlineBookOpen />
          </BookButton>
          <LearnMore href="#faq">
            Learn more <HiOutlineInformationCircle />
          </LearnMore>
        </CTA>
      </HeadlineContainer>
      <CarImage>
        <img loading="lazy" src="/vios_prev_ui.png" alt="" />
      </CarImage>
    </StyledHeadline>
  );
}

export default Headline;
