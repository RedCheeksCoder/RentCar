import About from "./About";
import Contact from "./Contact";
import Testimonials from "./Testimonials";
import OurTeam from "./OurTeam";
import Models from "./Models";

import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import { Toaster } from "react-hot-toast";

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
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
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: { duration: 2500 },
            error: { duration: 5000 },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "#ffffff",
              color: "#808080",
            },
          }}
        />
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
