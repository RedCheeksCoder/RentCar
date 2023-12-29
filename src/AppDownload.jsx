import styled from "styled-components";

const StyledAppDownload = styled.div`
  height: 50dvh;
  display: flex;

  img {
    cursor: pointer;
    height: 5rem;
  }
  h1 {
    font-size: 3rem;
    margin: 2rem 0 0 0;
    line-height: 1.2;
  }
`;

const Details = styled.div`
  width: 50%;
  padding: 1rem;
  margin: 1rem;
`;

const PhoneContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8rem;
  img {
    height: 25rem;
  }
`;
function AppDownload() {
  return (
    <StyledAppDownload>
      <Details>
        <h1>Download our app for more news and updates</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
          sapiente natus eos minus animi sed dignissimos ullam perferendis vel
          veniam.
        </p>
        <div>
          <img src="/google-play.png" alt="" />
          <img src="/app-store.png" alt="" />
        </div>
      </Details>
      <PhoneContainer>
        <img src="/phone.png" alt="" />
      </PhoneContainer>
    </StyledAppDownload>
  );
}

export default AppDownload;
