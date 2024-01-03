import styled from "styled-components";

const StyledBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30dvh;
`;

const BannerStyle = styled.div`
  background-color: #2c2c2c;
  opacity: 0.89;
  position: absolute;
  min-width: 100%;
  height: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 2.5rem;
    position: absolute;
    color: white;
    @media (max-width: 570px) {
      font-size: 2rem;
    }
    @media (max-width: 430px) {
      font-size: 1.5rem;
    }
  }
  img {
    display: inline-block;
    opacity: 0.2;
    max-width: 100%;
  }
  span {
    color: #ff4d30;
  }
  @media (max-width: 1050px) {
    text-align: center;
    text-wrap: balance;
  }
`;
function Banner({ children }) {
  return (
    <StyledBanner>
      <BannerStyle>
        <img loading="lazy" src="/banner-image.png" alt="" />
        <h1>{children}</h1>
      </BannerStyle>
    </StyledBanner>
  );
}

export default Banner;
