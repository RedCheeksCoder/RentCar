import styled from "styled-components";
import { MdLocationOn } from "react-icons/md";
import { FaCarSide, FaRegCalendarAlt } from "react-icons/fa";
import ButtonDesign from "./ButtonDesign";

const StyledBookForm = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  max-width: 100%;
  margin: 2rem 0;
  h1 {
    margin-left: 1rem;
  }
`;

const StyledForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  a {
    width: 28%;
    height: 3rem;
    text-align: center;
    font-family: "Poppins", sans-serif;
    margin-top: 2rem;
    margin-left: 1rem;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  margin: 1rem 2rem 1rem 1rem;
  width: 30%;
  label {
    font-weight: 400;
    margin-bottom: 1rem;
  }
  select,
  input {
    border: 1px solid #ccd7e6;
    border-radius: 3px;
    color: #ababab;
    font-size: 1.5rem;
    font-weight: 400;
    outline: none;
    padding: 0.5rem;
    width: 100%;
  }
  b {
    color: #ff4d30;
  }
`;
function BookForm() {
  return (
    <StyledBookForm>
      <h1>Book your ride</h1>
      <StyledForm>
        <DetailsContainer>
          <label>
            <FaCarSide /> Select Your car type<b>*</b>
          </label>
          <select required>
            <option value="everest">Ford Everest</option>
            <option value="brv">Honda BRV</option>
            <option value="mux">Isuzu mu-X</option>
            <option value="montero">Montero Sport</option>
            <option value="ertiga">Suzuki Ertiga</option>
            <option value="innova">Toyota Innova</option>
          </select>
        </DetailsContainer>
        <DetailsContainer>
          <label>
            <MdLocationOn />
            Pick-Up<b>*</b>
          </label>
          <select required>
            <option value="makati">Makati</option>
            <option value="taguig">Taguig</option>
            <option value="quezon-city">Quezon city</option>
            <option value="mandaluyong">Mandaluyong</option>
            <option value="pasay">Pasay</option>
          </select>
        </DetailsContainer>
        <DetailsContainer>
          <label>
            <MdLocationOn />
            Drop-of<b>*</b>
          </label>
          <select required>
            <option value="makati">Makati</option>
            <option value="taguig">Taguig</option>
            <option value="quezon-city">Quezon city</option>
            <option value="mandaluyong">Mandaluyong</option>
            <option value="pasay">Pasay</option>
          </select>
        </DetailsContainer>
        <DetailsContainer>
          <label>
            <FaRegCalendarAlt />
            Pick-up<b>*</b>
          </label>
          <input type="date" />
        </DetailsContainer>
        <DetailsContainer>
          <label>
            <FaRegCalendarAlt />
            Drop-of<b>*</b>
          </label>
          <input type="date" />
        </DetailsContainer>
        <ButtonDesign>Search</ButtonDesign>
      </StyledForm>
    </StyledBookForm>
  );
}

export default BookForm;
