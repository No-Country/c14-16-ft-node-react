import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const Utils = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export default Utils;
