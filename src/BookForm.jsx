import styled from "styled-components";
import { MdLocationOn } from "react-icons/md";
import { FaCarSide, FaRegCalendarAlt } from "react-icons/fa";
import { ModalProvider } from "styled-react-modal";
import FancyModalButton, { FadingBackground } from "./Modal";
import Reservation from "./Reservation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const StyledBookForm = styled.section`
  box-shadow: -5px 1px 54px 1px rgba(179, 169, 169, 0.3);
  -webkit-box-shadow: -5px 1px 54px 1px rgba(179, 169, 169, 0.3);
  -moz-box-shadow: -5px 1px 54px 1px rgba(179, 169, 169, 0.3);
  display: flex;
  align-items: start;
  flex-direction: column;
  flex-wrap: wrap;
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
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  width: 90%;

  @media (max-width: 1515px) {
    justify-content: center;
    margin-left: 1rem;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  margin: 1rem;
  width: 100%;
  max-width: 22rem;
  label {
    font-weight: 600;
    margin-bottom: 1rem;
    @media (max-width: 800px) {
      margin: 0.5rem;
    }
  }
  select,
  input {
    box-sizing: border-box;
    border: 1px solid #ccd7e6;
    border-radius: 3px;
    color: #ababab;
    font-size: 1rem;
    font-weight: 400;
    outline: none;
    width: 100%;
    padding: 1rem;
  }
  b {
    color: #ff4d30;
  }
  @media (max-width: 1590px) {
    max-width: 30rem;
    margin: 0;
  }
`;

function BookForm() {
  /* Booking form */
  const [carType, setCarType] = useState("");
  const [pickUpLoc, setPickUpLoc] = useState("");
  const [dropOfLoc, setDropOfLoc] = useState("");
  const [dropOfTime, setDropOfTime] = useState("");
  const [pickUpTime, setPickUpTime] = useState("");

  const [completeDetails, setCompleteDetails] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const details = !!(
      carType &&
      pickUpLoc &&
      dropOfLoc &&
      dropOfTime &&
      pickUpTime
    );
    setCompleteDetails(details);
    console.log(completeDetails);
  }, [carType, pickUpLoc, dropOfLoc, dropOfTime, pickUpTime, completeDetails]);

  /* Handler Functions */
  function handleCarType(e) {
    e.preventDefault();
    setCarType(e.target.value);
  }
  function handlePickUpLoc(e) {
    e.preventDefault();
    setPickUpLoc(e.target.value);
  }
  function handlePickUpTime(e) {
    e.preventDefault();
    setPickUpTime(e.target.value);
  }
  function handleDropOfLoc(e) {
    e.preventDefault();
    setDropOfLoc(e.target.value);
  }
  function handleDropOfTime(e) {
    e.preventDefault();
    setDropOfTime(e.target.value);
  }
  function handleReservation(e) {
    toast.success(
      "Successful reservation!. Please check your email for confirmation."
    );
    e.preventDefault();
    setCarType("");
    setPickUpLoc("");
    setPickUpTime("");
    setDropOfLoc("");
    setDropOfTime("");
    toggleModal();
  }

  function toggleModal() {
    setOpacity(0);
    setIsOpen(!isOpen);
  }

  function afterOpen() {
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  }

  function beforeClose() {
    return new Promise((resolve) => {
      setOpacity(0);
      setTimeout(resolve, 300);
    });
  }

  return (
    <StyledBookForm id="bookform">
      <h3>Book your ride</h3>

      <StyledForm>
        <DetailsContainer>
          <label>
            <FaCarSide /> Select Your car type<b>*</b>
          </label>
          <select value={carType} onChange={handleCarType} required>
            <option>Select Car type</option>
            <option value="0">Ford Everest</option>
            <option value="1">Honda BRV</option>
            <option value="2">Isuzu mu-X</option>
            <option value="3">Montero Sport</option>
            <option value="4">Suzuki Ertiga</option>
            <option value="5">Toyota Innova</option>
          </select>
        </DetailsContainer>
        <DetailsContainer>
          <label>
            <MdLocationOn />
            Pick-Up<b>*</b>
          </label>
          <select value={pickUpLoc} onChange={handlePickUpLoc} required>
            <option>Select pick up location</option>
            <option value="Makati">Makati</option>
            <option value="Taguig">Taguig</option>
            <option value="Quezon-city">Quezon city</option>
            <option value="Mandaluyong">Mandaluyong</option>
            <option value="Pasay">Pasay</option>
          </select>
        </DetailsContainer>
        <DetailsContainer>
          <label>
            <MdLocationOn />
            Drop-of<b>*</b>
          </label>
          <select value={dropOfLoc} onChange={handleDropOfLoc} required>
            <option>Select drop of location</option>
            <option value="Makati">Makati</option>
            <option value="Taguig">Taguig</option>
            <option value="Quezon-city">Quezon city</option>
            <option value="Mandaluyong">Mandaluyong</option>
            <option value="Pasay">Pasay</option>
          </select>
        </DetailsContainer>
        <DetailsContainer>
          <label>
            <FaRegCalendarAlt />
            Pick-up<b>*</b>
          </label>
          <input
            value={pickUpTime}
            onChange={handlePickUpTime}
            type="date"
            required
          />
        </DetailsContainer>
        <DetailsContainer>
          <label>
            <FaRegCalendarAlt />
            Drop-of<b>*</b>
          </label>
          <input
            value={dropOfTime}
            onChange={handleDropOfTime}
            type="date"
            required
          />
        </DetailsContainer>
        {}
        <ModalProvider backgroundComponent={FadingBackground}>
          <FancyModalButton
            completeDetails={completeDetails}
            toggleModal={toggleModal}
            afterOpen={afterOpen}
            beforeClose={beforeClose}
            isOpen={isOpen}
            opacity={opacity}>
            <Reservation
              carType={carType}
              pickUpLoc={pickUpLoc}
              pickUpTime={pickUpTime}
              dropOfLoc={dropOfLoc}
              dropOfTime={dropOfTime}
              handleReservation={handleReservation}
            />
          </FancyModalButton>
        </ModalProvider>
      </StyledForm>
    </StyledBookForm>
  );
}

export default BookForm;
