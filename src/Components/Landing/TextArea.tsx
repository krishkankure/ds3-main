import { forwardRef, LegacyRef } from "react";
import Button from "../Button";
const Text = forwardRef((_props, ref: LegacyRef<HTMLDivElement>) => {
  return (
    <div
      className="flex flex-col justify-center mt-[20vh]"
      id="textarea"
      ref={ref}
    >
      <div className="">
        <div className=" text-[4vw] text-white">DS3</div>
        <div className="flex text-white text-[5vw] leading-[4vw] ml-[-0.1rem]">
          <div className="text-[#F58134]">Learn</div>,
          <div className="text-[#19B5CA] ml-[0.5rem]">Build</div>,
          <div className="text-[#A9A9A9] ml-[0.5rem]">Innovate</div>, With Data
        </div>
        <div className="mt-4 text-[1.5vw]">
          We are here to expand the horizons of data science as a community
          together.
        </div>
        <Button contents="JOIN US" onclick={() => {}} />
      </div>
    </div>
  );
});
export default Text;
