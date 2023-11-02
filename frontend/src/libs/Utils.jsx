import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const Utils = (...inputs) => {
  return twMerge(clsx(inputs));
};

export default Utils;