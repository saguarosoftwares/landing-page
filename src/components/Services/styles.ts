import styled from 'styled-components';

export const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // Default to two columns
  gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; // One column on mobile
  }
`;

export const ServiceCard = styled.div`
  background: white;
  border-radius: 25px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.2);
  }
`;

export const TextContainer = styled.div`
  width: 100%;  // Takes the full width of the card
  background-color: #f3f3f3;  // Light gray background for the text area
  border-radius: 10px;  // Optional: adds rounded corners
  padding: 10px 20px;  // Padding inside the text container
  margin-top: 20px;  // Margin to separate it from the icon above
`;

export const ServiceTitle = styled.h2`
  margin: 0;
  font-size: 20px;
  color: #333;
    text-align: center;

`;

export const ServiceDescription = styled.p`
  text-align: center;
  color: #666;
`;

export const IconContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const Icon = styled.img`
  width: 250px;  // Adjusted size to not override the text
  height: auto;

`;

export const Title = styled.h1`
  color: #FFF;
  font-size: 24px;
  text-align: center;
  padding-top: 20px;
`;

export const Subtitle = styled.h2`
  color: #RED;  // Corrected the placeholder color to a valid one
  font-size: 18px;
  text-align: center;
  padding-bottom: 20px;
`;