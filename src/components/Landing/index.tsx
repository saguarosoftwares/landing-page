// Assuming MiddleBlockProps interface is updated to include backgroundImage
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";
import { SvgIcon } from "../../common/SvgIcon";


interface MiddleBlockProps {
  title: string;
  content: string[];
  button: string;
  backgroundImage?: string;  // Optional background image URL
  t: any;
  id: string;
}

const LandingBlock = ({ title, content, button, backgroundImage, t, id }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <MiddleBlockSection backgroundImage={backgroundImage} id={id}>
        <SvgIcon src="LANDING_BUTTE_2.svg" width="100%" height="auto" />
    </MiddleBlockSection>
  );  
};
export default LandingBlock;

// export default withTranslation()(MiddleBlock);