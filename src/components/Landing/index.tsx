import { useEffect, useRef, useState } from "react";
import debounce from "lodash/debounce";
import { ReactSVG } from "react-svg";
import { MiddleBlockSection } from "./styles";

const SUN_STARTING_WIDTH_SIZE = 6
const DAGUARO_STARTING_WIDTH_SIZE = 8


const useWindowSize = () => {
  // Initialize state with the current window size
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
};


interface MiddleBlockProps {
  id: string;
  svgInNavbar: boolean;
  setSvgInNavbar: (inNavbar: boolean) => void;
}







const LandingBlock = ({ id, svgInNavbar, setSvgInNavbar }: MiddleBlockProps) => {

  const { width } = useWindowSize();


  const [daguaroPosition, setDaguaroPosition] = useState<'fixed' | 'absolute'>('absolute');

  const sunRef = useRef<HTMLDivElement | null>(null);
  const daguaroRef = useRef<HTMLDivElement | null>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);

  const [sunWidth, setSunWidth] = useState(SUN_STARTING_WIDTH_SIZE + "%");
  const [daguaroWidth, setDaguaroWidth] = useState(DAGUARO_STARTING_WIDTH_SIZE + "%");


  const applyUpdatesToLogoComponents = (sunElement = sunRef.current, daguaroElement = daguaroRef.current, parentElement = parentRef.current) => {
    const offsetY = window.scrollY;
    if (sunElement && daguaroElement && parentElement) {
      if (sunElement.style.display !== "none" && daguaroElement.style.display !== "none") {
        if (daguaroElement.getBoundingClientRect().top > 0) {
          daguaroElement.style.opacity = "1"

          const maxGrowthScrollY = daguaroElement.getBoundingClientRect().top - parentElement.getBoundingClientRect().top;
          const relativeScrollY = Math.min(Math.max(offsetY / maxGrowthScrollY, 0), 1);
  
          const newSunWidth = (width * (SUN_STARTING_WIDTH_SIZE/100)) + ((daguaroElement.getBoundingClientRect().height - (width * (SUN_STARTING_WIDTH_SIZE/100))) * relativeScrollY);
          setSunWidth(`${newSunWidth}px`);
          console.log("sunWidth: ",newSunWidth)

        } else if (daguaroElement.getBoundingClientRect().top <= 0 && (offsetY != 0)) {
          daguaroElement.style.opacity = "0"

          const navbarElement = document.querySelector("#navbar") as HTMLElement;
          if (navbarElement && daguaroRef.current && parentRef.current)  {
            const maxGrowthScrollY = navbarElement.getBoundingClientRect().top - ((daguaroRef.current.getBoundingClientRect().top) + parentRef.current.getBoundingClientRect().top);
            // const maxGrowthScrollY = navbarElement.getBoundingClientRect().top - ((parentRef.current.getBoundingClientRect().height - daguaroRef.current.getBoundingClientRect().height) + navbarElement.getBoundingClientRect().top);

            // let _offsetY = offsetY - daguaroRef.current.getBoundingClientRect().top;
            let _offsetY = offsetY - daguaroRef.current.getBoundingClientRect().top;

            const relativeScrollY = Math.min(Math.max(_offsetY / maxGrowthScrollY, 0), 1);

            const newSunWidth = navbarElement.getBoundingClientRect().height + (daguaroRef.current.getBoundingClientRect().height - navbarElement.getBoundingClientRect().height) * (1 - relativeScrollY);
            
            console.log("sunWidth: ",newSunWidth)

            setSunWidth(`${newSunWidth}px`);
            let innerDaguaro = sunElement.querySelector("#INNER_DAGUARO") as HTMLElement;
            if (innerDaguaro) {
              innerDaguaro.style.display = "flex"
            }

          }




        }
      }
    }
  }

  useEffect(() => {
    // TODO should changed positionally based on where we are in the scroll relative to the page.
    setSunWidth(SUN_STARTING_WIDTH_SIZE + "%")
    setDaguaroWidth(DAGUARO_STARTING_WIDTH_SIZE + "%")
    applyUpdatesToLogoComponents();
  }, [width])

  useEffect(() => {
    const handleScroll = debounce(() => {
      window.requestAnimationFrame(() => {
          applyUpdatesToLogoComponents();
      });
    }, 0);


    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [width]);

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
