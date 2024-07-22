import styled from 'styled-components';

export const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
  padding: 20px;
  background-color: #000;
  color: white;
  flex: 1;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const GraphicsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 20px;
  overflow: hidden;

  svg {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Step = styled.div`
  background: white;
  color: black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
`;

export const StepNumber = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const StepTitle = styled.div`
  font-size: 16px;
  margin-top: 10px;
  text-align: center;
`;

export const StepDesc = styled.div`
  font-size: 12px;
  margin-top: 10px;
  text-align: center;
`;

export const ProcessTitle = styled.h1`
  color: #FFF;
  font-size: 24px;
  text-align: center;
  padding-top: 20px;
`;

export const ProcessSubtitle = styled.h2`
  color: #RED; /* Corrected color value */
  font-size: 18px;
  text-align: center;
  padding-bottom: 20px;
`;
