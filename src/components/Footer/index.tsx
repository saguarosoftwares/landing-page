import { Row } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  NavLink,
  Extra,
  LogoContainer,
  FooterContainer
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="250px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
            <SocialLink
                href="https://github.com/Adrinlol/create-react-app-adrinlol"
                src="github.svg"
              />
              <SocialLink
                href="https://twitter.com/Adrinlolx"
                src="twitter.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/in/lasha-kakabadze/"
                src="linkedin.svg"
              />
              <SocialLink
                href="https://medium.com/@lashakakabadze/"
                src="medium.svg"
              />

              <div style={{ marginRight: '100px' }}>
                <a href="mailto:admin@saguarosaas.com?Subject=Inquiry%20about%20Services">
                  <img
                    src="/img/svg/email-icon.svg"
                    alt=""
                    width="25px"
                    height="25px"
                  />
                </a>
              </div>
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
