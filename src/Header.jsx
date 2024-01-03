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

const Menu = styled.div`
  display: none;
  @media (max-width: 450px) {
    display: flex;
  }
`;
function Header() {
  return (
    <StyledHeader>
      <Logo />
      <NavBar />
      <Registration />
      <Menu>
        <img src="/svg/menu-2.svg" alt="" />
      </Menu>
    </StyledHeader>
  );
}

export default Header;
