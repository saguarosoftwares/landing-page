import styled from "styled-components";

interface MiddleBlockSectionProps {
  backgroundImage?: string
}

// export const MiddleBlockSection = styled("section")`
export const MiddleBlockSection = styled.section<MiddleBlockSectionProps>`
  height: auto;
  width: 100%;
  position: relative;
  // padding: 7.5rem 0 3rem;
  // text-align: center;
  display: flex;
  justify-content: center;

  line-height: 0;



  @media screen and (max-width: 1900px) {
    // padding: 5.5rem 0 3rem;
    // background-position: center;
    // background-size: var(--background-width) auto;

    // background-position: top;

    // background-size: contain;

  }


  @media screen and (max-width: 1024px) {
    // height: 60vh

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
