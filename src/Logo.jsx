import styled from "styled-components";

const StyledLogo = styled.div`
  img {
    height: 100px;
    width: auto;
  }
`;
function Logo() {
  return (
    <StyledLogo>
      <img
        src="/rent-car-automotive-logo-design-template-element-vector-PhotoRoom.png-PhotoRoom.png"
        alt="Rent car logo"
      />
    </StyledLogo>
  );
}

export default Logo;
