// styles.ts
import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

interface TextProps {
  fade?: boolean;
}

export const Text = styled.p<TextProps>`
  font-size: 1rem;
  color: #6c757d;
  animation: ${({ fade }) => (fade ? css`${fadeOut} 1s` : css`${fadeIn} 1s`)};
`;

// Other styled components...
export const Footer = styled.footer`
  background-color: light;
  text-align: center;
  color: text-muted;
`;

export const Section = styled.section`
  display: flex;
  border-bottom: 1px solid #dee2e6;
`;

export const Connect = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: block;
  }
`;

export const SocialLinks = styled.div`
  a {
    margin-right: 1rem;
    color: reset;
    &:hover {
      color: #000;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;

export const Row = styled.div`
  width: 80%;
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
  @media only screen and (max-width: 768px) {
    width: 95%;
  }
`;

export const Col = styled.div`
  margin-bottom: 2rem;
  padding: 0 1rem;
`;

export const ColTitle = styled.h6`
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 1rem;
  align-items: center;
  svg {
    margin-right: 1rem;
  }
`;

export const ColContent = styled.div`
  p {
  }
  a {
    text-decoration: none;
    &:hover {
      color: #000;
    }
  }
`;

export const BottomBar = styled.div`
  text-align: center;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.05);
  a {
    color: reset;
    font-weight: bold;
    text-decoration: none;
    &:hover {
      color: #007bff;
    }
  }
`;

export const Title = styled.h6`
  font-size: 1.2rem;
  text-transform: capitalize;
  color: #D39381;
  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const FooterLink = styled.a`
  color: #D39381;
`;

export const TextLink = styled.a`
  font-size: 1rem;
  color: #6c757d;
  &:hover {
    color: #000;
  }
`;
