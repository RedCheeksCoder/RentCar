import styled from "styled-components";
import { HiOutlineBookOpen, HiOutlineInformationCircle } from "react-icons/hi2";
import ButtonDesign from "./ButtonDesign";

const StyledHeadline = styled.div`
  height: 90dvh;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2rem;
  padding: 1rem;
`;

const CarImage = styled.div`
  z-index: 10;
  img {
    height: auto;
    width: 45rem;
  }
`;

const Heading = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 5rem;
  line-height: 1;
`;

const Hook = styled.p`
  color: #808080c8;
`;

const LearnMore = styled.a`
  background-color: #000000;
  border-radius: 7px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 17px;
  font-weight: bold;
  padding: 12px 15px;
  text-decoration: none;
`;

const CTA = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 1rem;
`;
function Headline() {
  return (
    <StyledHeadline>
      <div>
        <Heading>
          Rent a car, <span>not a hassle.</span>
        </Heading>
        <Hook>
          Drive your dream car today. The best cars at the best prices. Car
          rental made easy and affordable. Travel with comfort and convenience.
        </Hook>
        <CTA>
          <ButtonDesign href="">
            Book ride Now <HiOutlineBookOpen />
          </ButtonDesign>
          <LearnMore href="">
            Learn more <HiOutlineInformationCircle />
          </LearnMore>
        </CTA>
      </div>
      <CarImage>
        <img src="/vios_prev_ui.png" alt="" />
      </CarImage>
    </StyledHeadline>
  );
}

export default Headline;
