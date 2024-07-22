// src/TechStack/styles.ts
import styled from 'styled-components';

export const Container = styled.div`
    background-color: #000;
    color: white;
    text-align: center;
    padding: 50px 20px;
`;

export const Title = styled.h1`
    font-size: 24px;
    margin-bottom: 20px;
`;

export const Subtitle = styled.h2`
    font-size: 18px;
    font-weight: normal;
    margin-bottom: 40px;
`;

export const Icons = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Icon = styled.img`
    width: 50px;
    height: 50px;

    @media (max-width: 768px) {
        margin-bottom: 15px;
    }
`;