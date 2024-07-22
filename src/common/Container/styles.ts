import styled from "styled-components";

export const StyledContainer = styled.div<any>`
  position: relative;
  padding-right: 5rem;
  padding-left: 5rem;
  padding: 0 0px;

  background-image: url('/Users/admin/Development/Workspace/saguaro/my-app/public/img/svg/hexagon.svg');
  background-size: contain; // Adjust based on the size of the SVG
  background-repeat: repeat;

  .child {
    width: 80%;
    margin: auto;

    @media only screen and (max-width: 768px) {
      width: 95%;
    }
  }

  border-top: ${(p) => (p.border ? "1px solid #CDD1D4" : "")};

  @media only screen and (max-width: 1024px) {
    padding: 0 0px;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 0px;
  }

  @media only screen and (max-width: 414px) {
    max-width: 100%;
    padding: 0 0px;
  }
`;