import React, { useState, useEffect } from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';
import {
  Footer,
  Container,
  Row,
  Col,
  ColTitle,
  ColContent,
  BottomBar,
  Title,
  FooterLink,
  Text,
  TextLink,
} from './styles';
// import './App.css';

const App = () => {
  const funFacts = [
    "Did you know that saguaro cacti are found <br />in the Sonoran Desert of Arizona, California, and Mexico?",
    "Did you know that saguaro cacti can grow <br />up to 40-60 feet (12-18 meters) tall?",
    "Did you know that saguaro cacti live for <br />over 150 years?",
    "Did you know that saguaro cacti are slow-growing, <br />taking up to 75 years to grow an arm?",
    "Did you know that saguaro cacti have shallow <br />root systems to collect rainwater quickly?",
    "Did you know that saguaro cacti are protected <br />by law in Arizona due to their slow growth?",
    "Did you know that saguaro cacti blossom white <br />flowers in May and June, pollinated by bats?",
    "Did you know that saguaro cacti develop red, <br />edible fruits in summer, a source of food for animals and humans?",
    "Did you know that saguaro cacti provide nesting <br />sites for birds, including Gila woodpeckers?",
    "Did you know that saguaro cacti are symbolic of <br />the American Southwest?",
    "Did you know that saguaro cacti are classified <br />as tree-like cacti?",
    "Did you know that saguaro cacti have thick, <br />pleated stems that store water during dry seasons?",
    "Did you know that saguaro cacti survive extreme <br />desert temperatures, from below freezing to over 120°F (48°C)?",
    "Did you know that saguaro cacti are named <br />after the Tohono O'odham word for \"sentinel\"?",
    "Did you know that Saguaros National Park <br />protects large populations of these cacti?",
    "Did you know that saguaro cacti are slow to <br />reproduce and rely on birds for seed dispersal?",
    "Did you know that saguaro cacti are sensitive to <br />frost and are often found in frost-free regions?",
    "Did you know that saguaro cacti were used by <br />indigenous people for food, water, and building materials?",
    "Did you know that saguaro cacti face threats <br />from climate change and habitat loss?",
    "Did you know that saguaro cacti are protected by <br />state and national laws in the U.S.?",
    "Did you know that saguaro cacti are iconic in <br />Western films and art?",
    "Did you know that some saguaro cacti grow in <br />crested or cristate forms?",
    "Did you know that saguaro cacti act as carbon <br />sinks, absorbing carbon dioxide?",
    "Did you know that saguaro cacti have roots that <br />extend only a few inches underground?",
    "Did you know that saguaro cacti are adapted to <br />survive in arid conditions with minimal rainfall?"
  ];

  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentFactIndex((prevIndex) => (prevIndex + 1) % funFacts.length);
        setFade(false);
      }, 500); // Match the duration of the transition
    }, 10000); // Change fact every 6 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [funFacts.length]);

  return (
    <Footer>
      <div>
        <Container>
          <Row>
            <Col>
              <Title as={ColTitle}>
                <a href="/">
                  <img src="/img/icons/daguaro.png" alt="" style={{ marginRight: '0.8rem', width: "2.5rem", height: "2.5rem" }} />
                </a>
                Saguaro Software
              </Title>
              <ColContent>
              <Text fade={fade} dangerouslySetInnerHTML={{ __html: funFacts[currentFactIndex] }} />
              </ColContent>
            </Col>
            <Col>
              <Title as={ColTitle}>Our Specialties</Title>
              <ColContent>
                <Text>
                  <TextLink href='https://www.python.org/' target='_blank'>Python</TextLink>
                </Text>
                <Text>
                  <TextLink href='https://react.dev/' target='_blank'>React</TextLink>
                </Text>
                <Text>
                  <TextLink href='https://nodejs.org/en' target='_blank'>Node.js</TextLink>
                </Text>
                <Text>
                  <TextLink href='https://spring.io/projects/spring-boot' target='_blank'>Spring Boot</TextLink>
                </Text>
              </ColContent>
            </Col>
            <Col>
              <Title as={ColTitle}>Other</Title>
              <ColContent>
                <Text>
                  <TextLink href='#!'>Services</TextLink>
                </Text>
                <Text>
                  <TextLink href='#!'>Help</TextLink>
                </Text>
                <Text>
                  <TextLink href='#!'>Privacy Policy</TextLink>
                </Text>
                <Text>
                  <TextLink href='#!'>Cookie Policy</TextLink>
                </Text>
              </ColContent>
            </Col>
            <Col>
              <Title as={ColTitle}>Contact</Title>
              <ColContent>
                <Text>
                  <MDBIcon style={{ marginRight: '0.8rem' }} color='secondary' icon='home' />
                  Los Angeles, CA 90027, US
                </Text>
                <Text>
                  <TextLink href="mailto:admin@saguarosaas.com?Subject=Inquiry%20About%20Services">
                    <MDBIcon style={{ marginRight: '0.8rem' }} color='secondary' icon="envelope" />
                    admin@saguarosaas.com
                  </TextLink>
                </Text>
              </ColContent>
            </Col>
          </Row>
        </Container>
      </div>

      <BottomBar>
        Copyright 2024 © Saguaro Software Solutions LLC -  <FooterLink href='/'>SaguaroSaas.com</FooterLink> - All Rights Reserved.
      </BottomBar>
    </Footer>
  );
};

export default App;
