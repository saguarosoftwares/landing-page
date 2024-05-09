import styled from "styled-components";

export const LeftContentSection = styled("section")`
  background-color: #597B73;
  display: flex;              // Enables flexbox
  justify-content: center;    // Horizontally center the content
  align-items: center;        // Vertically center the content
  flex-direction: column;     // Stack children vertically

  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Poppins Sans Regular", sans-serif;
`;

export const MinPara = styled("p")`
  font-size: 13px;
`;
