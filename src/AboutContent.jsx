import styled from "styled-components";

const StyledAbout = styled.div`
  height: 35dvh;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  column-gap: 2rem;
  margin: 4rem 0;
`;

const Image = styled.div`
  img {
    height: 25rem;
  }
`;

const Details = styled.div`
  max-width: 50%;

  h1 {
    margin: 0;
    padding: 0;
    font-size: 2rem;
    line-height: 1.2;
  }

  h3 {
    font-size: 1rem;
    color: #ff7231;
  }
  p {
    color: #808080c8;
    font-size: 1rem;
    padding: 0.5rem 0;
  }
  li {
    list-style: none;
    font-size: 1rem;
  }
`;

const ListContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 0;
  margin-left: 0;
  font-weight: 400;
  span {
    font-size: 2.5rem;
    font-weight: 700;
    color: #ff7231;
  }
`;
function AboutContent() {
  return (
    <StyledAbout>
      <Image>
        <img loading="lazy" src="/office-meeting.jpg" alt="About us" />
      </Image>
      <Details>
        <h3>ABOUT THE COMPANY</h3>
        <h1>
          Experience unparalleled freedom with our premium, customer-centric car
          rentals.
        </h1>
        <p>
          Our car rental company is committed to providing an exceptional rental
          experience. We offer a wide range of top-quality vehicles to suit all
          journeys and preferences. Our seamless reservation process,
          personalized customer service, and commitment to your comfort and
          satisfaction set us apart. Experience the freedom of the open road
          with us.
        </p>
        <ListContainer>
          <li>
            <span>589</span> <br />
            Bookings
          </li>
          <li>
            <span>201</span> <br />
            Partners
          </li>
          <li>
            <span>152</span> <br />
            Shops
          </li>
        </ListContainer>
      </Details>
    </StyledAbout>
  );
}

export default AboutContent;
