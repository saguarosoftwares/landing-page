import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";


interface HeaderProps {
  isFixed?: boolean
}



export const HeaderSection = styled.header<HeaderProps>`
  padding: 1rem 0.5rem;
  width: inherit;
  height: auto;

  .floater {

    width: 80%;
    background-color: ${(props) => (props.isFixed? "#597b73AA": "transparent") };
    border-radius: 50px;


    @media only screen and (max-width: 1237px) {
      background-color: transparent;
      width: 95%;
    }
  }

  &.fixed {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;  // Corrected for proper layering
  }
`;

export const LogoContainer = styled(Link)`
  display: block;
  justify-content: flex-start;
  align-items: center;
  flex: none;  // Prevent growing and shrinking
  padding-left: 1rem;  // Add some padding on the left if needed

  width: 100%;
  @media only screen and (max-width: 1237px) {
    opacity: 0;
  }

`;

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLink = styled("div")`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 1700px) {
    width: 125px;
  }
  @media only screen and (max-width: 1500px) {
    width: 75px;
  }

  @media only screen and (max-width: 320px) {
    width: 100px;
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
  @media only screen and (max-width: 1237px) {
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: flex-end;
    widht: 40%;
  }

  display: none;

  svg {
    fill: #D39381;
  }
`;

export const NotHidden = styled("div")`
  @media only screen and (max-width: 1237px) {
    display: none;
  }
`;

export const Hidden = styled("div")`
  display: none;

  @media only screen and (max-width: 1237px) {
    display: flex;
    width: 40%;
  }
`;

export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1.2rem;
  color: #FFF;
  transition: color 0.2s ease-in;
  margin: 0.5rem 2rem;

  @media only screen and (max-width: 1550px) {
    margin: 1rem 1.25rem;
    // color: #D39381;
    font-weight: 500;
  }

  @media only screen and (max-width: 1237px) {
    font-weight: 600;
    margin: 1.25rem 2rem;
    margin: 1.25rem 2rem;
    color: #D39381;
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
  flex-grow: 1;  // Allows it to take up any additional space
  display: flex;
  justify-content: center;  // Horizontally center content
  align-items: center;  // Vertically center content
`;

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;