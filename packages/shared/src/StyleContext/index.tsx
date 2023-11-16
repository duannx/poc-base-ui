import { createContext } from "react";
import { isOnServer } from "..";

export interface IStyleContext {
  addSsrCss: (componentStyle: ComponentStyle) => void;
  addCsrCss: (componentStyle: ComponentStyle) => void;
}

export interface ComponentStyle {
  id: string;
  css: string;
}

console.log('imported', Date.now())

function addSsrCss(
  componentStyle: ComponentStyle,
  ssrComponentStyles: Array<ComponentStyle>
) {
  console.log('addSsrCss', componentStyle, ssrComponentStyles)
  if (
    !isOnServer ||
    !componentStyle ||
    !componentStyle.css ||
    !componentStyle.id
  )
    return;

  if (!ssrComponentStyles) return;
  const index = ssrComponentStyles.findIndex(
    (elm) => elm.id === componentStyle.id
  );
  if (index > -1) return;
  ssrComponentStyles.push(componentStyle);
}

function addCsrCss(componentStyle: ComponentStyle) {
  if (
    isOnServer ||
    !componentStyle ||
    !componentStyle.css ||
    !componentStyle.id
  )
    return;
  let styleElement = document.getElementById(componentStyle.id);
  if (styleElement) return;
  styleElement = document.createElement("style");
  styleElement.id = componentStyle.id;
  styleElement.innerHTML = componentStyle.css;
  document.head.appendChild(styleElement);
}

function getDefaultValue(
  ssrComponentStyles: Array<ComponentStyle>
): IStyleContext {
  return {
    addSsrCss: (componentStyle: ComponentStyle) => {
      return addSsrCss(componentStyle, ssrComponentStyles);
    },
    addCsrCss,
  };
}

const StyleContext = createContext<IStyleContext>(getDefaultValue([]));

export { getDefaultValue, StyleContext };
