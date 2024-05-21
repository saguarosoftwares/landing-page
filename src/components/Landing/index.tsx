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
}

const LandingBlock = ({ title, content, button, backgroundImage, t, id }: MiddleBlockProps) => {
  const [sunPosition, setSunPosition] = useState<'fixed' | 'absolute'>('fixed');
  const [daguaroPosition, setDaguaroPosition] = useState<'fixed' | 'absolute'>('absolute');

  const [isCentered, setIsCentered] = useState(false);

  // const svgRef = useRef<HTMLDivElement>(null);
  const sunRef = useRef(null);
  const daguaroRef = useRef(null);
  const parentRef = useRef(null);

  const daguaroOriginalTopRef = useRef<number | null>(null); // Ref to store the original top position of DAGUARO


  const [sunTop, setSunTop] = useState(0); // State to track sun's top position
  const [daguaroTop, setDaguaroTop] = useState(125); // State to track daguaro's top position
  const [scrollY, setScrollY] = useState(0); // State to track scroll position
  const [maxScrollY, setMaxScrollY] = useState(0); // State to track scroll position

  const [sunWidth, setSunWidth] = useState('10%');



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
            // setScrollY(maxScrollY);
            // setSunPosition('absolute');

          } else {
            setScrollY(offsetY);
            setSunPosition('fixed');
          }

          // Update the position of DAGUARO
          if (daguaroOriginalTopRef.current === null) {
            daguaroOriginalTopRef.current = daguaroRect.top - parentRect.top; // Store the original top position of DAGUARO
            // console.log("daguaroOriginalTopRef: ", daguaroOriginalTopRef)
            // console.log("offsetY: ", offsetY)

          }
          if (offsetY >= daguaroOriginalTopRef.current) {

            setDaguaroPosition('fixed');
            // daguaroElement.style.display="none"
            // console.log(sunElement)
            const parentOfFilledSun = document.getElementById('FILLED_SUN') as HTMLElement;
            // console.log(parentOfFilledSun)
            if (parentOfFilledSun) {
              // parentOfFilledSun.style.display="none"
            }
          } else {
            // setDaguaroPosition('fixed');
          }
          const daguaroTopInViewport = daguaroRect.top - parentRect.top;
          const maxGrowthScrollY = daguaroTopInViewport; // Sun grows until it reaches the top of Daguaro
          const relativeScrollY = Math.min(Math.max(offsetY / maxGrowthScrollY, 0), 1);
          const newSunWidth = 10 + (25 - 10) * relativeScrollY;
          setSunWidth(`${newSunWidth}%`);


          // if (daguaroRect.top <= 0) {
          //   setDaguaroPosition('fixed')
          // }
          if (navbarElement) {
            const navbarRect = navbarElement.getBoundingClientRect();
            const navbarCenterY = navbarRect.top + navbarRect.height / 2;
            const sunCenterY = sunRect.top + sunRect.height / 2;
            // if (sunCenterY >= navbarCenterY && sunPosition !== 'centered') {
            //   setSunTop(navbarCenterY - sunRect.height / 2);
            //   setSunPosition('centered');
            // } else if (offsetY < scrollY && sunPosition === 'centered') {
            //   setSunPosition('fixed');
            // }

            if (sunCenterY >= navbarCenterY && !isCentered) {
              setSunTop(navbarCenterY - sunRect.height / 2);
              setIsCentered(true);
            } else if (offsetY < scrollY && isCentered) {
              setIsCentered(false);
            }

          }


        }

      })
      // setDaguaroTop(Math.max(offsetY, 0)); // Update daguaro's top position
      if (sunTop >= daguaroTop /**|| sunTop <= daguaroTop**/) {
        let daguaroElement = (document.querySelector("#DAGUARO")) as HTMLElement;

        if (daguaroElement) {
          //console.log(daguaroElement)
          //daguaroElement.style.display = 'none'

        }
      }
    }, 0);

    window.addEventListener('scroll', handleScroll);

    // Cleanup: remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (

    <MiddleBlockSection id={id} style={{ position: 'relative' , bottom:0}} ref={parentRef}>

      <ReactSVG src="/img/svg/LANDING_BUTTE_2.svg" style={{ width: '100%', height: '100%', bottom: 0, zIndex: 1 }} />

      <div
        ref={sunRef}
        style={{
          // position: sunPosition,
          // bottom: sunPosition === 'absolute' ? 0 : 'auto', // Keep bottom at 0 when position is absolute
          position: isCentered ? 'fixed' : sunPosition,
          top: isCentered ? `${sunTop}px` : 'auto',
          bottom: !isCentered && sunPosition === 'absolute' ? 0 : 'auto',

          width: '100%',
          height: 'auto',
          zIndex: 2,
          display: "flex",
          justifyContent: "center"
        }}
      >
        <ReactSVG id="SUN" src="/img/svg/SUN.svg" style={{ /**width: "25%"**/ width: `${sunWidth}`, height: '100%', zIndex: 2 }} />
      </div>

      <div
        ref={daguaroRef}
        style={{
          // position: 'absolute',   
          // bottom:0, 

          position: daguaroPosition,
          bottom: daguaroPosition === 'absolute' ? 0 : 'auto', // Keep bottom at 0 when position is absolute

          width: '100%',
          height: 'auto',
          zIndex: 2,
          display: "flex",
          justifyContent: "center"
        }}
      >
        <ReactSVG id="DAGUARO" src="/img/svg/daguaro.svg" style={{ width: '8%', height: '100%', zIndex: 2 }} />
      </div>


    </MiddleBlockSection>
  );
};
export default LandingBlock;


