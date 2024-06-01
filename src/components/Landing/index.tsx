import  { useEffect, useRef, useState } from "react";
import debounce from "lodash/debounce";
import { ReactSVG } from "react-svg";
import { MiddleBlockSection } from "./styles";

const SUN_STARTING_WIDTH_SIZE = 6
const DAGUARO_STARTING_WIDTH_SIZE = 8

interface MiddleBlockProps {
  title: string;
  content: string[];
  button: string;
  backgroundImage?: string;  // Optional background image URL
  t: any;
  id: string;
  svgInNavbar: boolean;
  setSvgInNavbar: (inNavbar: boolean) => void;
}

const LandingBlock = ({ title, content, button, backgroundImage, t, id, svgInNavbar, setSvgInNavbar }: MiddleBlockProps) => {
  const [daguaroPosition, setDaguaroPosition] = useState<'fixed' | 'absolute'>('absolute');

  const sunRef = useRef(null);
  const daguaroRef = useRef(null);
  const parentRef = useRef(null);

  const daguaroOriginalTopRef = useRef<number | null>(null);
  const daguaroOriginalHeightRef = useRef<number | null>(null);
  const sunOriginalHeightRef = useRef<number | null>(null);

  const windowScrollEventListenerAdded = useRef(false); // Flag to track if event listener is added




  const [sunWidth, setSunWidth] = useState(SUN_STARTING_WIDTH_SIZE+"%");
  const [daguaroWidth, setDaguaroWidth] = useState(DAGUARO_STARTING_WIDTH_SIZE+"%");



  useEffect(() => {
    if (!svgInNavbar){
      if (daguaroRef.current && sunRef.current) {
        const daguaroElement = daguaroRef.current as HTMLElement;
        const sunElement = sunRef.current as HTMLElement;
  
        // Use ResizeObserver to handle dynamic content changes
        const resizeObserver = new ResizeObserver(() => { // TODO trigger on resize of window..
          if ( daguaroElement.getBoundingClientRect().height != 0 && daguaroOriginalHeightRef.current == null) {
            daguaroOriginalHeightRef.current = daguaroElement.getBoundingClientRect().height;
            console.log('Daguaro height:', daguaroOriginalHeightRef.current);
          }
          if ( sunElement.getBoundingClientRect().height != 0 && sunOriginalHeightRef.current == null) {
            sunOriginalHeightRef.current = sunElement.getBoundingClientRect().height;
            console.log('Sun height:', sunOriginalHeightRef.current);
          }
        });
  
        // Observe the daguaro element
        resizeObserver.observe(daguaroElement);
  
        // Cleanup observer on component unmount
        return () => {
          resizeObserver.disconnect();
        };
      }
    }

  }, []);

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (!svgInNavbar){
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


          if (daguaroOriginalTopRef.current === null) {
            daguaroOriginalTopRef.current = daguaroRect.top - parentRect.top;  // the original distance from the top of screen (parent) to the top of daguaro ... not always the same since the calculation is made upon first scroll entry (can vary in speed, which will presumably cause value to vary)
          }

          sunOriginalHeightRef.current = (parentRect.width * SUN_STARTING_WIDTH_SIZE) / 100
          // daguaroOriginalHeightRef.current = (parentRect.width * DAGUARO_STARTING_WIDTH_SIZE) / 100


          // //TODO move daguaro
          if (offsetY > daguaroOriginalTopRef.current) {
            setDaguaroPosition('fixed');
          } else {
            setDaguaroPosition('absolute');
          }

          if (daguaroRect.top > 0 && sunElement.style.display !== "none") {
            const maxGrowthScrollY = daguaroRect.top - parentRect.top;
            const relativeScrollY = Math.min(Math.max(offsetY / maxGrowthScrollY, 0), 1);

            if (daguaroOriginalHeightRef.current && sunOriginalHeightRef.current) {
              const newSunWidth = (sunOriginalHeightRef.current) + ((daguaroOriginalHeightRef.current - (sunOriginalHeightRef.current)) * relativeScrollY);
                setSunWidth(`${newSunWidth}px`);
            }

          }


          //TODO maker smaller block
          else if ((daguaroRect.top <= 0 && navbarElement && sunElement.style.display !== "none") && (daguaroOriginalHeightRef.current && sunOriginalHeightRef.current)) {

            const navbarRect = navbarElement.getBoundingClientRect();


            const maxGrowthScrollY = navbarRect.top - (daguaroOriginalTopRef.current + parentRect.top);

            let _offsetY = offsetY - daguaroOriginalTopRef.current;
            const relativeScrollY = Math.min(Math.max(_offsetY / maxGrowthScrollY, 0), 1);

            const newSunWidth = navbarRect.height + (daguaroOriginalHeightRef.current - navbarRect.height) * (1 - relativeScrollY);

            console.log(navbarRect.height)
            setSunWidth(`${newSunWidth}px`);

            let navToDagRatio = (navbarRect.height * .95) / daguaroOriginalHeightRef.current

            const newDaguaroWidth = DAGUARO_STARTING_WIDTH_SIZE - ((DAGUARO_STARTING_WIDTH_SIZE - (DAGUARO_STARTING_WIDTH_SIZE * navToDagRatio)) * (relativeScrollY));
            setDaguaroWidth(`${newDaguaroWidth}%`);
          }

          //TODO set in navbar block
          if (navbarElement) {
            const navbarRect = navbarElement.getBoundingClientRect();

            if (navbarRect && navbarRect.top <= 0) {
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
    }}, 0);

    // if (!svgInNavbar){
    window.addEventListener('scroll', handleScroll);
    

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // }



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
