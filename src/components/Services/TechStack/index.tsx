// src/TechStack/index.tsx
import React from 'react';
import { Container, Title, Subtitle, Icons, Icon } from './styles';
import tsIcon from './icons/typescript.svg'; // Assuming you have SVG icons in the folder
import nestIcon from './icons/nest.svg';
import graphqlIcon from './icons/graphql.svg';
import nodeIcon from './icons/node.svg';

const TechStack = () => {
    return (
        <Container>
            <Title>Trusted technologies. Our future-proof and battle-tested tech stack.</Title>
            <Icons>
                {/* <Icon src={tsIcon} alt="TypeScript" />
                <Icon src={nestIcon} alt="NestJS" />
                <Icon src={graphqlIcon} alt="GraphQL" />
                <Icon src={nodeIcon} alt="Node.js" /> */}
            </Icons>
        </Container>
    );
};

export default TechStack;