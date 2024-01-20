import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavBar = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 1.2rem;
`;

const List = styled.li`
  font-size: 1rem;
  list-style: none;
  font-weight: 500;
  a {
    color: black;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fe8122;
      transition: all 0.3s ease-in-out;
    }
  }
  @media (max-width: 1250px) {
    display: none;
  }
`;

function NavBar() {
  return (
    <div>
      <StyledNavBar>
        <List>
          <Link to="/">Home</Link>
        </List>
        <List>
          <Link to="/about">About Us</Link>
        </List>
        <List>
          <Link to="/models">Vehicle Models</Link>
        </List>
        <List>
          <Link to="/testimonials">Testimonials</Link>
        </List>
        <List>
          <Link to="/team">Our Team</Link>
        </List>
        <List>
          <Link to="/contact">Contact Us</Link>
        </List>
      </StyledNavBar>
    </div>
  );
}

export default NavBar;
