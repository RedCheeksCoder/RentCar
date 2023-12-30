import styled from "styled-components";

const BookRide = styled.a`
  background-color: #ff7231;
  box-shadow: 0 10px 15px 0 rgba(255, 83, 48, 0.35);
  border-radius: 7px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 1.6rem;
  font-weight: bold;
  padding: 12px 15px;
  text-decoration: none;
`;
function ButtonDesign({ children }) {
  return <BookRide>{children}</BookRide>;
}

export default ButtonDesign;
