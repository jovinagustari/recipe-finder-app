import { Heart, Home } from "lucide-react";
import { Link } from "react-router-dom";

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
        <div className="p-3 md:p-6 border-r min-h-screen w-20 md:w-60 hidden sm:block">
          <div className="flex flex-col gap-12 sticky top-10 left-0">
            <div className="w-full p-2">
              <img src="/logoo.png" alt="logo" className="hidden md:block"/>
              <img src="/foodies.png" alt="logo" className="block md:hidden"/>
            </div>
            <ul className="flex flex-col items-center md:items-start gap-6">
              <Link to={"/"} className="flex gap-1 md:w-full md:border-b pb-2 p-2 md:hover:shadow-md">
                <Home size={"24"} className="hover:fill-black"/>
                <span className="font-bold hidden md:block">Home</span>
              </Link>
              <Link to={"/favorites"} className="flex gap-1 md:w-full md:border-b pb-2 p-2 md:hover:shadow-md">
                <Heart size={"24"} className="hover:fill-black"/>
                <span className="font-bold hidden md:block">Favorites</span>
              </Link>
            </ul>
          </div>
        </div>
    )
};

const MobileSidebar = () => {
  return (
    <div className="flex justify-center gap-10 border-t fixed w-full 
    bottom-0 left-0 bg-white z-10 p-2 sm:hidden">
      <Link to={"/"}>
        <Home size={"24"} className="cursor-pointer hover:fill-black" />
      </Link>
      <Link to={"/favorites"}>
        <Heart size={"24"} className="cursor-pointer hover:fill-black" />
      </Link>
    </div>
  )
}
