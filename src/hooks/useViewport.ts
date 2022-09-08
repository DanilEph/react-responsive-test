import { useState } from "react";
import { LARGE, MEDIUM, SMALL } from "../utils/breakpoints";
import { Breakpoint } from "../utils/types";
import useWindowDimensions from "./useWindowDimensions";

const useViewport = () => {
  // const [breakpoint, setBreakpoint] = useState<Breakpoint>('medium');
  const { width, height } = useWindowDimensions();
  let breakpoint: Breakpoint = "extra-large";
  
  if (width <= SMALL) {
    breakpoint = 'small';
  } else if (width <= MEDIUM) {
    breakpoint = 'medium';
  } else if (width <= LARGE) {
    breakpoint = 'large';
  } else {
    breakpoint = 'extra-large';
  }

  return breakpoint;
};

export default useViewport;