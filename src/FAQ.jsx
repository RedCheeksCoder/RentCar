import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./Accordion.css";

export default function FAQ() {
  return (
    <Accordion allowZeroExpanded={true}>
      {/* Question 1 */}
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            1. How can I book a car rental on your website?
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
            2. Are there age restrictions for renting a car?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Yes, renters must be 21 or older, with potential additional fees for
            those under 25.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      {/* Question 3 */}
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            3. What documents do I need to pick up my rental car?
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
            4. Can I modify or cancel my reservation?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Certainly! Online modifications or cancellations are accepted up to
            24 hours before your scheduled pickup, subject to our cancellation
            policy.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}
