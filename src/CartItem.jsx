import styled from "styled-components";
import ButtonDesign from "./ButtonDesign";

const CarItemDesign = styled.div`
  height: auto;
  padding: 2rem;
  border: 1px solid #d5d5d5;
`;

const ImageContainer = styled.div`
  max-width: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 15rem;
    display: block;
  }
`;
const Heading = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  font-size: 1rem;
`;
const Details = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  margin: 0;
  padding: 0 1rem;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.2rem;
  a {
    width: 100%; /* Set width to 100% of the container */
    height: 100%; /* Set height to 100% of the container */
    text-align: center;
  }
`;
function CartItem({ car }) {
  return (
    <CarItemDesign>
      <ImageContainer>
        <img src={car.image} alt="" />
      </ImageContainer>
      <div>
        <Heading>
          <h1>{car.carName}</h1>
          <h2>{`${car.ratePerDay} $`}</h2>
        </Heading>
        <div>
          <Details>
            <span>Brand:</span> {car.brand}
          </Details>
          <Details>
            <span>Transmission:</span> {car.transmissionType}
          </Details>
          <Details>
            <span>Seating Capacity:</span> {car.seatingCapacity}
          </Details>
          <Details>
            <span>Gasoline type:</span> {car.gasolineType}
          </Details>
        </div>
      </div>
      <hr />
      <Button>
        <ButtonDesign>BOOK RIDE</ButtonDesign>
      </Button>
    </CarItemDesign>
  );
}

export default CartItem;
