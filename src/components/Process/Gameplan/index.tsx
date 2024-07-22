// index.tsx
import React from 'react';
import { Clipboard, Title, Step, Button } from './styles';

const GamePlan = () => {
  return (
    <Clipboard>
      {/* <Title>HERE'S THE GAME PLAN:</Title> */}
      <Step>1. Contact us describe your vision</Step>
      <Step>2. We'll discuss your unique needs and business goals to see if we’re a good match.</Step>
      <Step>3. The real fun starts by choosing your tech and creating a customized digital strategy.</Step>
      {/* <Step>4. We're by your side to deliver the right-size solutions that will fuel your enterprise growth.</Step> */}
      {/* <Button>Contact Us</Button> */}
    </Clipboard>
  );
}

export default GamePlan;