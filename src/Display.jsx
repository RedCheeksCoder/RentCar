import styled from "styled-components";

const StyledDisplay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;
function Display() {
  return (
    <StyledDisplay>
      <img loading="lazy" src="/bg-removed/vios.png" alt="" />
    </StyledDisplay>
  );
}

export default Display;
