import styled from "styled-components";

interface MiddleBlockSectionProps {
  backgroundImage?: string
}

// export const MiddleBlockSection = styled("section")`
export const MiddleBlockSection = styled.section<MiddleBlockSectionProps>`
  // height: 100vh; /* 100% of the viewport height */
  // width: 100vw; /* 100% of the viewport width */
  
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  // /* Use negative margins to extend the background image beyond the padding */
  // margin: -7.5rem -60px -3rem;
  // overflow: hidden; /* Hide overflow content outside the padding */

  // background-image: url(/img/svg/${(props) => props.backgroundImage});
  // background-size: cover;
  // background-repeat: no-repeat;
  // background-position: center;


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
