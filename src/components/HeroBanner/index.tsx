import React, { FC } from "react";
import bgImage from "../../assets/images/hero-desktop.webp";
import { PlayIcon } from "@heroicons/react/24/solid";
import useWindowDimensions from "../../utils/hooks";
import { cn } from "clsx-for-tailwind";

type TProps = {
  openPreviewModal: () => void;
};

const HeroBanner: FC<TProps> = ({openPreviewModal}) => {
  const { width: deviceWidth } = useWindowDimensions();

  return (
    <div
      className="w-full p-0 m-0 h-screen bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="absolute left-0 top-0 right-0 w-full p-0 m-0 h-screen bg-gradient-radial-to-br">
        <div className="w-full p-0 m-0 h-screen absolute bottom-0 left-0 top-0 right-0 bg-radial-gradient bg-opacity-25 opacity-25" />
        <div className="content flex justify-end items-end px-4 py-6">
          <div
            className={cn(
              "max-w-xs z-0 relative lg:max-w-[24em] lg:absolute lg:left-[3rem] lg:bottom-[3rem] ",
              {
                "max-w-72": deviceWidth <= 375,
                "max-w-60": deviceWidth <= 350,
              }
            )}
          >
            <div className="w-full flex justify-center flex-col items-center">
              <h1 className=" font-black text-white text-5xl font-sans my-2 italic flex">
                BHA
                <span className="font-sans font-extrabold text-sky-400 mx-2">
                  vs
                </span>
                MCI
              </h1>
              <button
                className="uppercase text-white bg-sky-400 relative touch-manipulation
                    font-bold text-3xl px-5 py-1 items-center 
                    justify-center flex transition-bg ease-out duration-300
                    hover:bg-sky-500
                    before:bg-white before:-skew-y-2 before:content-[''] 
                    before:h-full before:absolute 
                    before:w-[calc(100%-4px)] before:z-[-1]"
              >
                HightLight
              </button>
            </div>
            <div className="w-full flex flex-col flex-start mt-2">
              <p className="text-base text-white font-semibold my-4">
                Premier League 2023/24 <span className="mx-1">&#8226;</span> 6m{" "}
                <span className="mx-1">&#8226;</span> Football
              </p>
              <div className="text-base text-slate-300 font-medium">
                Phil Foden scored a brace as Manchester City humbled Brington to
                mve within one point of league leaders Arsenal in the Premier
                League 2023/24
              </div>
            </div>

            <button
              className="text-white font-bold px-5 py-1 items-center text-xl w-full rounded-md
               bg-gray-700 bg-opacity-75 mt-7 py-2 relative
                justify-center flex transition-bg ease-out duration-300"
                onClick={() => openPreviewModal()}
            >
              <PlayIcon width={16} height={16} />
              <span className="ml-2">Watch</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
