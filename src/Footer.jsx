import { useState } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";

const StyledFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 1rem;
  justify-content: space-between;
  margin: 1rem 1rem 3rem 1rem;
  max-width: 100%;
  border-top: 1px;
  border-bottom: 5rem;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    row-gap: 2rem;
    text-align: center;
  }
`;

const Container = styled.div`
  width: 100%;
  margin-top: 0;
  padding-top: 0;

  h1 {
    font-size: 1rem;
  }
  h3 {
    font-size: 1rem;
    font-weight: 500;
  }
  p {
    color: #818080ae;
    font-size: 1rem;
  }
  li {
    font-size: 1rem;
    margin: 1rem 0;
    font-weight: 500;
    cursor: pointer;
    &:hover {
      color: #ff7231;
      transition: all 0.23s ease-in-out;
    }

    @media (max-width: 500px) {
      margin: 0.5rem 0;
    }
  }

  h4 {
    &:hover {
      color: #ff7231;
      transition: all 0.23s ease-in-out;
      cursor: pointer;
    }
  }

  ul {
    list-style: none;
    padding: 0;
  }
  input {
    box-sizing: border-box;
    background-color: #ececec;
    border-color: transparent;
    border-width: 1px;
    font-family: Rubik, sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 26px;
    margin-top: 1rem;
    outline: none;
    padding: 10px 48px;
    text-align: center;
    border-radius: 5px;
    margin-bottom: 0.2rem;

    display: block;
    width: 100%;
    overflow: hidden;
  }
`;

const SubscribeButton = styled.div`
  box-sizing: border-box;
  background-color: #ff4d30;
  border: 2px solid #ff4d30;
  border-radius: 0.3rem;
  box-shadow: 0 10px 15px 0 rgba(255, 83, 48, 0.25);
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  text-decoration: none;
  transition: all 0.3s;
  width: -moz-fit-content;
  width: -webkit-fit-content;
  width: fit-content;
  width: 100%;
  text-align: center;
  &:hover {
    background-color: #ff7231;
    transition: all 0.23s ease-in-out;
  }
`;

function Footer() {
  const [email, setEmail] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleClick = () => {
    email
      ? toast.success("Successful subscription!")
      : toast.error("Please input your email.");
    setEmail("");
  };
  return (
    <>
      <StyledFooter>
        <Container>
          <h1>Rent Car Co.</h1>
          <p>
            Drive your dream car today. The best cars at the best prices. Car
            rental made easy and affordable. Travel with comfort and
            convenience.
          </p>
          <h4>(02) 882-0925</h4>
          <h4>rentcar@org.co</h4>
        </Container>
        <Container>
          <h1>BRANCHES</h1>
          <ul>
            <li>Makati</li>
            <li>Taguig</li>
            <li>Quezon City</li>
            <li>Mandaluyong</li>
            <li>Pasay</li>
          </ul>
        </Container>
        <Container>
          <h1>BRANCH HOURS</h1>
          <h3>Mon - Sat: 8:00AM - 5:00PM</h3>
          <h3>Sun: Close</h3>
        </Container>
        <Container>
          <h1>NEWS LETTER</h1>
          <p>Subscribe to our news letter for promos and updates</p>
          <input
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={handleEmail}
          />
          <SubscribeButton onClick={handleClick}>SUBSCRIBE</SubscribeButton>
        </Container>
      </StyledFooter>
    </>
  );
}

export default Footer;
