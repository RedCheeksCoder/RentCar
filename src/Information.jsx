import styled from "styled-components";

const StyledInformation = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 5rem;
  b {
    color: red;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    padding: 0 2rem;
    label {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    input {
      background-color: #f2f2f2;
      border: none;
      font-size: 1rem;
      outline: none;
      padding: 19px 30px;
      margin-bottom: 1rem;
    }
    textarea {
      height: 18rem;
      margin-bottom: 2.5rem;
      background-color: #f2f2f2;
      border: none;
      font-size: 1rem;
      outline: none;
      padding: 19px 30px;
    }
  }
`;

const Details = styled.div`
  font-size: 1.2rem;
  margin: 0 2rem;
  width: 70%;
`;
function Information() {
  return (
    <StyledInformation>
      <Details>
        <h1>Contact us for more details</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut eos aut
          quis. Dolor, hic sint.
        </p>
        <p>(02) 882-0925</p>
        <p>rentcar@org.co</p>
      </Details>
      <form>
        <label>
          Name
          <b>*</b>
        </label>
        <input type="text" placeholder="Juan Dela Cruz" />
        <label>
          Email
          <b>*</b>
        </label>
        <input type="text" placeholder="juandelacruz@gmail.com" />
        <label>
          Tell us about it
          <b>*</b>
        </label>
        <textarea placeholder="Write here ..."></textarea>
      </form>
    </StyledInformation>
  );
}

export default Information;
