import React from 'react';
import { StepsContainer, Step, StepNumber, StepTitle, StepDesc, ProcessTitle, ProcessSubtitle, GraphicsContainer, ContentContainer } from './styles';
import { ProcessProps } from "./types";
import { ReactSVG } from "react-svg";

import GamePlan from './Gameplan'

// const stepsData = [
//   { number: '1', title: 'Your Vision', desc: 'blah blah blah blah blah blah blah' },
//   { number: '2', title: 'Collaborative Proposal', desc: 'blah blah blah blah blah blah blah' },
//   { number: '3', title: 'Our Solution', desc: 'blah blah blah blah blah blah blah' },
//   // { number: '4', title: 'Ballpark Offer' },
//   // { number: '4', title: 'Acceptance & Contract' },
//   // { number: '5', title: 'Project Execution' },
//   // { number: '6', title: 'Deliverance' }
// ];

const stepsData = [
  { number: '1', title: 'Your Vision', desc: 'We start by understanding your vision and goals for the project. This involves detailed discussions to capture your requirements, desired outcomes, and any specific preferences you have in mind. Our team listens carefully to ensure we are aligned with your expectations from the very beginning.' },
  { number: '2', title: 'Collaborative Proposal', desc: 'Next, we work together to create a collaborative proposal. This includes brainstorming sessions, feasibility analysis, and initial design concepts. We value your input at every stage to ensure the proposal accurately reflects your vision and lays a strong foundation for the project.' },
  { number: '3', title: 'Our Solution', desc: 'Based on the collaborative proposal, we develop a tailored solution that addresses your needs and objectives. This phase involves detailed planning, technical design, and resource allocation to ensure we can deliver a high-quality product within the agreed timeline and budget.' },
  // { number: '4', title: 'Ballpark Offer', desc: 'After outlining our solution, we provide a ballpark offer. This is an initial cost estimate based on the scope and requirements discussed so far. The ballpark offer gives you a clear idea of the financial investment needed for the project.' },
  // { number: '5', title: 'Acceptance & Contract', desc: 'Once you are satisfied with the proposal and offer, we move on to the acceptance and contract phase. This involves finalizing the project terms, timelines, and deliverables. We ensure all details are clearly documented to avoid any misunderstandings later on.' },
  // { number: '6', title: 'Project Execution', desc: 'With the contract in place, we begin the project execution. Our team follows a structured process, including regular updates and feedback sessions, to ensure the project stays on track. We use agile methodologies to adapt to any changes and deliver incremental progress.' },
  // { number: '7', title: 'Deliverance', desc: 'The final step is delivering the completed project. We conduct thorough testing and quality assurance to ensure the product meets all requirements and standards. After delivery, we provide ongoing support and maintenance to ensure the solution continues to perform optimally.' }
];


const Process = ({ id, backgroundColor }: ProcessProps) => {
  return (
    <div id={id}>
      <ProcessTitle>Process: How we work</ProcessTitle>
      <ProcessSubtitle>What is going to happen after you contact us.</ProcessSubtitle>
      <ContentContainer>
        <GraphicsContainer>
          <ReactSVG src="/img/svg/saguaro_process.svg" />
        </GraphicsContainer>
        <StepsContainer style={{ backgroundColor: backgroundColor }}>
          {stepsData.map((step, index) => (
            <Step key={index}>
              <StepNumber>{step.number}</StepNumber> 
              <StepTitle>{step.title}</StepTitle>
              <StepDesc>{step.desc}</StepDesc>
            </Step>
          ))}
        </StepsContainer>
        {/* <GamePlan/> */}
      </ContentContainer>
    </div>
  );
};

export default Process;
