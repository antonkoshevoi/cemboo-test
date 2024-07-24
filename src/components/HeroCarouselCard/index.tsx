import React, { FC } from "react";
import { TMedia } from "../../@types/media.type";

type TProps = {
  item: TMedia;
  openPreviewModal: (data: TMedia) => void;
};

const HeroCarouselCard: FC<TProps> = ({ item, openPreviewModal }) => {
  return (
    <div
      key={item.id}
      className="w-full  flex flex-col p-3 h-72"
      onClick={() => openPreviewModal(item)}
    >
      <div className="bg-[#13171D] rounded-lg shadow-[0_5px_20px_-15px_rgba(255,255,255,0.3)] overflow-hidden flex-1 flex flex-col">
        <img
          className="bg-cover h-36"
          src={item.thumbnail_horizontal}
          alt={item.title}
        />
        <div className="p-4 flex-1 flex flex-col h-32">
          <h3 className="mb-4 text-l text-white">{item.title}</h3>
          <div className="md-4 text-grey-darker text-sm flex-1 text-white">
            <p>{item.director}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarouselCard;
