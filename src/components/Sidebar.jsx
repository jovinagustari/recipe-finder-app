import { Heart, Home, InfoIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
        <DesktopSidebar />
        <MobileSidebar />
    </>
  )
};
export default Sidebar;

const DesktopSidebar = () => {
    return (
        <div className="p-3 md:p-6 shadow-inner border-r min-h-screen bg-[#F5F5DC] w-20 md:w-52 lg:w-60 hidden sm:block">
          <div className="flex flex-col gap-10 sticky top-10 left-0">
            <div className="w-full p-2">
              <img src="/logoo.png" alt="logo" className="hidden md:block"/>
              <img src="/foodies.png" alt="logo" className="block md:hidden"/>
            </div>
            <ul className="flex flex-col items-center md:items-start gap-4">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `flex gap-1 md:w-full md:border-b border-black pb-2 p-2 md:hover:shadow-inner ${
                    isActive ? 'bg-[#FFDAB9]' : ''
                  }`}
              >
                <Home size={"24"} className="hover:fill-slate-900" />
                <span className="font-semibold font-sans hidden md:block hover:font-bold mx-2">Home</span>
              </NavLink>
              <NavLink
                to="/favorites"
                end
                className={({ isActive }) =>
                  `flex gap-1 md:w-full md:border-b border-black pb-2 p-2 md:hover:shadow-inner ${
                    isActive ? 'bg-[#FFDAB9]' : ''
                  }`}
              >
                <Heart size={"24"} className="hover:fill-slate-900" />
                <span className="font-semibold font-sans hidden md:block hover:font-bold mx-2">Favorites</span>
              </NavLink>
              <NavLink
                to="/about"
                end
                className={({ isActive }) =>
                  `flex gap-1 md:w-full md:border-b border-black pb-2 p-2 md:hover:shadow-inner ${
                    isActive ? 'bg-[#FFDAB9]' : ''
                  }`}
              >
                <InfoIcon size={"24"} className="hover:fill-slate-900 hover:text-white" />
                <span className="font-semibold font-sans hidden md:block hover:font-bold mx-2">About</span>
              </NavLink>
            </ul>
          </div>
        </div>
    )
};

const MobileSidebar = () => {
  return (
    <div className="flex justify-center gap-10 shadow-inner border-t border-slate-400 fixed w-full 
    bottom-0 left-0 bg-[#F5F5DC] z-10 p-4 sm:hidden">
      <NavLink
        to="/"
        end
      >
        {({ isActive }) => (
          <Home
            size={"24"}
            className={`cursor-pointer transition-colors ${
              isActive ? 'fill-slate-800 text-white' : ''
            } hover:fill-slate-800 hover:text-white`}
          />
        )}
      </NavLink>
      <NavLink
        to="/favorites"
        end
      >
        {({ isActive }) => (
          <Heart
            size={"24"}
            className={`cursor-pointer transition-colors ${
              isActive ? 'fill-slate-800 text-white' : ''
            } hover:fill-slate-800 hover:text-white`}
          />
        )}
      </NavLink>
      <NavLink
        to="/about"
        end
      >
        {({ isActive }) => (
          <InfoIcon
            size={"24"}
            className={`cursor-pointer transition-colors ${
              isActive ? 'fill-slate-800 text-white' : ''
            } hover:fill-slate-800 hover:text-white`}
          />
        )}
      </NavLink>
    </div>
  )
}
