import styled from "styled-components";
import Logo from "./Logo";
import NavBar from "./NavBar";
import Registration from "./Registration";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
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
