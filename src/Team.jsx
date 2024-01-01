import styled from "styled-components";

const StyledTeam = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
  column-gap: 1rem;
`;

const ImageContainer = styled.div`
  max-width: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const Details = styled.div`
  padding: 2rem;
  width: 200rem;
  p {
    color: #818080ae;
    margin: 1rem 0;
    font-size: 1.2rem;
    line-height: 1.7;
  }
  h1 {
    font-size: 3rem;
    color: #ff7231;
    margin: 0;
  }
`;

function Team() {
  return (
    <StyledTeam>
      <ImageContainer>
        <img src="/employess.avif" alt="" />
      </ImageContainer>
      <Details>
        <h4>Making our customer service excellent</h4>
        <h1>Meet our Team</h1>
        <p>
          Rent Car Co. is not just a car rental service. It is a team of people
          who love their work and their customers. They are always ready to go
          the extra mile to make sure that every customer has a smooth and
          satisfying experience. Whether it is finding the perfect car for their
          needs, fixing any issues with the vehicles, answering any questions or
          concerns, driving them safely to their destination, or designing and
          maintaining the website, they do it with passion and dedication. They
          are not just employees, they are family. And they treat every customer
          like family too. `
        </p>
      </Details>
    </StyledTeam>
  );
}

export default Team;
