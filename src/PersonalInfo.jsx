import styled from "styled-components";
import Info from "./Info";
import { useState } from "react";

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
  /* Personal information form */
  /* const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [number, setNumber] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  function handleFirstname() {}
  function handleLastname() {}
  function handleNumber() {}
  function handleAge() {}
  function handleEmail() {}
  function handleAddress() {} */
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
        {/* <Info label={"Zip Code"} type={"number"} /> */}
      </StyledPersonalInfo>
    </>
  );
}

export default PersonalInfo;
