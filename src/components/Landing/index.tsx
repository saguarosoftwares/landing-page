// Assuming MiddleBlockProps interface is updated to include backgroundImage
// import { Row, Col } from "antd";
// import { withTranslation } from "react-i18next";
// import { Slide } from "react-awesome-reveal";
// import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";
import { SvgIcon } from "../../common/SvgIcon";
// import { off } from "process";
import React, { useEffect, useRef, useState } from "react";
// import { useScroll, useTransform, motion } from 'framer-motion';
import { ReactSVG } from 'react-svg';
import debounce from 'lodash/debounce';


interface MiddleBlockProps {
  title: string;
  content: string[];
  button: string;
  backgroundImage?: string;  // Optional background image URL
  t: any;
  id: string;
  setSvgInNavbar: (inNavbar: boolean) => void;
}

const LandingBlock = ({ title, content, button, backgroundImage, t, id, setSvgInNavbar }: MiddleBlockProps) => {
  const [sunPosition, setSunPosition] = useState<'fixed' | 'absolute'>('fixed');
  const [daguaroPosition, setDaguaroPosition] = useState<'fixed' | 'absolute'>('absolute');

  const [isCentered, setIsCentered] = useState(false);

  // const svgRef = useRef<HTMLDivElement>(null);
  const sunRef = useRef(null);
  const daguaroRef = useRef(null);
  const parentRef = useRef(null);

  const [sizeChange, setSizeChange] = useState<'shrink' | 'grow'>('grow');


  const daguaroOriginalTopRef = useRef<number | null>(null); // Ref to store the original top position of DAGUARO


  const [sunTop, setSunTop] = useState(0); // State to track sun's top position
  const [daguaroTop, setDaguaroTop] = useState(125); // State to track daguaro's top position
  const [scrollY, setScrollY] = useState(0); // State to track scroll position
  const [maxScrollY, setMaxScrollY] = useState(0); // State to track scroll position

  const [sunWidth, setSunWidth] = useState('10%');
  const [daguaroWidth, setDaguaroWidth] = useState('8%');




  useEffect(() => {
    const handleScroll = debounce(() => {

      const offsetY = window.scrollY;
      window.requestAnimationFrame(() => {
        if (parentRef.current && sunRef.current && daguaroRef.current) {
          const sunElement = sunRef.current as HTMLElement;
          const parentElement = parentRef.current as HTMLElement;
          const daguaroElement = daguaroRef.current as HTMLElement;
          const navbarElement = document.querySelector("#navbar") as HTMLElement;



          const sunRect = sunElement.getBoundingClientRect();
          const daguaroRect = daguaroElement.getBoundingClientRect();

          const parentRect = parentElement.getBoundingClientRect();

          // Calculate the maximum scrollY value that keeps the bottom of the SUN within the parent
          const maxScrollY = parentRect.bottom - sunRect.height - parentRect.top;
          setMaxScrollY(maxScrollY)

          // If the bottom of the sun is going to be below the bottom of the parent, adjust scrollY
          if (offsetY > maxScrollY) {


          } else {
            setScrollY(offsetY);
            setSunPosition('fixed');
          }

          // Update the position of DAGUARO
          if (daguaroOriginalTopRef.current === null) {
            daguaroOriginalTopRef.current = daguaroRect.top - parentRect.top; // Store the original top position of DAGUARO

          }
          if (offsetY > daguaroOriginalTopRef.current) {

            setDaguaroPosition('fixed');
            // daguaroElement.style.display="none"
          } 
          
          else if (offsetY <= daguaroOriginalTopRef.current) {

            setDaguaroPosition('absolute');
            // daguaroElement.style.display="none"
          } else {
            setSizeChange('shrink')

          }



          //if (/**sizeChange == 'grow' || sizeChange == 'shrink'**/ sunRect.bottom < parentRect.bottom ) { // this is choppy since reduction of width make it fallback into growth
          // if daguaro not at 0?
          if (daguaroRect.top > 0 && sunElement.style.display!="none" ) { //TODO make sure to only play with widths when 
            
            const daguaroTopInViewport = daguaroRect.top - parentRect.top;
            const maxGrowthScrollY = daguaroTopInViewport; // Sun grows until it reaches the top of Daguaro

            const relativeScrollY = Math.min(Math.max(offsetY / maxGrowthScrollY, 0), 1);
            const newSunWidth = 10 + (25 - 10) * relativeScrollY;
            setSunWidth(`${newSunWidth}%`);
            if (sunWidth == `25%`){
              setSizeChange('shrink')

            } 

          // } else if (sunRect.bottom > parentRect.bottom) {
          } else {

            if (navbarElement && sunElement.style.display!="none" ) {

              const navbarRect = navbarElement.getBoundingClientRect();


              const navbarInViewPort = navbarRect.top - parentRect.top;
              const maxGrowthScrollY = navbarInViewPort; // Sun shrinks until it reaches the navbar
              const relativeScrollY = Math.min(Math.max(offsetY / maxGrowthScrollY, 0), 1);
              const newSunWidth = 25 - (15 * relativeScrollY); // Shrink the sun from 25% to 10%
              setSunWidth(`${newSunWidth}%`);

              // Calculate daguaro width //#TODO bug ... uneasy transition when daguaro hits top of sun (daguroRect.top -> 0px)
              const newDaguaroWidth = 8 - (5 * relativeScrollY); // Shrink the daguaro from 8% to 3% 
              setDaguaroWidth(`${newDaguaroWidth}%`);


              let navbarHeight = navbarRect.height;
              const sunWidth = `${(navbarHeight * 1.1) / navbarHeight * 100}%`;
              const daguaroWidth = `${(navbarHeight * 0.8) / navbarHeight * 100}%`;
      
            }

          }


          if (navbarElement) {
            const navbarRect = navbarElement.getBoundingClientRect();

            if (sunRect.bottom <= navbarRect.bottom && sunRect.top >= navbarRect.top &&
              daguaroRect.bottom <= navbarRect.bottom && daguaroRect.top >= navbarRect.top) {  //#TODO this may never hit... (w/ some resolutions the logo ends up being larer)
              setSvgInNavbar(true);
              daguaroElement.style.display =  'none';
              sunElement.style.display =  'none';

            } else {
              setSvgInNavbar(false);
              daguaroElement.style.display = 'flex';
              sunElement.style.display = 'flex';
            }

            const navbarCenterY = navbarRect.top + navbarRect.height / 2;
            const sunCenterY = sunRect.top + sunRect.height / 2;


            
            // console.log(sunCenterY)

            if (sunCenterY <= navbarCenterY && sizeChange == 'shrink') {
              // const relativeScrollY = Math.min(Math.max((navbarCenterY - sunCenterY) / maxGrowthScrollY, 0), 1);
              // const newSunWidth = 25 - (15 * relativeScrollY); // Scale down from 25% to 10%
              // setSunWidth(`${newSunWidth}%`);
            }
  
  
          }


        }

      })
      // setDaguaroTop(Math.max(offsetY, 0)); // Update daguaro's top position
      if (sunTop >= daguaroTop /**|| sunTop <= daguaroTop**/) {
        let daguaroElement = (document.querySelector("#DAGUARO")) as HTMLElement;

        if (daguaroElement) {
          // daguaroElement.style.display = 'none'

        }
      }

      if (daguaroPosition == 'absolute'){
        setDaguaroWidth('8%')
      }
    }, 0);

    window.addEventListener('scroll', handleScroll);

    // Cleanup: remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (

    <MiddleBlockSection id={id} style={{ position: 'relative' , bottom:0, zIndex: 2}} ref={parentRef}>

      <ReactSVG src="/img/svg/LANDING_BUTTE_2.svg" style={{ width: '100%', height: '100%', bottom: 0, zIndex: 1 }} />

      <div
        ref={sunRef}
        style={{
          position: isCentered ? 'fixed' : sunPosition,
          top: isCentered ? `${sunTop}px` : 'auto',
          bottom: !isCentered && sunPosition === 'absolute' ? 0 : 'auto',

          width: '100%',
          height: 'auto',
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ReactSVG id="SUN" src="/img/svg/SUN.svg" style={{ /**width: "25%"**/ width: `${sunWidth}`, height: '100%', zIndex: 2 }} />
      </div>

      <div
        ref={daguaroRef}
        style={{
          position: daguaroPosition,
          bottom: daguaroPosition === 'absolute' ? 0 : 'auto', // Keep bottom at 0 when position is absolute

          width: '100%',
          height: 'auto',
          zIndex: 2,
          display: "flex",
          justifyContent: "center"
        }}
      >
        <ReactSVG id="DAGUARO" src="/img/svg/daguaro.svg" style={{ width: `${daguaroWidth}`, height: '100%', zIndex: 2 }} />
      </div>


    </MiddleBlockSection>
  );
};
export default LandingBlock;


