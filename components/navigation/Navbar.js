import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CgMenuLeft, CgClose } from "react-icons/cg";

export default function Navbar() {
  const location = useRouter();

  const [navOpen, setNavOpen] = useState(false);
  const [colorChange, setColorChange] = useState(false);

  const destinationPath = location.pathname === "/destination";

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  useEffect(() => {
    setColorChange(
      typeof window !== "undefined" && window.scrollY >= 80 ? true : false
    );
    window.addEventListener("scroll", changeNavbarColor);
  }, [colorChange, destinationPath]);

  const Logo = () => {
    return (
      <Link href="/">
        <div className="relative h-[26px] md:h-[54px] w-[84px] md:w-[176px]">
          <Image src="/assets/images/header/logo.svg" layout="fill" alt="" />
        </div>
      </Link>
    );
  };

  return (
    <nav
      className={`w-full shadow-lg md:shadow-none
      ${colorChange ? "bg-white !shadow-lg" : "bg-white md:bg-transparent"} 
      ${!colorChange && destinationPath ? "md:text-white" : "text-secondary "} 
      md:pb-5 md:pt-6 fixed top-0 z-50 transition-all duration-500 `}
    >
      <div className="justify-center px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="md:hidden">
              <Logo />
            </div>
            <div className="md:hidden">
              <button className="p-2 " onClick={() => setNavOpen(!navOpen)}>
                {navOpen ? (
                  <CgClose className="text-accent text-2xl" />
                ) : (
                  <CgMenuLeft className="text-accent text-2xl" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-3 md:block md:pb-0 md:mt-0 ${
              navOpen ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-6 md:flex md:space-x-10 md:space-y-0">
              <li className="uppercase font-nunito font-semibold text-sm md:text-base">
                {/* <Link href="/" className={`${location.pathname !== '/' && 'PositionUnset'}`}>Home</Link> */}
                <Link href="/">Home</Link>
              </li>
              <li className="uppercase font-nunito font-semibold text-sm md:text-base">
                <Link href="gallery">Gallery</Link>
              </li>
              <li className="hidden lg:block">
                <Logo />
              </li>
              <li className="uppercase font-nunito font-semibold text-sm md:text-base">
                <Link href="/destination">Destination</Link>
              </li>
              <li className="uppercase font-nunito font-semibold text-sm md:text-base">
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
