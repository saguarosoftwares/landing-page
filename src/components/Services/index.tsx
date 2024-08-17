// Services/index.tsx
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Title, Subtitle, TextContainer, ServiceCard, ServicesContainer, ServiceTitle, ServiceDescription, Icon, IconContainer } from './styles';
import { ServicesProps } from "./types";
import TechStack from "./TechStack";

const servicesData = [
  {
    title: 'Software Solutions',
    description: 'Tailored development for scalable, efficient business applications',
    icons: ['img/svg/saguaro_software_solutions.svg'],
    path: '/services/software-solutions'
  },
  {
    title: 'Custom Integrations',
    description: 'Integrate plugins, libraries, and frameworks for enhanced functionality',
    icons: ['img/svg/saguaro_customer_integrations.svg'],
    path: '/services/custom-integrations'
  },
  {
    title: 'Tech Consultations',
    description: 'Strategic guidance on technology, architecture, and digital transformation',
    icons: ['img/svg/saguaro_tech_consultation.svg'],
    path: '/services/tech-consultations'
  },
  {
    title: 'Cloud Migration',
    description: 'Seamless transition to scalable cloud platforms for business growth',
    icons: ['img/svg/saguaro_cloud_migration.svg'],
    path: '/services/cloud-solutions'
  },
  {
    title: 'On-going Support',
    description: 'Reliable maintenance and troubleshooting for continuous operation',
    icons: ['img/svg/saguaro_ongoing_support.svg'],
    path: '/services/on-going-support'
  },
  {
    title: 'Performance Optimization',
    description: 'Enhance system efficiency and speed for optimal performance',
    icons: ['img/svg/saguaro_optimization.svg'],
    path: '/services/performance-optimization'
  },
  // Add other services following the same structure
];

const Services = ({ id, backgroundColor }: ServicesProps) => {
  const history = useHistory();

  const handleCardClick = (path: string) => {
    history.push(path);
  };

  return (
    <div id={id}>
      <Title><b>Services:</b> What we have to offer</Title>
      <Subtitle>We are dedicated to delivering scalable, resilient, and successful solutions that bring your business goals and visions to life!</Subtitle>

      <ServicesContainer style={{ backgroundColor: backgroundColor }}>
        {servicesData.map(service => (
          <ServiceCard key={service.title} onClick={() => handleCardClick(service.path)}>
            <IconContainer>
              {service.icons.map((icon, index) => (
                <Icon key={index} src={icon} />
              ))}
            </IconContainer>
            <TextContainer>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </TextContainer>
          </ServiceCard>
        ))}
      </ServicesContainer>
      {/* <TechStack/> */}
    </div>
  );
};

export default Services;
