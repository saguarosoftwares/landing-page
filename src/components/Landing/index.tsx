import  { useEffect, useRef, useState } from "react";
import debounce from "lodash/debounce";
import { ReactSVG } from "react-svg";
import { MiddleBlockSection } from "./styles";

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
  const [daguaroPosition, setDaguaroPosition] = useState<'fixed' | 'absolute'>('absolute');

  const sunRef = useRef(null);
  const daguaroRef = useRef(null);
  const parentRef = useRef(null);

  // const daguaroOriginalTopRef = useRef<number | null>(null);
  const daguaroOriginalHeightRef = useRef<number | null>(null);


  const [sunWidth, setSunWidth] = useState('10%');
  const [daguaroWidth, setDaguaroWidth] = useState('8%');


  useEffect(() => {
    if (daguaroRef.current) {
      const daguaroElement = daguaroRef.current as HTMLElement;

      // Use ResizeObserver to handle dynamic content changes
      const resizeObserver = new ResizeObserver(() => {
        if ( daguaroElement.getBoundingClientRect().height != 0) {
          daguaroOriginalHeightRef.current = daguaroElement.getBoundingClientRect().height;
          console.log('Daguaro height:', daguaroOriginalHeightRef.current);
        }

      });

      // Observe the daguaro element
      resizeObserver.observe(daguaroElement);

      // Cleanup observer on component unmount
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);

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


          // if (daguaroOriginalTopRef.current === null) {
          //   console.log("OVERRIDE")
          //   daguaroOriginalTopRef.current = daguaroRect.top - parentRect.top;  // the original distance from the top of screen (parent) to the top of daguaro ... not always the same since the calculation is made upon first scroll entry (can vary in speed, which will presumably cause value to vary)
          // }

          //TODO move daguaro
          // if (offsetY > daguaroOriginalTopRef.current) {
          //   setDaguaroPosition('fixed');
          // } else {
          //   setDaguaroPosition('absolute');
          // }

          if (daguaroRect.top > 0 && sunElement.style.display !== "none") {
            const maxGrowthScrollY = daguaroRect.top - parentRect.top;
            const relativeScrollY = Math.min(Math.max(offsetY / maxGrowthScrollY, 0), 1);
            // const newSunWidth = 10 + (25 - 10) * relativeScrollY;
            // setSunWidth(`${newSunWidth}%`);

            // Calculate the new width based on the height of daguaro
            if (daguaroOriginalHeightRef.current) {
              const newSunWidth = (daguaroOriginalHeightRef.current * 1.10) * relativeScrollY;
              setSunWidth(`${newSunWidth}px`);

            }

          } 
          
          
          //TODO maker smaller block
          else if (daguaroRect.top <= 0 && navbarElement && sunElement.style.display !== "none") {
            const navbarRect = navbarElement.getBoundingClientRect();
            const maxGrowthScrollY = navbarRect.top - parentRect.top;
            // const relativeScrollY = Math.min(Math.max(offsetY / maxGrowthScrollY, 0), 1);
            // const newSunWidth = 25 - (15 * relativeScrollY);
            // setSunWidth(`${newSunWidth}%`);

            // const newDaguaroWidth = 8 - (5 * relativeScrollY);
            // setDaguaroWidth(`${newDaguaroWidth}%`);
          }

          //TODO set in navbar block
          if (navbarElement) {
            const navbarRect = navbarElement.getBoundingClientRect();

            if (
              // sunRect.bottom <= navbarRect.bottom && sunRect.top >= navbarRect.top &&
              // daguaroRect.bottom <= navbarRect.bottom && daguaroRect.top >= navbarRect.top
              navbarRect && navbarRect.top <= 0
            ) {
              setSvgInNavbar(true);
              daguaroElement.style.display = 'none';
              sunElement.style.display = 'none';
            } else {
              setSvgInNavbar(false);
              daguaroElement.style.display = 'flex';
              sunElement.style.display = 'flex';
            }
          }

        }
      });
    }, 0);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [daguaroPosition, setSvgInNavbar]);

  return (
    <MiddleBlockSection id={id} style={{ position: 'relative', bottom: 0, zIndex: 2 }} ref={parentRef}>
      <ReactSVG src="/img/svg/LANDING_BUTTE_2.svg" style={{ width: '100%', height: '100%', bottom: 0, zIndex: 1 }} />
      <div
        ref={sunRef}
        style={{
          position: 'fixed',
          top: 'auto',
          width: '100%',
          height: 'auto',
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ReactSVG id="SUN" src="/img/svg/SUN.svg" style={{ width: `${sunWidth}`, height: '100%', zIndex: 2 }} />
      </div>
      <div
        ref={daguaroRef}
        style={{
          position: daguaroPosition,
          bottom: daguaroPosition === 'absolute' ? 0 : 'auto',
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
