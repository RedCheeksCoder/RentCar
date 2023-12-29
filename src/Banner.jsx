import styled from "styled-components";

const StyledBanner = styled.div`
  height: 30dvh;
`;

const BannerStyle = styled.div`
  background-color: #2c2c2c;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  opacity: 0.89;
  position: absolute;
  left: 0;
  width: 100%;
  margin: 0;
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
function Banner() {
  return (
    <StyledBanner>
      <BannerStyle>
        <img src="/banner-image.png" alt="" />
        <h1>
          RESERVE A CAR VIA OUR CONTACT <span>(02) 882-0925</span>
        </h1>
      </BannerStyle>
    </StyledBanner>
  );
}

export default Banner;
