import { useState, useEffect } from "react";

interface Section {
  id: string;
  color: string;
}

const useBackgroundColor = (sections: Section[]) => {
  const [backgroundColor, setBackgroundColor] = useState<string>("#597b73");

  useEffect(() => {
    const handleScroll = () => {
      const sectionInView = sections.find(({ id }) => {
        const element = document.getElementById(id);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
      });

      if (sectionInView) {
        console.log("sectionInView: ", sectionInView)
        setBackgroundColor(sectionInView.color);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);


  useEffect(() => {
    // Update the background color of the root element
    document.documentElement.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  return backgroundColor;
};

export default useBackgroundColor;
