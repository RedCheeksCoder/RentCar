import styled from "styled-components";

const StyledTestimonies = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 1rem;
  margin: 3rem 2rem;
  width: 100%;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 4rem;
  h1 {
    font-size: 3rem;
    margin: 0;
  }
  h4 {
    font-size: 1.3rem;
    color: #ff7231;
  }
  p {
    color: #818080ae;
    width: 50%;
    font-size: 1rem;
    text-align: center;
  }
`;

const RoundImage = styled.img`
  border-radius: 50%;
  height: 4rem;
  margin-right: 1rem;
`;

const Testimony = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 3rem;
  padding: 0 2rem;
  margin: 2rem 0;
  p {
    font-size: 1.5rem;
  }
`;

const NameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ClientName = styled.h3`
  margin-right: 1rem;
`;
function Testimonies() {
  return (
    <StyledTestimonies>
      <Heading>
        <h4>What do people say about us?</h4>
        <h1>Clients Reviews</h1>
        <p>
          A client review is a valuable feedback from our customer about their
          experience with ou service, and we would like to keep on influencing
          future customers' decisions.
        </p>
      </Heading>
      <Testimony>
        <div>
          <p>
            Exceptional service and top-quality vehicles! The booking process
            was seamless, and the car exceeded our expectations. Truly the best
            car rental experience we've had!
          </p>
          <NameContainer>
            <RoundImage loading="lazy" src="/memma-stone.jpg" alt="" />
            <ClientName>MEMMA STONE </ClientName>
            <img loading="lazy" src="/svg/quote.svg" alt="" />
          </NameContainer>
        </div>
        <div>
          <p>
            Impressive range of high-quality cars and outstanding customer
            service! The vehicle we rented was in excellent condition and made
            our trip memorable. Best rental experience ever!
          </p>
          <NameContainer>
            <RoundImage loading="lazy" src="/pettah-porker.png" alt="" />
            <ClientName>PETTAH PORKER </ClientName>
            <img loading="lazy" src="/svg/quote.svg" alt="" />
          </NameContainer>
        </div>
      </Testimony>
    </StyledTestimonies>
  );
}

export default Testimonies;
