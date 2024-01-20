import styled from "styled-components";

const StyledLogo = styled.div`
  img {
    height: 5rem;
    width: auto;
    cursor: pointer;
  }
`;
function Logo() {
  return (
    <StyledLogo>
      <a href="/">
        <img
          src="/rent-car-automotive-logo-design-template-element-vector-PhotoRoom.png-PhotoRoom.png"
          alt="Rent car logo"
        />
      </a>
    </StyledLogo>
  );
}

export default Logo;
