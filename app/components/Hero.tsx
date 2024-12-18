"use client";
import dynamic from "next/dynamic";
import { FaLocationArrow } from "react-icons/fa";
const MagicButton = dynamic(()=>import("./ui/MagicButton"),{ssr:false});
const  Spotlight  = dynamic(()=>import("./ui/Spotlight"),{ssr:false});
const  TextGenerateEffect  = dynamic(()=>import("./ui/TextGenerateEffect"),{ssr:false});

const Hero = () => {
  return (
    <>
      <div className=" pt-2 pb-40 sm:pb-36 md:pb-32" id="home">
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="w=[5ovw] left-80 top-20 h-[80vh]" fill="blue" />
      </div>
      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black-100 dark:bg-grid-white/[0.03]">
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>
      <div className="relative z-10 my-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <div className="">
            <img
              src="/nelson.png"
              alt="nelson"
              className="h-[20vh] sm:h-[30vh] md:h-[20vh]"
            />
          </div>
          {/* <h2 className="max-w-80 text-center text-xs uppercase tracking-widest text-blue-100">
            Dynamic Web Magic with Next.js
          </h2> */}
          <TextGenerateEffect
            words="Evolving ideas to create frictionless Experience"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <p className="mb-4 text-center sm:text-sm md:text-lg lg:text-2xl">
            Hi I &apos;m Nelson Fullstack Software Developer.
          </p>
          <a href="#about">
            <MagicButton
              title="Show More"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
