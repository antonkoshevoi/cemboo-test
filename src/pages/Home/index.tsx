import React, { FC, useEffect, useState } from "react";
import { BACKEND_ROUTES } from "../../routes/backent.paths";
import { TMedia } from "../../@types/media.type";
import HeroBanner from "../../components/HeroBanner";
import HeroCarouselCard from "../../components/HeroCarouselCard";
import TopHindiCard from "../../components/TopHindiCard";
import { config } from "../../utils/config";
import MediaPopup from "../../components/MediaPopup";
import Slider from "react-slick";

const Home: FC<{}> = () => {
  const [media, setMedia] = useState<TMedia[]>([]);
  const [hindiMedia, setHindiMedia] = useState<TMedia[]>([]);
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const [mediaPopupData, setMediaPopupData] = useState<TMedia | null>(null);

  useEffect(() => {
    const getMedias = async (): Promise<void> => {
      try {
        const endpoint = BACKEND_ROUTES.getMedia;

        await fetch(endpoint, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setHindiMedia(data.slice(0, 10));
            setMedia(data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getMedias();
  }, []);

  const openPreviewModal = (mediaData?: TMedia) => {
    setOpenPopup(true);
    mediaData ? setMediaPopupData(mediaData) : openPreviewModal(media[0]);
  };

  const closePopup = () => {
    setOpenPopup(!openPopup);
    setMediaPopupData(null);
  };

  return (
    <div>
      <HeroBanner openPreviewModal={openPreviewModal} />

      <div className="content">
        <div className="mx-2 relative">
          <h2 className="text-white text-2xl pt-3">Top 20</h2>

          <Slider {...config.carousel_settings}>
            {media?.map((item: TMedia, idx: number) => {
              return (
                <div
                  key={item.id}
                  className="group relative flex justify-center"
                  id={"overlay-root-" + idx}
                >
                  <HeroCarouselCard
                    item={item}
                    key={item.id}
                    openPreviewModal={openPreviewModal}
                  />
                  <div
                    className="absolute top-0 left-0 scale-0 rounded bg-gray-800 p-2 text-xs group-hover:scale-100 w-full z-20"
                    onClick={() => openPreviewModal(item)}
                  >
                    <img
                      className="bg-cover h-48 w-full"
                      src={item.thumbnail_horizontal}
                      alt={item.title}
                    />
                    <p className="text-white text-sm text-center font-bold">
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

        <div className="mx-2">
          <h2 className="text-white text-xl py-3">
            Top 10 in India today - Hindi
          </h2>

          <Slider {...config.carousel_settings}>
            {hindiMedia?.map((card: TMedia, idx: number) => {
              return (
                <TopHindiCard
                  key={card.id}
                  item={card}
                  index={idx + 1}
                  openPreviewModal={openPreviewModal}
                />
              );
            })}
          </Slider>
        </div>
      </div>

      {openPopup && mediaPopupData && (
        <MediaPopup closePopup={closePopup} data={mediaPopupData} />
      )}
    </div>
  );
};

export default Home;
