import styled from "styled-components";

const StyledTestimonies = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 1rem;
  margin: 3rem 2rem;
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
    font-size: 1rem;
    color: #ff7231;
  }
  p {
    color: #818080ae;
    width: 50%;
    font-size: 1rem;
  }
`;

const RoundImage = styled.div`
  border-radius: 50%;
`;

const Testimony = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 3rem;
  padding: 0 2rem;
  p {
    font-size: 1.5rem;
  }
`;
function Testimonies() {
  return (
    <StyledTestimonies>
      <Heading>
        <h4>What do people say about us?</h4>
        <h1>Clients Reviews</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, et
          fugiat similique recusandae natus provident soluta beatae? Dignissimos
          voluptatem nisi veniam sit possimus libero rerum.
        </p>
      </Heading>
      <Testimony>
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
            aperiam iste in assumenda excepturi maxime culpa quam libero dolor
            vitae.
          </p>
          <div>
            <h3>
              <imRoundImageg src="/memma-stone.webp" alt="" />
              MEMMA STONE
              <div>
                <img src="/svg/quote.svg" alt="" />
              </div>
            </h3>
          </div>
        </div>
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
            aperiam iste in assumenda excepturi maxime culpa quam libero dolor
            vitae.
          </p>
          <div>
            <h3>
              <RoundImage src="/pettah-porker.avif" alt="" />
              PETTAH PORKER
              <div>
                <img src="/svg/quote.svg" alt="" />
              </div>
            </h3>
          </div>
        </div>
      </Testimony>
    </StyledTestimonies>
  );
}

export default Testimonies;
