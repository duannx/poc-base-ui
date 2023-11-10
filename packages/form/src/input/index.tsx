import { sharedFunction } from "@duannx-poc-base-ui/shared";
import { InputProps } from "./types";

export default function Input({ onChange = () => {} }: InputProps) {
  console.log('inside input v0.1.2')
  sharedFunction();
  return <input onChange={onChange} placeholder="I'm an input v0.1.2"/>;
}
