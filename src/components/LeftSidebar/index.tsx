import { FC, useState } from "react";
import {
  UserCircleIcon,
  HomeIcon,
  PlayCircleIcon,
  MagnifyingGlassIcon,
  TvIcon,
  FilmIcon,
  ListBulletIcon,
  ArrowLeftCircleIcon,
} from "@heroicons/react/24/solid";
import { cn } from "clsx-for-tailwind";
import logo from "../../logo.svg";
import useWindowDimensions from "../../utils/hooks";

const LeftSidebar: FC<{}> = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { width: deviceWidth } = useWindowDimensions();

  const Menus = [
    { title: "My Space" },
    {
      title: "Search",
      icon: <MagnifyingGlassIcon width={18} height={18} />,
      search: true,
    },
    { title: "Home", icon: <HomeIcon width={18} height={18} /> },
    { title: "TV", icon: <TvIcon width={18} height={18} /> },
    { title: "Movies", icon: <FilmIcon width={18} height={18} /> },
    { title: "Sports", icon: <PlayCircleIcon width={18} height={18} /> },
    { title: "Categories", icon: <ListBulletIcon width={18} height={18} /> },
  ];

  return (
    <div
    className={cn("h-screen pt-8 p-5 duration-300 absolute left-0 bg-[#13171D] z-50", {
       "w-64": open,
       "w-20": !open && deviceWidth > 425,
       "w-14" : !open && deviceWidth <= 425,
       "p-2": deviceWidth < 426,
    })}
    >
      <ArrowLeftCircleIcon
        width={16}
        height={16}
        onClick={() => setOpen(!open)}
        className={`${
          !open && "rotate-180"
        } bg-white text-dark-purple text-2xl rounded-full absolute -right-2 top-9 border border-dark-purple cursor-pointer`}
      />
      <div className="inline-flex h-11">
         <img src={logo} alt="cemboo" className="w-24" />
      </div>

      {/* menu */}
      <div className="flex h-full items-center justify-center">
        <ul className="flex flex-col self-center">
          {Menus.map((menu) => (
            <li
              key={menu.title}
              className={
                "text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-1 hover:bg-light-white rounded-md mt-2"
              }
            >
              {!menu.search ? (
                <>
                  <span className="text-2xl block float-left">
                    {menu.icon ? (
                      menu.icon
                    ) : (
                      <UserCircleIcon width={18} height={18} />
                    )}
                  </span>
                  <span
                    className={`text-base font-medium flex-1 duration-200 ${
                      !open && "hidden "
                    }`}
                  >
                    {menu.title}
                  </span>
                </>
              ) : (
                <>
                  <div
                    className={
                      "flex items-center rounded-md bg-light-white py-0 px-0"
                    }
                  >
                    <MagnifyingGlassIcon
                      width={18}
                      height={18}
                      className={
                        "text-white text-lg block float-left cursor-pointer mr-4"
                      }
                      onClick={() => setOpen(!open)}
                    />
                    <input
                      type={"search"}
                      placeholder="Search"
                      className={cn(
                        "text-base bg-transparent text-l w-full text-white focus:outline-none",
                        {
                          hidden: !open,
                        }
                      )}
                    />
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftSidebar;
