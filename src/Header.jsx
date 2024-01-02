import styled from "styled-components";
import Logo from "./Logo";
import NavBar from "./NavBar";
import Registration from "./Registration";

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <NavBar />
      <Registration />
    </StyledHeader>
  );
}

export default Header;
