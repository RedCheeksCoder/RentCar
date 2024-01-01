import { useEffect, useState } from "react";
import styled from "styled-components";

const ToTopButton = styled.div`
  background-color: #ff7231;
  position: fixed;
  bottom: 16px;
  right: 32px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
  text-decoration: none;
  opacity: 0;
  pointer-events: none;
  transition: all 0.4s;
  cursor: pointer;

  &.active {
    bottom: 32px;
    pointer-events: auto;
    opacity: 1;
  }
`;

const ScrollToTopButton = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ToTopButton className={isActive ? "active" : ""} onClick={scrollToTop}>
      ^
    </ToTopButton>
  );
};

export default ScrollToTopButton;
