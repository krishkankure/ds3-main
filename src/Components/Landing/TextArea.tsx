import Button from "../Button";
import { baseURL } from "../../Utils/info";
import { useTheme } from "../../Pages/Home/useTheme";

export default function Text() {
  const { isDark } = useTheme();

  return (
    <div
      className="flex flex-col justify-start mt-[8vh] md:mt-[20vh]"
      id="textarea"
    >
      <div className="">
        <div
          className={`flex ${
            isDark ? "text-white" : "text-black"
          } text-[4vw] lg:text-[2vw] leading-normal lg:leading-[2vw] ml-[-0.1rem] font-albert-sans mb-2 lg:mb-2`}
        >
          <div className="text-[#F58134]">LEARN</div>,
          <div className="text-[#19B5CA] ml-[0.5rem]">BUILD</div>,
          <div className="text-[#A9A9A9] ml-[0.5rem] mr-2">INNOVATE</div>
          <span className={`${isDark ? "text-white" : "text-black"}`}>
            WITH DATA
          </span>
        </div>
        <div className="flex flex-col -ml-[0.1rem]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center">
            <p
              className={`lg:text-[4vw] text-[11vw] ${
                isDark ? "text-white" : "text-black"
              } font-medium font-albert-sans leading-[1.1] lg:leading-tight`}
            >
              Data Science
            </p>
            <p
              className={`lg:text-[4vw] text-[11vw] ${
                isDark ? "text-white" : "text-black"
              } font-medium font-albert-sans leading-[1.1] lg:leading-tight lg:ml-4 hidden lg:block`}
            >
              Student
            </p>
          </div>
          <div className="lg:hidden flex items-center">
            <p
              className={`text-[11vw] ${
                isDark ? "text-white" : "text-black"
              } font-medium font-albert-sans leading-[1.1]`}
            >
              Student Society
            </p>
            <img
              src={`${baseURL}/src/Assets/Images/ds3_logo.png`}
              alt="Logo"
              className="-scale-x-100 w-12 object-contain ml-2"
            />
          </div>
          <div className="hidden lg:flex items-center">
            <p
              className={`lg:text-[4vw] text-[11vw] ${
                isDark ? "text-white" : "text-black"
              } font-medium font-albert-sans leading-[1.1] lg:leading-tight`}
            >
              Society
            </p>
            <img
              src={`${baseURL}/src/Assets/Images/ds3_logo.png`}
              alt="Logo"
              className="-scale-x-100 w-12 object-contain ml-2"
            />
          </div>
        </div>

        <div
          className={`mt-2 text-[4.5vw] md:text-[1.5vw] pb-6 md:pb-10 font-albert-sans ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          We are here to expand the horizons of data science as a community
          together.
        </div>
        <Button contents="JOIN US" onclick={() => {}} />
      </div>
    </div>
  );
}
