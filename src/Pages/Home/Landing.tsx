import { motion, AnimatePresence } from "framer-motion";
import dino from "/src/Assets/Images/betterdino.png";
import TextArea from "../../Components/Landing/TextArea";
import Stars from "../../Components/Landing/Stars";
import { useEffect, useState } from "react";
import { useTheme } from "./useTheme";
import StarsData from "./StarsData.json";

const Landing = ({
  aboutUsRef,
}: {
  aboutUsRef: React.RefObject<HTMLDivElement>;
}) => {
  const [showArrow, setShowArrow] = useState(true);
  const { isDark } = useTheme();

  const handleScroll = () => {
    if (aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative flex flex-col lg:w-[80vw] w-[95vw] min-h-screen mx-auto">
      <Stars StarsArray={StarsData[Math.round(Math.random() * 4)]} />

      {/* Main content container that will move with navbar */}
      <div className="relative flex-1 flex flex-col">
        <TextArea />

        {/* Dino Image */}
        <div className="absolute md:bottom-[0vh] bottom-[30vh] right-[0.5vw] w-[400px] md:w-[500px] lg:w-[800px] 2xl:w-[1050px] h-1/2">
          <img
            src={dino}
            alt=""
            className="absolute w-[70%] md:w-1/2 right-2 md:right-10 bottom-10 rotate-[15deg]"
          />
        </div>

        {/* Scroll Indicator Arrow */}
        <AnimatePresence>
          {showArrow && (
            <motion.div
              className="absolute bottom-5 left-1/2 transform -translate-x-1/2 cursor-pointer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
            >
              <svg
                onClick={handleScroll}
                xmlns="http://www.w3.org/2000/svg"
                className={`h-8 w-8 ${
                  isDark ? "text-white" : "text-black"
                } animate-bounce`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Landing;
