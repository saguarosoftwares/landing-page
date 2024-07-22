// Assuming MiddleBlockProps interface is updated to include backgroundImage
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper, Title, Subtitle } from "./styles";

interface MiddleBlockProps {
  title: string;
  content: string;
  // button: string;
  // backgroundImage?: string;  // Optional background image URL
  t: any;
  id: string;
  backgroundColor: string
}

const MiddleBlock = ({ title, content, t, id, backgroundColor}: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <MiddleBlockSection style={{backgroundColor: backgroundColor}}>
      {/* <Slide direction="up"> */}
        <Row justify="center" align="middle" id={id}>
          <ContentWrapper>
            {/* <Col lg={24} md={24} sm={24} xs={24}> */}
              <Title>{t(title)}</Title>
              <Subtitle>Innovating Solutions, Delivering Success, and Fostering Partnerships</Subtitle>
              <p>{t(content)}</p>
              <p>At Saguaro Software Solutions, we understand that every client is unique and deserves a custom solution that aligns with their vision. Our goal is to deliver tailored software solutions that not only meet but exceed our clients' expectations, ensuring their success and growth. We are committed to turning our clients' ideas into reality, providing innovative and effective solutions that drive their business forward.</p>
            {/* </Col> */}
          </ContentWrapper>
        </Row>
      {/* </Slide> */}
    </MiddleBlockSection>
  );  
};

export default withTranslation()(MiddleBlock);