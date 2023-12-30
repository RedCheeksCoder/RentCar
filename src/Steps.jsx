import styled from "styled-components";

const StyledSteps = styled.div`
  height: 100dvh;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 2.5rem;
    color: #ff7231;
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
`;

const Stepss = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  img {
    height: 7rem;
  }

  h3 {
    font-size: 2.1rem;
  }
  p {
    margin: 0 2rem;
    font-size: 1.5rem;
    text-align: center;
    color: #808080c8;
  }
`;

const StepsImageContainer = styled.div``;
function Steps() {
  return (
    <StyledSteps>
      <div>
        <h1>Making a reservation made easy in 3 steps</h1>
      </div>
      <Details>
        <div>
          <Stepss>
            <StepsImageContainer>
              <img src="/car.svg" alt="" />
            </StepsImageContainer>
            <h3>Car Selection</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              minus optio odio neque esse fugit.
            </p>
          </Stepss>
        </div>
        <div>
          <Stepss>
            <StepsImageContainer>
              <img src="/file-description.svg" alt="" />
            </StepsImageContainer>
            <h3>Fill details</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              minus optio odio neque esse fugit.
            </p>
          </Stepss>
        </div>
        <div>
          <Stepss>
            <StepsImageContainer>
              <img src="/steering-wheel.svg" alt="" />
            </StepsImageContainer>
            <h3>Drive Car</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              minus optio odio neque esse fugit.
            </p>
          </Stepss>
        </div>
      </Details>
    </StyledSteps>
  );
}

export default Steps;
