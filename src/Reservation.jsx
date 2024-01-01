import styled from "styled-components";
import PersonalInfo from "./PersonalInfo";
import ButtonDesign from "./ButtonDesign";

const StyledReservation = styled.div`
  max-height: 90vh;
  width: 40vw;
  background-color: white;
  overflow-x: hidden;
  overflow-y: scroll;
  padding-bottom: 10rem;
`;

const ButtonReserve = styled.div`
  background-color: #777;
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 4rem;
`;

const Heading = styled.div`
  background-color: #ff7231;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeaderTitle = styled.div`
  box-sizing: border-box;
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0.5rem 0 0.5rem 1rem;
`;

const HeaderContent = styled.div`
  color: #ff7231;
  background-color: #f7cdba;
  padding: 0 1rem;
  h2 {
    font-size: 1rem;
  }
  p {
    color: #808080c8;
    font-size: 0.8rem;
    font-weight: 500;
  }
`;
const ReservationInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
`;

const ReservationInput = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  h2 {
    color: #ff7231;
  }
`;

const ReservationCarType = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 50%;
  margin: 1rem 0;
  img {
    height: 100%;
    width: 100%;
  }
  h2 {
    color: #ff7231;
  }
`;

const LocationAndDate = styled.div`
  font-size: 1rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  margin: 0.7rem;
`;

const Info = styled.div`
  padding-left: 1rem;
  span {
    color: #808080c8;
  }
  input {
    font-size: 1rem;
    color: #808080c8;
  }
`;

const Updates = styled.div`
  padding-left: 2rem;
  padding-top: 2rem;
  font-size: 1.2rem;
`;
function Reservation() {
  return (
    <StyledReservation>
      <Heading>
        <HeaderTitle>
          <span>COMPLETE RESERVATION</span>
        </HeaderTitle>
        <HeaderContent>
          <h2>Upon completing this reservation enquiry, you will receive:</h2>
          <p>
            Your rental vouter to produce on arrival at th rental desk and a
            tool-free customer support number
          </p>
        </HeaderContent>
      </Heading>
      <ReservationInfo>
        <ReservationInput>
          <h2>Location and Date</h2>
          <LocationAndDate>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-clock-filled"
              width="2rem"
              height="2rem"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-5 2.66a1 1 0 0 0 -.993 .883l-.007 .117v5l.009 .131a1 1 0 0 0 .197 .477l.087 .1l3 3l.094 .082a1 1 0 0 0 1.226 0l.094 -.083l.083 -.094a1 1 0 0 0 0 -1.226l-.083 -.094l-2.707 -2.708v-4.585l-.007 -.117a1 1 0 0 0 -.993 -.883z"
                strokeWidth="0"
                fill="currentColor"
              />
            </svg>
            <Info>
              <div>Pick-Up Date and Time</div>
              <div>
                <span>
                  2024-01-11/ <input type="time" />
                </span>
              </div>
            </Info>
          </LocationAndDate>
          <LocationAndDate>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-clock-filled"
              width="2rem"
              height="2rem"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-5 2.66a1 1 0 0 0 -.993 .883l-.007 .117v5l.009 .131a1 1 0 0 0 .197 .477l.087 .1l3 3l.094 .082a1 1 0 0 0 1.226 0l.094 -.083l.083 -.094a1 1 0 0 0 0 -1.226l-.083 -.094l-2.707 -2.708v-4.585l-.007 -.117a1 1 0 0 0 -.993 -.883z"
                strokeWidth="0"
                fill="currentColor"
              />
            </svg>
            <Info>
              <div>Drop-Of Date and Time</div>
              <div>
                <span>
                  2024-01-11/ <input type="time" />
                </span>
              </div>
            </Info>
          </LocationAndDate>
          <LocationAndDate>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-map-pin-filled"
              width="2rem"
              height="2rem"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                strokeWidth="0"
                fill="currentColor"
              />
            </svg>
            <Info>
              <div>Pick-Up Location</div>
              <div>
                <span>Taguig, BGC</span>
              </div>
            </Info>
          </LocationAndDate>
          <LocationAndDate>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-map-pin-filled"
              width="2rem"
              height="2rem"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                strokeWidth="0"
                fill="currentColor"
              />
            </svg>
            <Info>
              <div>Drop-Of Location</div>
              <div>
                <span>Ayala Triangle</span>
              </div>
            </Info>
          </LocationAndDate>
        </ReservationInput>

        <ReservationCarType>
          <h2>Toyota Vios</h2>
          <img src="/bg-removed/5.png" alt="" />
        </ReservationCarType>
      </ReservationInfo>
      <PersonalInfo />
      <Updates>
        <input type="checkbox" />
        <span>Please send me latest news and updates</span>
      </Updates>
      <ButtonReserve>
        <ButtonDesign>Reserve Now</ButtonDesign>
      </ButtonReserve>
    </StyledReservation>
  );
}

export default Reservation;
