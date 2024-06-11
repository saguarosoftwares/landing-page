import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { 
  Footer, 
  Section,
  Connect,
  SocialLinks,
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

import Header from '../Header';

const App = () => {
  return (
    <Footer>
      {/* <Section>
        <Connect>
          <span>Get connected with us on social networks:</span>
        </Connect>

        <SocialLinks>
          <a href='' aria-label='Facebook'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' aria-label='Twitter'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' aria-label='Google'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='' aria-label='Instagram'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' aria-label='LinkedIn'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='' aria-label='GitHub'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </SocialLinks>
      </Section> */}

      <Container>
        <MDBContainer className='text-center text-md-start mt-5'>
          <Row>
            <MDBCol md='3' lg='4' xl='3'>
              <Col>
                <Title as={ColTitle}>
                  {/* <MDBIcon style={{ marginRight: '1rem' }} color='secondary' icon='gem' /> */}
                  <img src="/img/icons/daguaro.png" alt="" style={{ marginRight: '0.8rem', width:"2.5rem", height:"2.5rem" }} />
                  Saguaro Software
                </Title>
                <ColContent>
                  <Text>
                    Did you know that Saguaro <br/> cacti can live over 150 <br/> years and grow up to <br/> 40-60 feet tall?
                  </Text>
                </ColContent>
              </Col>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2'>
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
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2'>
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
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3'>
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
            </MDBCol>
          </Row>
        </MDBContainer>
      </Container>

      <BottomBar>
        Copyright 2024 © Saguaro Software Solutions LLC -  <FooterLink href='/'>SaguaroSaas.com</FooterLink> - All Rights Reserved.
      </BottomBar>
    </Footer>
  );
};

export default App;
