import styled from "styled-components";
import { MdLocationOn } from "react-icons/md";
import { FaCarSide, FaRegCalendarAlt } from "react-icons/fa";
import { ModalProvider } from "styled-react-modal";
import FancyModalButton, { FadingBackground } from "./Modal";
import Reservation from "./Reservation";

const StyledBookForm = styled.div`
  box-shadow: -5px 1px 54px 1px rgba(179, 169, 169, 0.3);
  -webkit-box-shadow: -5px 1px 54px 1px rgba(179, 169, 169, 0.3);
  -moz-box-shadow: -5px 1px 54px 1px rgba(179, 169, 169, 0.3);
  display: flex;
  align-items: start;
  flex-direction: column;
  max-width: 100%;
  padding-bottom: 1rem;
  border-radius: 9px;
  h3 {
    margin-left: 3rem;
  }
`;

const StyledForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0 2rem 2rem 2rem;
  width: 100%;
  a {
    width: 25%;
    height: 2rem;
    text-align: center;
    font-family: "Poppins", sans-serif;
    margin-top: 2rem;
    margin-left: 1rem;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  margin: 1rem 2rem 1rem 1rem;
  width: 25%;
  label {
    font-weight: 600;
    margin-bottom: 1rem;
  }
  select,
  input {
    border: 1px solid #ccd7e6;
    border-radius: 3px;
    color: #ababab;
    font-size: 1rem;
    font-weight: 400;
    outline: none;
    width: 20rem;
    padding: 1rem;
  }
  b {
    color: #ff4d30;
  }
`;
function BookForm() {
  return (
    <StyledBookForm>
      <h3>Book your ride</h3>
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
        <ModalProvider backgroundComponent={FadingBackground}>
          <FancyModalButton>
            <Reservation />
          </FancyModalButton>
        </ModalProvider>
      </StyledForm>
    </StyledBookForm>
  );
}

export default BookForm;
