import About from "./AboutContent";
import Contact from "./WhyChoose";
import Testimonies from "./Testimonies";
import Team from "./Team";
import Models from "./Models";

import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Footer from "./Footer";

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  position: relative;
`;

function App() {
  return (
    <StyledApp>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/models" element={<Models />} />
          <Route path="/testimonials" element={<Testimonies />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
