import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import ServicesContent from "../../content/ServicesContent.json";
import MissionContent from "../../content/MissionContent.json";
import AboutContent from "../../content/AboutContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      {/* <MiddleBlock
        title={IntroContent.title}
        content={IntroContent.launchText}
        button={MiddleBlockContent.button}
        backgroundImage="LANDING_BUTE.svg"
      /> */}

      {/* <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="saguaro_software_solutions.svg"
        id="intro"
      /> */}
      <MiddleBlock
        title={MiddleBlockContent.title}
        // content={MiddleBlockContent.text}
        content={IntroContent.launchText}
        button={MiddleBlockContent.button}
        backgroundImage="LANDING_BUTTE.svg"
        id="intro"
      />
      <ContentBlock
        type="left"
        title={ServicesContent.title}
        content={ServicesContent.text}
        section={ServicesContent.section}
        icon="SDLC.svg"
        id="services"
      />
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="MISSION.svg"
        id="mission"
      />
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        icon="ANIMATED_PROGRAMMER.svg"
        id="about"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
