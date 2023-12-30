import styled from "styled-components";

const ImageContainer = styled.div`
  max-width: 100%;
  overflow: hidden;

  img {
    width: 60%;
    height: auto;
    display: block;
  }
`;
function CarCollection() {
  return (
    <ImageContainer>
      <img src="/solo-car2.png" alt="" />
    </ImageContainer>
  );
}

export default CarCollection;
