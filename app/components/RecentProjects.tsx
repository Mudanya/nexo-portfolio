import { projects } from "@/data";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import dynamic from "next/dynamic";
// import { PinContainer } from "./ui/3d-Pin";
const PinContainer = dynamic(() => import("./ui/3d-Pin"), { ssr: false });
import { FaArrowRight, FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A sneak peek of my {" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="mt-10 flex flex-wrap justify-center p-4 items-center gap-x-24 gap-y-8" id="projects">
        {projects.map(({ id, des, iconLists, title, img, link }) => (
          <div
            key={id}
            className="flex h-[32rem] sm:h-[41rem] w-[80vw] items-center justify-center sm:w-[570px] lg:min-h-[32.5rem]"
          >
            <PinContainer title={link} href={link}>
              <div className="relative mb-10 flex h-[30vh] w-[80vw] items-center justify-center overflow-hidden sm:w-[570px] sm:h-[40vh]">
                <div className="relative h-full w-full overflow-hidden rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg" />
                </div>
                <img src={img} alt={title} className="absolute z-10  bottom-0" />
              </div>
              <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">
                {title}
              </h1>
              <p className="line-clamp-2 text-sm font-light lg:text-lg lg:font-normal">
                {des}
              </p>
              <div className="mb-3 mt-7 flex items-center justify-between">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      style={{ transform: `translateX(-${5 * index}px)` }}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:h-10 lg:w-10"
                    >
                      <img className="p-2" src={icon} alt={icon} />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center">
                  <p className="flex text-xs text-purple md:text-sm lg:text-xl">
                    Checkout Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
