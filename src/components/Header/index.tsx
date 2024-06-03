import { useState, useEffect, useRef } from "react";
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
  Hidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
  SvgContainer,
  RowContainer
} from "./styles";
import { ReactSVG } from 'react-svg';

const Header = ({ t, svgInNavbar }: any) => {
  const [isFixed, setIsFixed] = useState(false);

  const [visible, setVisibility] = useState(false);

  const navbarRef = useRef<HTMLDivElement | null>(null);

  const svgHeight = navbarRef.current?.getBoundingClientRect().height;

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  useEffect(() => {
    const handleScroll = () => {
      const introElement = document.getElementById("intro");
      if (introElement && !svgInNavbar) {
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
    <HeaderSection id={"navbar"} className={isFixed ? "fixed" : ""} ref={navbarRef}>
      <Container>
        <RowContainer /**justify="space-between" align="middle"*/>

          <NotHidden style={{ width: '33%' }}>
            <LogoContainer to="/" aria-label="homepage" /**style={{ width: '33%' }}*/>
              <SvgIcon src="LOGO_MOBILE.svg" width="auto" height="80px" />
            </LogoContainer>
          </NotHidden>
          <Hidden id="Sevg" style={{ width: '33%' }}>
            <span style={{ display: "flex", justifyContent: "flex-start", alignItems: 'center' }}/>

          </Hidden>

          <SvgContainer /**style={{ width: svgHeight ? `${svgHeight}px` : '10%' }}*/>
            {/**svgInNavbar*/ isFixed ? (
              <ReactSVG
                id="LOGO_ICON"
                src="/img/svg/LOGO_ICON.svg"
                className="sun-svg"
                // style={{ width: svgHeight ? `${svgHeight}px` : '10%' }}
                style={{ width: '80px', height:"auto" }}

              />
            ) : (
              <div
                style={{
                  width: svgHeight ? `${svgHeight}px` : '10%',
                  height: '100%',  // Adjust height as needed
                  backgroundColor: 'transparent' // Set to 'transparent' or the color of the navbar
                }}
              />
            )}

          </SvgContainer>

          <NotHidden style={{ width: '33%'}}>
            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: 'center' }}>
            <MenuItem />            

            </div>
          </NotHidden>

          <Burger onClick={showDrawer} style={{ width: '33%'}}>
            <Outline />
          </Burger>

        </RowContainer>
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
