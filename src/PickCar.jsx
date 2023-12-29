import styled from "styled-components";
import ButtonDesign from "./ButtonDesign";

const StyledPickCar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PickTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  h1,
  h3,
  p {
    margin: 0.1rem 0;
    padding: 0;
  }
  h1 {
    font-size: 3rem;
  }
  p {
    max-width: 50%;
    color: #808080c8;
  }
`;

const PickInformation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Choices = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  padding: 0.5rem;
  li {
    margin: 0.2rem 0;
    padding: 0.7rem 3rem;
    list-style: none;
    background-color: #e9e9e9;
    cursor: pointer;
    &:hover {
      background-color: #ff7231;
      color: white;
      transition: all 0.23s ease-in-out;
    }
  }
`;

const CarImage = styled.div`
  max-width: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 15rem;
    display: block;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 0 1.5rem 0 0.5rem;
  a {
    width: 100%; /* Set width to 100% of the container */
    height: 100%; /* Set height to 100% of the container */
    text-align: center;
    border-radius: 0;
  }
`;

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  background-color: #ff7231;
  color: white;
  padding: 0.5rem;
  width: 100%;
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  /* text-align: center; */
`;

const TableData = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 1.2rem;
  width: 100%;
  margin: 0.5rem 0;
  column-gap: 2rem;
  border: 2px solid #706f7b;
`;

function PickCar() {
  return (
    <StyledPickCar>
      <PickTitle>
        <h3>Vehicle Models</h3>
        <h1>Our rental fleet</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
          voluptatum voluptas! Modi laboriosam dignissimos aliquid.
        </p>
      </PickTitle>
      <PickInformation>
        <Choices>
          <ul>
            <li>Ford Everest</li>
            <li>Honda BRV</li>
            <li>Isuzu mu-X</li>
            <li>Montero Sport</li>
            <li>Suzuki Ertiga</li>
            <li>Toyota Innova</li>
          </ul>
        </Choices>
        <CarImage>
          <img src="/car-models/Ford-Everest.jpg" alt="" />
        </CarImage>
        <Details>
          <Price>
            <span>
              <stong>50$</stong>
            </span>{" "}
            /rate per day
          </Price>
          <Table>
            <TableData>
              <div>Model</div>
              <div>Everest</div>
            </TableData>
            <TableData>
              <div>Brand</div>
              <div>Ford</div>
            </TableData>
            <TableData>
              <div>Capacity</div>
              <div>7</div>
            </TableData>
            <TableData>
              <div>Transmission</div>
              <div>Manual</div>
            </TableData>
            <TableData>
              <div>Fuel</div>
              <div>Diesel</div>
            </TableData>
          </Table>
          <ButtonDesign>RESERVE NOW</ButtonDesign>
        </Details>
      </PickInformation>
    </StyledPickCar>
  );
}

export default PickCar;
