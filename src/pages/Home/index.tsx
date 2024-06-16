import { lazy } from "react";
import ServicesContent from "../../content/ServicesContent.json";
import MissionContent from "../../content/MissionContent.json";
import AboutContent from "../../content/AboutContent.json";
import ContactContent from "../../content/ContactContent.json";
import useBackgroundColor from "./useBackgroundColor";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));




const Home = () => {
  const sections = [
    { id: "motto", color: "#ffe0b2" },
    { id: "services", color: "#f4dcdc" },
    { id: "process", color: "#FEC654" },
    { id: "about", color: "#597B73" },
    { id: "contact", color: "#ffe0b2" },
  ];

  let backgroundColor = useBackgroundColor(sections) 
  if (backgroundColor == "transparent") {
    backgroundColor = "#597B73";
  } else {
    backgroundColor = "transparent"
  }

  return (
    <Container>
      <ScrollToTop />

      <MiddleBlock
        title="Escape the Ordinary: Partner with Saguaro Software Solutions to Elevate Your Business to the next level."
        content="If you are not in the business of cutting cookies, why settle for cookie cutter solutions?"
        id="motto"
        backgroundColor={backgroundColor}
      />
        
      <ContentBlock
        type="center"
        title={ServicesContent.title}
        content={ServicesContent.text}
        section={ServicesContent.section}
        icon="SDLC.svg"
        id="services"
        backgroundColor={backgroundColor}
      />
      <MiddleBlock
        // type="right"
        title="Our Process"
        content={MissionContent.text}
        // icon="MISSION.svg"
        id="process"
        backgroundColor={backgroundColor}
      />
      <MiddleBlock
        // type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        // icon="ANIMATED_PROGRAMMER.svg"
        id="about"
        backgroundColor={backgroundColor}
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
        backgroundColor={backgroundColor}
      />
    </Container>
  );
};

export default Home;
