import styled from "styled-components";

const StyledAppDownload = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 70dvh;
  min-height: 40dvh;
  width: 100%;
  margin: 3rem 0;

  img {
    cursor: pointer;
    height: 5rem;
  }
  h1 {
    font-size: 3rem;
    margin: 1rem 0 0 0;
    line-height: 1.2;
    @media (max-width: 1325px) {
      font-size: 2rem;
      margin: 0;
    }
  }
  p {
    color: #818080ae;
    font-size: 1rem;
  }
  @media (max-width: 850px) {
    text-align: center;
    flex-direction: column;
  }
`;

const Details = styled.div`
  width: 50%;
  @media (max-width: 850px) {
    width: 90%;
    margin: 0;
  }
`;

const PhoneContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 4rem;
  img {
    height: 25rem;
    @media (max-width: 1250px) {
      height: 20rem;
    }
    @media (max-width: 850px) {
      display: none;
    }
  }
`;

const AppStoreContainer = styled.div`
  img {
    margin: 0 1rem;
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
        <AppStoreContainer>
          <img loading="lazy" src="/google-play.png" alt="" />
          <img loading="lazy" src="/app-store.png" alt="" />
        </AppStoreContainer>
      </Details>
      <PhoneContainer>
        <img loading="lazy" src="/phone.png" alt="" />
      </PhoneContainer>
    </StyledAppDownload>
  );
}

export default AppDownload;
