import { useTheme } from "../Home/useTheme";
import { useCalendarEvents } from "../../Hooks/useCalendarEvents";
const skeletonContent = {
  title: "",
  date: "",
  description: "",
  type: "",
  location: "",
};
export default function UpcomingEvents() {
  const { events, loading, error } = useCalendarEvents();

  return (
    <>
      <div className="w-full flex md:px-24 px-2 py-10 gap-2 flex-col">
        <div className="grid grid-cols-[repeat(auto-fit,clamp(300px,40vw,400px))] w-full gap-2 md:gap-5 ">
          {!loading &&
            events.map((daton, index) => {
              return <Card {...daton} key={index} />;
            })}
          {loading &&
            Array.from({ length: 10 }).map((_, index) => {
              return (
                <>
                  <Card {...skeletonContent} key={index} />
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}

function Card({
  title,
  date,
  description,
  image,
  location,
}: {
  title?: string;
  date?: string;
  description?: string;
  image?: string;
  location: string;
}) {
  const { isDark } = useTheme();
  console.log(image);
  return (
    <div
      className={`p-4 rounded-lg shadow-lg border relative cursor-pointer duration-100 w-full aspect-[1/1.2] ${
        isDark
          ? "bg-black text-white border-white hover:[box-shadow:0px_0px_20px_8px_#F58134]"
          : "bg-white text-black border-gray-300 hover:[box-shadow:0px_0px_20px_8px_#11B3C9]"
      }`}
    >
      <div className="absolute top-4 right-4 flex space-x-2">
        <span className="w-3 h-3 bg-[#F58134] rounded-full"></span>
        <span className="w-3 h-3 bg-[#11B3C9] rounded-full"></span>
        <span className="w-3 h-3 bg-[#434343] rounded-full"></span>
      </div>
      <div
        className={`w-[80%]  h-4 mb-2 flex items-center rounded-full  ${
          isDark ? "bg-[#303030]" : "bg-gray-200"
        }`}
        style={{
          borderRadius: "370px",
        }}
      ></div>

      <div className="mb-2">
        <span
          className="text-[1.6rem] font-normal relative"
          style={{
            fontFamily: "'Albert Sans', sans-serif",
            color: isDark ? "white" : "black",
          }}
        >
          {title}
        </span>
        <p
          className="text-lg opacity-80"
          style={{
            fontFamily: "'Albert Sans', sans-serif",
            color: isDark ? "white" : "black",
          }}
        >
          {date}
        </p>
        <p
          className="text-lg opacity-80"
          style={{
            fontFamily: "'Albert Sans', sans-serif",
            color: isDark ? "white" : "black",
          }}
        >
          {location}
        </p>
      </div>
      <div className="max-h-[300px] w-full mx-auto aspect-[1/1.3] m-auto-[1/1.3] relative mb-2">
        <img
          src={image}
          className=" object-cover rounded-md z-2 w-full h-full"
        ></img>
        {/* <div className="absolute top-0 skeleton z-1 w-full h-full rounded-lg"></div> */}
      </div>

      {description && (
        <p
          className="text-lg opacity-80 md:max-h-[35%] overflow-y-auto text-wrap w-full"
          style={{
            fontFamily: "'Albert Sans', sans-serif",
            color: isDark ? "white" : "black",
            lineHeight: "25px",
          }}
          dangerouslySetInnerHTML={{ __html: description ? description : "" }}
        ></p>
      )}
      {!description && (
        <>
          <p
            className="text-lg opacity-80 md:max-h-[35%] overflow-y-auto text-wrap w-full"
            style={{
              fontFamily: "'Albert Sans', sans-serif",
              color: isDark ? "white" : "black",
              lineHeight: "25px",
            }}
          >
            <div className="h-7 m-1 w-auto skeleton"></div>
            <div className="h-7 m-1 w-auto skeleton"></div>
            <div className="h-7 m-1 w-auto skeleton"></div>
            <div className="h-7 m-1 w-[80%] skeleton"></div>
          </p>
        </>
      )}
      {/* {description && title && date && (
        <a
          href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title?.replace(
            " ",
            "+"
          )}&details=${description}&location=${""}&dates=${new Date(
            date
          ).toISOString()}&ctz=America/Los_Angeles
`}
        >
          Add to Calendar
        </a>
      )} */}
    </div>
  );
}
