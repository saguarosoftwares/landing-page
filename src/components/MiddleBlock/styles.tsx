import styled from "styled-components";

interface MiddleBlockSectionProps {
  backgroundImage?: string
}

// export const MiddleBlockSection = styled("section")`
export const MiddleBlockSection = styled.section<MiddleBlockSectionProps>`
  height: 90vh; /* 100% of the viewport height */
  // width: 100vw; /* 100% of the viewport width */
  // width: 100%;
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  // /* Use negative margins to extend the background image beyond the padding */
  // margin: -7.5rem -60px -3rem;
  // overflow: hidden; /* Hide overflow content outside the padding */

  background-image: url(/img/svg/${(props) => props.backgroundImage});
  background-size: cover, contain;
  background-repeat: no-repeat;
  // background-position: 70% center;


  @media screen and (max-width: 1900px) {
    // padding: 5.5rem 0 3rem;
    // background-position: center;
    // background-size: var(--background-width) auto;

    background-position: bottom;

    background-size: contain;

  }


  @media screen and (max-width: 1024px) {
    height: 60vh

    // padding: 5.5rem 0 3rem;
    // background-position: 60% center;
    // background-position: bottom;

    // background-size: contain;

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
