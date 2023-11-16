import { sharedFunction } from "@duannx-poc-base-ui/shared";
import { InputProps } from "./types";

export default function Input({ onChange = () => {} }: InputProps) {
  sharedFunction();
  return <input onChange={onChange} placeholder="I'm an input v0.1.2"/>;
}
