import styled from "styled-components";
import Modal, { BaseModalBackground } from "styled-react-modal";

const StyledModal = Modal.styled`
margin-top: 10rem;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;
 font-family: "Poppins";
  `;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6rem;
  min-width: 20%;
  max-width: 100%;
  font-family: "Poppins";
`;

const Button = styled.button`
  background-color: #ff7231;
  border-radius: 7px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 1rem;
  font-weight: bold;
  padding: 1rem;
  text-decoration: none;
  width: 22rem;
  text-align: center;
  align-self: self-end;
  margin-left: 1rem;

  @media (max-width: 1000px) {
    margin-left: 0;
    width: 30rem;
    border: none;
    outline: none;
  }
`;

function FancyModalButton({
  children,
  toggleModal,
  afterOpen,
  beforeClose,
  isOpen,
  opacity,
  completeDetails,
}) {
  return (
    <ButtonContainer>
      <Button onClick={toggleModal} disabled={completeDetails ? false : true}>
        Search
      </Button>

      <StyledModal
        isOpen={isOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        opacity={opacity}
        backgroundProps={{ opacity }}>
        <span>{children}</span>
      </StyledModal>
    </ButtonContainer>
  );
}

export const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
`;

export default FancyModalButton;
