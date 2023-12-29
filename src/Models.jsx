import styled from "styled-components";
import CartItem from "./CartItem";

const cars = [
  {
    id: 1,
    carName: "Ford Everest",
    ratePerDay: 75,
    brand: "Ford",
    transmissionType: "Automatic",
    seatingCapacity: 7,
    gasolineType: "Diesel",
    image: "/car-models/Ford-Everest.jpg",
  },
  {
    id: 2,
    carName: "Honda BRV",
    ratePerDay: 60,
    brand: "Honda",
    transmissionType: "Automatic",
    seatingCapacity: 7,
    gasolineType: "Petrol",
    image: "/car-models/Honda-BRV.jpg",
  },
  {
    id: 3,
    carName: "Isuzu mu-X",
    ratePerDay: 80,
    brand: "Isuzu",
    transmissionType: "Automatic",
    seatingCapacity: 7,
    gasolineType: "Diesel",
    image: "/car-models/Isuzu-mu-X.jpg",
  },
  {
    id: 4,
    carName: "Montero Sport",
    ratePerDay: 85,
    brand: "Mitsubishi",
    transmissionType: "Automatic",
    seatingCapacity: 7,
    gasolineType: "Diesel",
    image: "/car-models/Mitsubishi-Montero-Sport.jpg",
  },
  {
    id: 5,
    carName: "Suzuki Ertiga",
    ratePerDay: 55,
    brand: "Suzuki",
    transmissionType: "Automatic",
    seatingCapacity: 7,
    gasolineType: "Petrol",
    image: "/car-models/Suzuki-Ertiga.jpg",
  },
  {
    id: 6,
    carName: "Toyota Innova",
    ratePerDay: 65,
    brand: "Toyota",
    transmissionType: "Automatic",
    seatingCapacity: 7,
    gasolineType: "Petrol",
    image: "/car-models/Toyota-Innova.jpg",
  },
];

const StyledModels = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 2rem;
  padding: 1rem;
`;

function Models() {
  return (
    <StyledModels>
      {cars.map((car) => (
        <CartItem car={car} key={car.id} />
      ))}
    </StyledModels>
  );
}

export default Models;
