import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./Accordion.css";
import styled from "styled-components";

const StyledFAQ = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;
  b {
    color: #ff7431;
  }
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h4 {
    color: #ff7431;
  }

  h1 {
    margin-block-end: 0;
    margin-block-start: 0;
    font-size: 3rem;
  }
  p {
    color: #818080ae;
    width: 70%;
    font-size: 1rem;
    text-align: center;
  }
`;

const CarImage = styled.div`
  z-index: 10;
  position: absolute;
  left: 0;
  img {
    height: auto;
    width: 30rem;
  }
`;
export default function FAQ() {
  return (
    <StyledFAQ>
      <div>
        <Header>
          <h4>FAQ</h4>
          <h1>Frequently Asked Questions</h1>
          <p>
            Frequently Asked Questions About the Car Rental Booking Process on
            Our Website: Answers to Common Concers and Inquiries
          </p>
        </Header>
      </div>
      <CarImage>
        <img loading="lazy" src="/civic.png" alt="" />
      </CarImage>
      <Accordion allowZeroExpanded={true}>
        {/* Question 1 */}
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <b>1.</b> How can I book a car rental on your website?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Booking is simple! Visit our site, select location, dates, and car
              type. Follow the prompts to securely complete your reservation,
              ensuring a hassle-free experience.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        {/* Question 2 */}
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <b>2.</b> Are there age restrictions for renting a car?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Yes, renters must be 21 or older, with potential additional fees
              for those under 25.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        {/* Question 3 */}
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <b>3.</b> What documents do I need to pick up my rental car?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Bring a valid driver's license, a credit card in your name, and
              proof of insurance. International renters will need a valid
              passport.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        {/* Question 4*/}
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <b>4.</b> Can I modify or cancel my reservation?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Certainly! Online modifications or cancellations are accepted up
              to 24 hours before your scheduled pickup, subject to our
              cancellation policy.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </StyledFAQ>
  );
}
