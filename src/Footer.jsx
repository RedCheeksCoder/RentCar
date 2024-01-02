import styled from "styled-components";

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem auto;
  max-width: 70vw;
  border-top: 1px;
`;

const Container = styled.div`
  width: 20%;
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
    width: 64%;
    text-align: center;
    border-radius: 5px;
    margin-bottom: 0.2rem;
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
  &:hover {
    background-color: #ff7231;
    transition: all 0.23s ease-in-out;
  }
`;

function Footer() {
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
          <input type="text" placeholder="Email Address" />
          <SubscribeButton>SUBSCRIBE</SubscribeButton>
        </Container>
      </StyledFooter>
    </>
  );
}

export default Footer;
