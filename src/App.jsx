import About from "./About";
import Contact from "./Contact";
import Testimonials from "./Testimonials";
import OurTeam from "./OurTeam";
import Models from "./Models";

import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";

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
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
