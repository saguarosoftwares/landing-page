// style.ts
import styled from 'styled-components';

export const Clipboard = styled.div`
  width: 80%;
  max-width: 500px;
  padding: 20px;
  background-color: #f9f9f9;
  border: 2px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px auto;
  font-family: 'Courier New', Courier, monospace;
`;

export const Title = styled.h1`
  color: #333;
  text-align: center;
`;

export const Step = styled.div`
  width: 100%;
  margin: 10px 0;
  display: flex;
  align-items: center;
  font-size: 16px;
  position: relative;
  padding-left: 30px;
  &::before {
    content: '';
    display: block;
    width: 18px;
    height: 18px;
    border: 2px solid #666;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Button = styled.button`
  background-color: #5cb85c;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0,0,0,0.15);
`;