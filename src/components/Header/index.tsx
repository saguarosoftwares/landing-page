import { useState, useEffect } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
  SvgContainer
} from "./styles";
import { ReactSVG } from 'react-svg';

const Header = ({ t, svgInNavbar }: any) => {
  const [isFixed, setIsFixed] = useState(false);

  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  useEffect(() => {
    const handleScroll = () => {
      const introElement = document.getElementById("intro");
      if (introElement) {
        const landingHeight = introElement.offsetHeight;
        const scrollPosition = window.pageYOffset;

        // Check if the scroll position exceeds the height of the landing component
        if (scrollPosition > landingHeight) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      } else {
        console.warn("Element with id 'intro' not found.");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <>
        <CustomNavLinkSmall onClick={() => scrollTo("services")}>
          <Span>{t("SERVICES")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("mission")}>
          <Span>{t("MISSION")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("about")}>
          <Span>{t("ABOUT")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={() => scrollTo("contact")}
        >
          <Span>
            <Button>{t("LET'S TALK!")}</Button>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection id={"navbar"} className={isFixed ? "fixed" : ""}>
      <Container>
        <Row justify="space-between" align="middle">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="LOGO_MOBILE.svg" width="350px" height="80px" />
          </LogoContainer>

          {svgInNavbar && (
          <SvgContainer>
            <ReactSVG id="SUN" src="/img/svg/LOGO_ICON.svg" className="sun-svg" style={{height:"inherit"}} />
          </SvgContainer> ) }

          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>

          <SvgContainer>
            {/* <ReactSVG id="SUN" src="/img/svg/LOGO_ICON.svg" className="sun-svg" style={{height:"100%"}} /> */}

            {/* {svgInNavbar && (
              <>
                <ReactSVG id="SUN" src="/img/svg/SUN.svg" className="sun-svg" />
                <ReactSVG id="DAGUARO" src="/img/svg/daguaro.svg" className="daguaro-svg" />
              </>
            )} */}
          </SvgContainer>
        </Row>
        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
