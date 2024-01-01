import styled from "styled-components";

const StyledRegistration = styled.div`
  background-color: #ff7231;
  box-shadow: 0 10px 15px 0 rgba(255, 83, 48, 0.35);
  border-radius: 7px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 1rem;
  font-weight: bold;
  padding: 12px 20px;
  text-decoration: none;
`;
function Registration() {
  return (
    <div>
      <StyledRegistration>Registration</StyledRegistration>
    </div>
  );
}

export default Registration;
