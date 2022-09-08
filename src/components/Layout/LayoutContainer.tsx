import React, { FC } from "react";
import { AnyStyledComponent } from "styled-components";
import useViewport from "../../hooks/useViewport";
import { LayoutExtraLarge, LayoutLarge, LayoutMedium, LayoutSmall } from "./Layout";

interface ILayout {
  children: React.ReactNode;
};

const LayoutContainr: FC<ILayout> = ({children}) => {

  const viewport = useViewport();
  let Layout: AnyStyledComponent;

  switch (viewport) {
    case 'small':
      Layout = LayoutSmall;
      break;
    case 'large':
      Layout = LayoutLarge;  
      break;
    case 'medium':
      Layout = LayoutMedium;
      break;
    default:
      Layout = LayoutExtraLarge;
  };

  return (
    <Layout>{children}</Layout>
  )
}

export default LayoutContainr;