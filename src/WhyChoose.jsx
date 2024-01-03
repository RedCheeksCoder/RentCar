import styled from "styled-components";
import ButtonDesign from "./ButtonDesign";
import CarCollection from "./CarCollection";

const StyledWhyChoose = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2rem;
  margin: 0 2rem;
  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

const Hook = styled.div`
  min-width: 50%;
  padding: 0 1rem;

  h1 {
    font-size: 3rem;
    line-height: 1.2;
    margin: 0;
    @media (max-width: 850px) {
      font-size: 2rem;
    }
  }
  p {
    color: #818080ae;
    font-size: 1rem;
  }
`;

const Details = styled.div`
  min-width: 50%;
  padding: 0 1rem;
  font-size: 1rem;
  p {
    color: #818080ae;
    font-size: 1rem;
  }

  @media (max-width: 850px) {
    margin-top: 2rem;
  }
`;

const Detail = styled.div`
  display: flex;
  column-gap: 1rem;
`;

const DetailImage = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    @media (max-width: 1160px) {
      align-self: self-start;
      margin-top: 1.3rem;
    }
  }
`;

const HeadingColor = styled.h3`
  color: #ff7231;
  font-size: 1.5rem;
`;
const StyledWhyChooseUs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
function WhyChoose() {
  return (
    <StyledWhyChooseUs>
      <CarCollection />
      <StyledWhyChoose>
        <Hook>
          <HeadingColor>Why Choose Us</HeadingColor>
          <h1>Best valued deals you will ever find </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, sed
            distinctio tempora commodi reprehenderit ipsum beatae, nemo error
            eligendi nisi at qui, necessitatibus vero amet.
          </p>
          <ButtonDesign>Find more details</ButtonDesign>
        </Hook>
        <Details>
          <Detail>
            <DetailImage>
              <img loading="lazy" src="/car-round.png" alt="" />
            </DetailImage>
            <div>
              <h2>Cross Country Drive</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
                sunt dignissimos nesciunt reprehenderit vero? Esse.
              </p>
            </div>
          </Detail>
          <Detail>
            <DetailImage>
              <img loading="lazy" src="/dollar-round.png" alt="" />
            </DetailImage>
            <div>
              <h2>All Inclusive Pricing</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                facilis accusamus, minus repellendus quod eius?
              </p>
            </div>
          </Detail>
          <Detail>
            <DetailImage>
              <img loading="lazy" src="/hand-dollar-round.png" alt="" />
            </DetailImage>
            <div>
              <h2>No hidden Charges</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus perferendis deserunt non consectetur, mollitia modi?
              </p>
            </div>
          </Detail>
        </Details>
      </StyledWhyChoose>
    </StyledWhyChooseUs>
  );
}

export default WhyChoose;
