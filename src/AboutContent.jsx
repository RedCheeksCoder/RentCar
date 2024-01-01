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
  max-width: 30%;

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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          neque?
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          atque eaque pariatur assumenda obcaecati dolores facilis neque, sint
          officiis maxime!
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
