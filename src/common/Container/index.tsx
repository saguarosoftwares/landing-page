import { StyledContainer } from "./styles";
import { ContainerProps } from "../types";

const Container = ({ border, children, backgroundColor }: ContainerProps) => (
  <StyledContainer  style={{backgroundColor: backgroundColor}} border={border}>{children}</StyledContainer>
);

export default Container;
