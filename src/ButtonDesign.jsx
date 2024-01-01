import styled from "styled-components";

const BookRide = styled.a`
  background-color: #ff7231;
  box-shadow: 0 10px 15px 0 rgba(255, 83, 48, 0.35);
  border-radius: 3px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 1rem;
  font-weight: bold;
  padding: 1rem;
  text-decoration: none;
  &:hover {
    background-color: #ff7231c5;
    transition: all 0.3s;
  }
`;
function ButtonDesign({ children }) {
  return <BookRide>{children}</BookRide>;
}

export default ButtonDesign;
