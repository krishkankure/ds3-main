import { motion } from "framer-motion";
import { AppearingVariants, starVariants } from "./LandingVariants";
import { useEffect, useRef, useState } from "react";
import star from "../../Assets/Images/Star.svg";
const Star = ({
  index,
  rect
}: {
  index: number;
  rect: React.RefObject<HTMLDivElement>;
}) => {
  const [x, setX] = useState(Math.floor(Math.random() * 100));
  const [y, setY] = useState(10 + Math.floor(Math.random() * 70));
  const [w, setW] = useState(3 + Math.floor(Math.random() * 7));
  const starref = useRef<HTMLDivElement>(null);
  const overlap = (rect1: DOMRect, rect2: DOMRect) => {
    return !(
      rect1.right < rect2.left ||
      rect1.left > rect2.right ||
      rect1.bottom < rect2.top ||
      rect1.top > rect2.bottom
    );
  };
  useEffect(() => {
    if (rect.current && starref.current)
      if (
        overlap(
          rect.current?.getBoundingClientRect(),
          starref.current?.getBoundingClientRect()
        )
      ) {
        setX(Math.floor(Math.random() * 100));
        setY(10 + Math.floor(Math.random() * 70));
        setW(3 + Math.floor(Math.random() * 7));
      }
  });
  return (
    <>
      <motion.div
        variants={AppearingVariants}
        key={index}
        style={{
          top: `${y}%`,
          left: `${x}%`,
          position: "absolute",
          opacity: 0.2
          // boxShadow: "0px 0px 40px 20px #ffffff"
        }}
      >
        <div ref={starref}>
          <motion.img
            src={star}
            alt=""
            variants={starVariants}
            initial="initial"
            animate="animate"
            transition={{
              delay: index * 0.1,
              duration: 10,
              repeat: Infinity
            }}
            style={{ width: `${w}vh` }}
          />
        </div>
      </motion.div>
    </>
  );
};

export default Star;
