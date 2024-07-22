import { useState, useEffect } from "react";

interface Section {
  id: string;
  color: string;
}

const useBackgroundColor = (sections: Section[]) => {
  const [backgroundColor, setBackgroundColor] = useState<string>("transparent");
  const [isNavbarFixed, setIsNavbarFixed] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");

      if (navbar) {
        const navbarIsFixed = window.getComputedStyle(navbar).position === "fixed";

        if (navbarIsFixed && !isNavbarFixed) {
          setIsNavbarFixed(true);
        } else if (!navbarIsFixed && isNavbarFixed) {
          setIsNavbarFixed(false);
          setBackgroundColor("transparent");
        }

        if (navbarIsFixed) {
          const sectionInView = sections.find(({ id }) => {
            const element = document.getElementById(id);
            if (!element) return false;
            const rect = element.getBoundingClientRect();
            return rect.top <= window.innerHeight && rect.bottom >= 0;
          });

          if (sectionInView) {
            setBackgroundColor(sectionInView.color);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections, isNavbarFixed]);

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  // Apply transition duration to body and theme-color meta tag
  useEffect(() => {
    const body = document.body;
    const themeColorMetaTag = document.querySelector('meta[name="theme-color"]');
    if (backgroundColor === "transparent") {
      body.style.transition = "background-color 0.5s ease"; // Smooth transition from transparent
    } else {
      body.style.transition = "background-color 0.3s ease"; // Faster transition for other colors
    }


    // body.style.transition = "background-color 0.5s ease"; // Smooth transition effect

    return () => {
      body.style.transition = ""; // Clean up transition on unmount
    };
  }, []);

  useEffect(() => {
    let backgroundColor = document.body.style.backgroundColor;
    // if (backgroundColor == "transparent") {
    //   // backgroundColor = "#yellow"
    // }
    const themeColorMetaTag = document.querySelector('meta[name="theme-color"]');
    if (themeColorMetaTag) {
      themeColorMetaTag.setAttribute("content", backgroundColor);
    } else {
      const meta = document.createElement('meta');
      meta.name = "theme-color";
      meta.content = backgroundColor;
      document.head.appendChild(meta);
    }
  }, [backgroundColor]);

  

  return backgroundColor;
};



export default useBackgroundColor;
