import styled from "styled-components";

const StyledSteps = styled.div`
  min-height: 60dvh;
  width: 90%;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    font-size: 2rem;
    color: #292828;
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  @media (max-width: 1135px) {
    flex-direction: column;
    row-gap: 1rem;
  }
`;

const Stepss = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  img {
    height: 5rem;
  }

  h3 {
    font-size: 1.5rem;
  }
  p {
    margin: 0 2rem;
    font-size: 1rem;
    text-align: center;
    color: #808080c8;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  h4 {
    color: #ff7431;
    font-size: 1.3rem;
  }
  h1 {
    margin-block-end: 0;
    margin-block-start: 0;
    font-size: 2rem;
    @media (max-width: 1135px) {
      text-align: center;
    }
  }
  p {
    color: #818080ae;
    width: 50%;
    font-size: 1rem;
  }
`;
const StepsImageContainer = styled.div``;
function Steps() {
  return (
    <StyledSteps>
      <Header>
        <h4>Plan your Trip with us</h4>
        <h1>Making a reservation made easy in 3 steps</h1>
      </Header>

      <Details>
        <div>
          <Stepss>
            <StepsImageContainer>
              <img loading="lazy" src="/svg/car.svg" alt="" />
            </StepsImageContainer>
            <h3>Car Selection</h3>
            <p>
              Browse through our diverse range of top-quality vehicles. Choose
              the one that best suits your needs and preferences for a perfect
              ride.
            </p>
          </Stepss>
        </div>
        <div>
          <Stepss>
            <StepsImageContainer>
              <img loading="lazy" src="/svg/file-description.svg" alt="" />
            </StepsImageContainer>
            <h3>Fill details</h3>
            <p>
              Provide your personal details in our secure form. This ensures a
              seamless reservation process and a personalized rental experience.
            </p>
          </Stepss>
        </div>
        <div>
          <Stepss>
            <StepsImageContainer>
              <img loading="lazy" src="/svg/steering-wheel.svg" alt="" />
            </StepsImageContainer>
            <h3>Drive Car</h3>
            <p>
              Once the reservation is confirmed, the chosen car is yours to
              drive. Enjoy the comfort and freedom of your journey. Safe
              travels!
            </p>
          </Stepss>
        </div>
      </Details>
    </StyledSteps>
  );
}

export default Steps;
