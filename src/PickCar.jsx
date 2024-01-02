import styled from "styled-components";
import ButtonDesign from "./ButtonDesign";
import { useState } from "react";

const pickCars = [
  {
    id: 0,
    carName: "Everest",
    ratePerDay: 75,
    brand: "Ford",
    transmissionType: "Automatic",
    seatingCapacity: 7,
    gasolineType: "Diesel",
    image: "/bg-removed/0.png",
  },
  {
    id: 1,
    carName: "BRV",
    ratePerDay: 60,
    brand: "Honda",
    transmissionType: "Automatic",
    seatingCapacity: 7,
    gasolineType: "Petrol",
    image: "/bg-removed/1.png",
  },
  {
    id: 2,
    carName: "mu-X",
    ratePerDay: 80,
    brand: "Isuzu",
    transmissionType: "Automatic",
    seatingCapacity: 7,
    gasolineType: "Diesel",
    image: "/bg-removed/2.png",
  },
  {
    id: 3,
    carName: "Montero",
    ratePerDay: 85,
    brand: "Mitsubishi",
    transmissionType: "Automatic",
    seatingCapacity: 7,
    gasolineType: "Diesel",
    image: "/bg-removed/3.png",
  },
  {
    id: 4,
    carName: "Ertiga",
    ratePerDay: 55,
    brand: "Suzuki",
    transmissionType: "Automatic",
    seatingCapacity: 7,
    gasolineType: "Petrol",
    image: "/bg-removed/4.png",
  },
  {
    id: 5,
    carName: "Innova",
    ratePerDay: 65,
    brand: "Toyota",
    transmissionType: "Automatic",
    seatingCapacity: 7,
    gasolineType: "Petrol",
    image: "/bg-removed/5.png",
  },
];

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
  h3 {
    color: #ff7231;
    font-size: 1.3rem;
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
    height: 20rem;
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
    font-size: 1.5rem;
  }
`;

const Price = styled.div`
  font-size: 1.5rem;
  background-color: #ff7231;
  color: white;
  padding: 0.8rem;
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
  font-size: 1rem;
  width: 100%;
  margin: 0.5rem 0;
  padding: 0 0.5rem;
  column-gap: 2rem;
  border: 2px solid #706f7b;
`;

const ButtonReserve = styled.a`
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

function PickCar() {
  const [carId, setCarId] = useState(0);
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
            <li onClick={() => setCarId(0)}>Ford Everest</li>
            <li onClick={() => setCarId(1)}>Honda BRV</li>
            <li onClick={() => setCarId(2)}>Isuzu mu-X</li>
            <li onClick={() => setCarId(3)}>Montero Sport</li>
            <li onClick={() => setCarId(4)}>Suzuki Ertiga</li>
            <li onClick={() => setCarId(5)}>Toyota Innova</li>
          </ul>
        </Choices>
        <CarImage>
          <img src={pickCars[carId].image} alt="" />
        </CarImage>
        <Details>
          <Price>
            <span>
              <strong>{`${pickCars[carId].ratePerDay}$`}</strong>
            </span>{" "}
            /rate per day
          </Price>
          <Table>
            <TableData>
              <div>Brand</div>
              <div>{pickCars[carId].brand}</div>
            </TableData>
            <TableData>
              <div>Model</div>
              <div>{pickCars[carId].carName}</div>
            </TableData>

            <TableData>
              <div>Capacity</div>
              <div>{pickCars[carId].seatingCapacity}</div>
            </TableData>
            <TableData>
              <div>Transmission</div>
              <div>{pickCars[carId].transmissionType}</div>
            </TableData>
            <TableData>
              <div>Fuel</div>
              <div>{pickCars[carId].gasolineType}</div>
            </TableData>
          </Table>
          <ButtonReserve href="#bookform">RESERVE NOW</ButtonReserve>
        </Details>
      </PickInformation>
    </StyledPickCar>
  );
}

export default PickCar;
