import { useEffect, useState } from "react";

function getWindowDimensions() {
    if (typeof window !== 'undefined') {
      const {innerWidth: width, innerHeight: height} = window;
      return {
        width,
        height,
      };
    } else {
      return null;
    }
  }
  
  export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions() || {width: 0, height: 0},
    );
  
    useEffect(() => {
      function handleResize() {
        const dimensions = getWindowDimensions();
        if (dimensions) {
          setWindowDimensions(dimensions);
        }
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }
