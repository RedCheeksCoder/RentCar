import styled from "styled-components";

const StyledAppDownload = styled.div`
  height: 70dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    cursor: pointer;
    height: 4rem;
  }
  h1 {
    font-size: 3rem;
    margin: 2rem 0 0 0;
    line-height: 1.2;
  }
  p {
    color: #818080ae;
    font-size: 1rem;
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
          <img loading="lazy" src="/google-play.png" alt="" />
          <img loading="lazy" src="/app-store.png" alt="" />
        </div>
      </Details>
      <PhoneContainer>
        <img loading="lazy" src="/phone.png" alt="" />
      </PhoneContainer>
    </StyledAppDownload>
  );
}

export default AppDownload;
