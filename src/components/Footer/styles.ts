import styled from "styled-components";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


export const Footer = styled.footer`
  background-color: light;
  text-align: center;
  color: text-muted;
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  padding: 4rem;
  border-bottom: 1px solid #dee2e6;
`;

export const Connect = styled.div`
  margin-right: 5rem;
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
  margin-top: 1rem;
`;

export const Row = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
`;

export const Col = styled.div`
  margin-bottom: 2rem;
  padding 0 1rem;
`;

export const ColTitle = styled.h6`
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 1rem;
  // display: flex;
  align-items: center;

  svg {
    margin-right: 1rem;
  }
`;

export const ColContent = styled.div`
  p {
    // color: #6c757d;
  }

  a {
    // color: #6c757d;
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

export const Text = styled.p`
  font-size: 1rem;
  color: #6c757d;
`;

export const TextLink = styled.a`
  font-size: 1rem;
  color: #6c757d;

  &:hover {
    color: #000;
  }
`;
