import styled from "styled-components";

const Inputs = styled.div`
  width: auto;
  margin: 0.5rem;
  p {
    font-size: 1rem;
    font-weight: 400;
    margin: 0;
    color: #777;
  }
  input {
    min-width: 18rem;
    font-size: 1rem;
    background-color: #dbdbdb;
    padding: 1rem;
    width: 40%;
    border: none;
  }
  b {
    color: red;
  }
`;
function Info({ label, type }) {
  return (
    <Inputs>
      <p>
        {label}
        <b>*</b>
      </p>
      <input type={type} required placeholder={`Enter your ${label}`} />
    </Inputs>
  );
}

export default Info;
