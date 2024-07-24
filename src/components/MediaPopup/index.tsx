import React, { FC } from "react";
import { TMedia } from "../../@types/media.type";
import { XCircleIcon } from "@heroicons/react/24/solid";

type TProps = {
  data: TMedia;
  closePopup: () => void;
};
const MediaPopup: FC<TProps> = (props) => {
  const {  closePopup, data } = props;

  return (
    <div
      className="fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 "
      onClick={() => closePopup()}
    >
      <div className="relative top-40 mx-auto shadow-xl rounded-md bg-[#13171D] lg:max-w-2xl xl:max-w-3xl">
        <div className="flex justify-end p-2">
          <button
            onClick={() => closePopup()}
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
          >
            <XCircleIcon width={26} height={26}/>
          </button>
        </div>
        <div className="w-full flex flex-col items-center p-5">
          <h3 className="text-white text-2xl font-bold mb-2">{data.title}</h3>
           <iframe
            width="100%"
            height="350"
            src="https://www.youtube.com/embed/Oflbho9ZG2U?start=103"
            title="YouTube video player"
            allow="accelerometer; 
            autoplay; 
            clipboard-write; 
            encrypted-media; 
            gyroscope; 
            picture-in-picture; 
            web-share"
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default MediaPopup;
