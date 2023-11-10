import { sharedFunction } from "@duannx-poc-base-ui/shared";
import { ButtonProps } from "./types";

export default function Button({ onClick = () => {} }: ButtonProps) {
  console.log('inside button v0.1.2')
  sharedFunction();
  return <button onClick={onClick}>Im a button v0.1.2</button>;
}
