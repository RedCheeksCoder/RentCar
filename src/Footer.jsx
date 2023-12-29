import styled from "styled-components";
import Banner from "./Banner";

/* const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;
  margin-top: 3rem;
`; */

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;

  max-width: 70vw; /* limit the width to 70% of the viewport width */
  margin-left: auto; /* center the footer horizontally */
  margin-right: auto;
  overflow: visible; /* allow the content to overflow the container */
`;

const Container = styled.div`
  width: 20%;
  margin-top: 0;
  padding-top: 0;
  h1 {
    font-size: 1.2rem;
  }
  h3 {
    font-size: 1rem;
    font-weight: 500;
  }

  ul {
    list-style: none;
    padding: 0;
  }
  input {
    background-color: #ececec;
    border-color: transparent;
    border-width: 1px;
    font-family: Rubik, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 26px;
    margin-top: 1rem;
    outline: none;
    padding: 10px 48px;
  }
`;

const SubscribeButton = styled.div`
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
  width: 90%;
  text-align: center;
`;

/* const FooterContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
  background-color: grey;
`; */

function Footer() {
  return (
    <>
      <Banner />
      <StyledFooter>
        <Container>
          <h1>Rent Car Co.</h1>
          <p>
            Drive your dream car today. The best cars at the best prices. Car
            rental made easy and affordable. Travel with comfort and
            convenience.
          </p>
          <h2>(02) 882-0925</h2>
          <h2>rentcar@org.co</h2>
        </Container>
        <Container>
          <h1>BRANCHES</h1>
          <ul>
            <li>Makati</li>
            <li>Taguig</li>
            <li>Quezonb City</li>
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
          <input type="text" placeholder="Email Address" />
          <SubscribeButton>SUBSCRIBE</SubscribeButton>
        </Container>
      </StyledFooter>
    </>
  );
}

export default Footer;
