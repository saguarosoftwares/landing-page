import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

export const HeaderSection = styled("header")`
  // position: fixed; /* Set the position to fixed */
  // display: flex;
  padding: 1rem 0.5rem;
  background-color: #597B73;
  z-index=1;

  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }
  /* Add styles for fixed position */
  &.fixed {
    position: fixed;
    top: 0;
    // left: 0;
    width: 100%;
    z-index: 1;
  }
`;

export const LogoContainer = styled(Link)`
  // padding-left: 2rem;
  display: flex;
  // align-items: center;
  // text-decoration: none;
`;

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLink = styled("div")`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const ContactWrapper = styled("div")<any>`
  cursor: pointer;
  width: ${(p) => (p.width ? "100%" : "110px")};
  font-weight: 700;
  text-align: center;
  border-radius: 1.25rem;
  display: inline-block;
`;

export const Burger = styled("div")`
  @media only screen and (max-width: 890px) {
    display: block;
  }

  display: none;

  svg {
    fill: #D39381;
  }
`;

export const NotHidden = styled("div")`
  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1.2rem;
  color: #D39381;
  transition: color 0.2s ease-in;
  margin: 0.5rem 2rem;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const Label = styled("span")`
  font-weight: 500;
  color: #404041;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Outline = styled(MenuOutlined)<any>`
  font-size: 22px;
`;

export const Span = styled("span")`
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: #F4DCDC;
    text-underline-position: under;
    // text-decoration: #F4DCDC wavy underline;
  }
`;

export const SvgContainer = styled.div`
  background-color: #597B73;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;

  .sun-svg {
    width: 10%;
    position: absolute;
    z-index: 1;
  }

  .daguaro-svg {
    width: 3%;
    position: relative;
    z-index: 2;
  }
`;




