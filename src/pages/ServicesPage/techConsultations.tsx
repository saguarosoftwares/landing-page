// Example for SoftwareSolutions.tsx

import TechConsultationsContent from "../../content/servicesPageContent/TechConsultations"; // Import your content here

import { lazy } from "react";
import ContactContent from "../../content/ContactContent.json";
import useBackgroundColor from "./useBackgroundColor";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const TechConsultations = () => {
  const sections = [
    // { id: "motto", color: "#E5ACAC" },
    { id: "motto", color: "#ffe0b2" },
    // { id: "motto", color: "#597B73" },

    { id: "services", color: "#f4dcdc" },
    { id: "process", color: "#FEC654" },
    { id: "about", color: "#f4dcdc" },
    { id: "contact", color: "#ffe0b2" },
  ];

  let backgroundColor = useBackgroundColor(sections)
  if (backgroundColor == "transparent") {
    backgroundColor = "#597B73";
  } else {
    backgroundColor = "transparent"
  }

  return (
    <Container backgroundColor={backgroundColor}>
      <div className="child" style={{ backgroundColor: backgroundColor }}>
        <MiddleBlock
          title="Escape the Ordinary: Partner with Saguaro Software Solutions to Elevate Your Business to the next level."
          content="If you are not in the business of cutting cookies, why settle for cookie cutter solutions?"
          id="motto"
          backgroundColor={backgroundColor}
        />

        <MiddleBlock
          title="TECH CONSULTATION"
          content= "Your Detailed Guide for Tech Consultation."
          id="motto"
          backgroundColor={backgroundColor}
        />

        <div
          className="content-container"
          dangerouslySetInnerHTML={{ __html: TechConsultationsContent }}
        />

        <Contact
          title={ContactContent.title}
          content={ContactContent.text}
          id="contact"
          backgroundColor={backgroundColor}
        />

      </div>
      <ScrollToTop />
    </Container>
  );
};

export default TechConsultations;
