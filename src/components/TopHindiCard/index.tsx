import React, { FC } from "react";
import { TMedia } from "../../@types/media.type";

type TProps = {
  item: TMedia;
  index: number;
  openPreviewModal: (data: TMedia) => void;
};

const TopHindiCard: FC<TProps> = ({ item, index, openPreviewModal }) => {
  return (
    <div
      className="w-full flex flex-col p-3 relative cursor-pointer"
      onClick={() => openPreviewModal(item)}
    >
      <div className="bg-[#13171D] h-48 rounded-lg shadow-[0_5px_20px_-15px_rgba(255,255,255,0.3)] overflow-hidden flex-1 flex flex-col">
        <img
          className="bg-cover h-48"
          src={item.thumbnail_horizontal}
          alt={item.title}
        />
        <div className="absolute text-white font-black text-7xl -left-0 bottom-1 z-1">
          {index}
        </div>
      </div>
    </div>
  );
};

export default TopHindiCard;
