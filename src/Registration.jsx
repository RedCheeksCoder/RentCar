import styled from "styled-components";
import { closeNav, openNav } from "./sidebar";
import { Link } from "react-router-dom";
const StyledRegistration = styled.a`
  background-color: #ff7231;
  box-shadow: 0 10px 15px 0 rgba(255, 83, 48, 0.35);
  border-radius: 7px;
  display: block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 1rem;
  font-weight: bold;
  padding: 12px 20px;
  text-decoration: none;
  @media (max-width: 1250px) {
    display: none;
  }
`;

const Menu = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 1250px) {
    display: flex;
  }
`;
function Registration() {
  return (
    <div>
      <div id="mySidenav" className="sidenav">
        <a
          href="javascript:void(0)"
          className="closebtn"
          onClick={() => closeNav()}>
          &times;
        </a>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/models">Vehicle Models</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/team">Our Team</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <StyledRegistration href="#bookform">Registration</StyledRegistration>
      <Menu onClick={() => openNav()}>
        <img src="/svg/menu-2.svg" alt="" />
      </Menu>
    </div>
  );
}

export default Registration;
