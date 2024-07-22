// Services/index.tsx
import React from 'react';
import { Title, Subtitle, TextContainer, ServiceCard, ServicesContainer, ServiceTitle, ServiceDescription, Icon, IconContainer } from './styles';
import { ServicesProps } from "./types";
import TechStack from "./TechStack"

const servicesData = [
  {
    title: 'Software Solutions',
    description: 'Tailored development for scalable, efficient business applications',
    // icons: ['icon-path1', 'icon-path2', 'icon-path3', 'icon-path4'],
    icons: ['img/svg/saguaro_software_solutions.svg']
  },
  {
    title: 'Custom Integrations',
    description: 'Integrate plugins, libraries, and frameworks for enhanced functionality',
    // icons: ['icon-path1', 'icon-path2', 'icon-path3', 'icon-path4'],
    icons: ['img/svg/saguaro_customer_integrations.svg']
  },
  {
    title: 'Tech Consultations',
    description: 'Strategic guidance on technology, architecture, and digital transformation',
    icons: ['img/svg/saguaro_tech_consultation.svg'],
  },
  {
    title: 'Cloud Migration',
    description: 'Seamless transition to scalable cloud platforms for business growth',
    icons: ['img/svg/saguaro_cloud_migration.svg'],
  },
  {
    title: 'On-going Support',
    description: 'Reliable maintenance and troubleshooting for continuous operation',
    icons: ['img/svg/saguaro_ongoing_support.svg'],
  },
  {
    title: 'Performance Optimization',
    description: 'Enhance system efficiency and speed for optimal performance',
    icons: ['img/svg/saguaro_optimization.svg'],
  },
  // Add other services following the same structure
];

const Services = ({ id, backgroundColor }: ServicesProps) => {
  const handleCardClick = (title: string) => {
    // alert(`You clicked on ${title}`);
    // Here you can also use routing to navigate to different pages or open modals
  };

  return (
    <div id={id} >
      <Title><b>Services:</b> What we have to offer</Title>
      <Subtitle>We are dedicated to delivering scalable, resilient, and successful solutions that bring your business goals and visions to life!</Subtitle>

      <ServicesContainer style={{ backgroundColor: backgroundColor }}>
        {servicesData.map(service => (
          <ServiceCard key={service.title} onClick={() => handleCardClick(service.title)}>
            <IconContainer>
              {service.icons.map((icon, index) => (
                <Icon key={index} src={icon} />
              ))}
            </IconContainer>
            {/* <div>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </div> */}
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