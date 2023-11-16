import {StyleContext, getDefaultValue} from "./StyleContext";
import { isOnServer } from "./ssr";
import type { ComponentStyle } from "./StyleContext";

function sharedFunction() {
  return "";
}

export { sharedFunction, StyleContext, isOnServer, getDefaultValue };
export type { ComponentStyle };
