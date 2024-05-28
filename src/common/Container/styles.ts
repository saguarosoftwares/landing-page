import styled from "styled-components";

export const StyledContainer = styled("div")<any>`
  // background: linear-gradient(121deg, rgba(152,245,246,1) 20%, rgba(255,255,255,0.5676864495798319) 100%);

  position: relative;
  // max-width: 100%;
  // margin-right: auto;
  // margin-left: auto;
  padding: 0 0px;
  
  border-top: ${(p) => (p.border ? "1px solid #CDD1D4" : "")};

  @media only screen and (max-width: 1024px) {
    // max-width: calc(100% - 68px);
    padding: 0 0px;
  }

  @media only screen and (max-width: 768px) {
    // max-width: calc(100% - 38px);
    padding: 0 0px;
  }

  @media only screen and (max-width: 414px) {
    max-width: 100%;
    padding: 0 0px;
  }
`;
