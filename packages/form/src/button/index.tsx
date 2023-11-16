import { sharedFunction, StyleContext } from "@duannx-poc-base-ui/shared";
import { ButtonProps } from "./types";
import style from './button.scss?inline'
import { useContext } from "react";

export default function Button({ onClick = () => {} }: ButtonProps) {
  sharedFunction();
  const styleContext = useContext(StyleContext)
  styleContext.addSsrCss({
    id: 'button',
    css: style
  })
  return <button className="button" onClick={onClick}>Im a button v0.1.2</button>;
}
