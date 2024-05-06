import styled from "styled-components";

interface MiddleBlockSectionProps {
  backgroundImage?: string
}

// export const MiddleBlockSection = styled("section")`
export const MiddleBlockSection = styled.section<MiddleBlockSectionProps>`
  height: 100vh;
  // width: 100vw;
  // width:100%;
  position: relative;
  padding: 0rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  background-image: url(/img/svg/${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain, cover; /* Ensure the background image covers the entire viewport */

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled("div")`
  max-width: 570px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
