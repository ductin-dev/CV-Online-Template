import { useContext } from "react";
import Context from "./context/context";
import useWindowSize from "./useWindowSize";
import { useClientReady } from "./useClientReady";
const ActiveSection = (active, animationIn, animationOut) => {
  const client = useClientReady();
  const { nav } = useContext(Context);
  const { width } = useWindowSize();
  return client ? `card-inner ${nav == active
    ? `animated active ${width > 1200 ? (animationIn ? animationIn : "fadeInLeft") : ""
    }`
    : width > 1200
      ? `animated hidden ${width > 1200 ? (animationOut ? animationOut : "fadeOutLeft") : ""
      }`
      : ""
    }` : "card-inner";
};
export default ActiveSection;