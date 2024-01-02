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
  width: 100%;
  height: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 2.5rem;
    position: absolute;
    color: white;
  }
  img {
    display: block;
    opacity: 0.2;
  }
  span {
    color: #ff4d30;
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
