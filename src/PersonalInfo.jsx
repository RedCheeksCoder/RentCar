import styled from "styled-components";
import Info from "./Info";

const StyledPersonalInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const Label = styled.h2`
  color: #ff4d30;
  padding-left: 1rem;
`;

function PersonalInfo() {
  return (
    <>
      <Label>PERSONAL INFORMATION</Label>
      <StyledPersonalInfo>
        <Info label={"First Name"} type={"text"} />
        <Info label={"Last Name"} type={"text"} />
        <Info label={"Phone number"} type={"tel"} />
        <Info label={"Age"} type={"number"} />
        <Info label={"Email"} type={"text"} />
        <Info label={"Address"} type={"text"} />
        <Info label={"Zip Code"} type={"number"} />
      </StyledPersonalInfo>
    </>
  );
}

export default PersonalInfo;
