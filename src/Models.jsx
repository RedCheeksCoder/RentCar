import styled from "styled-components";

const StyledModels = styled.div`
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

const Steps = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  img {
    height: 5rem;
  }

  h3 {
    font-size: 1.2rem;
  }
  p {
    margin: 0 2rem;
    text-align: center;
  }
`;

const StepsImageContainer = styled.div``;
function Models() {
  return (
    <StyledModels>
      <div>
        <h1>Making a reservation made easy in 3 steps</h1>
      </div>
      <Details>
        <div>
          <Steps>
            <StepsImageContainer>
              <img src="/car.svg" alt="" />
            </StepsImageContainer>
            <h3>Car Selection</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              minus optio odio neque esse fugit.
            </p>
          </Steps>
        </div>
        <div>
          <Steps>
            <StepsImageContainer>
              <img src="/file-description.svg" alt="" />
            </StepsImageContainer>
            <h3>Fill details</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              minus optio odio neque esse fugit.
            </p>
          </Steps>
        </div>
        <div>
          <Steps>
            <StepsImageContainer>
              <img src="/steering-wheel.svg" alt="" />
            </StepsImageContainer>
            <h3>Drive Car</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              minus optio odio neque esse fugit.
            </p>
          </Steps>
        </div>
      </Details>
    </StyledModels>
  );
}

export default Models;
