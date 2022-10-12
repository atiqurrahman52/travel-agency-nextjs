
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
// import { Link, NavLink, useLocation } from "react-router-dom";
// import logo from "../assets/images/header/Logo.svg";
import logo from "../../public/assets/images/header/Logo.svg"
import { useRouter } from 'next/router'

export default function Navbar() {
//   const location = useLocation();
  const location = useRouter();

  const [navbar, setNavbar] = useState(false);
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


  
  // <nav
  //   className={`w-full shadow-lg md:shadow-none
  //   md:pb-5 md:pt-6 fixed top-0 z-50 transition-all duration-500`}
  // >

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
            <Link href="/">
              {/* <Image className="lg:hidden block  w-[84px]" src={logo} alt="" /> */}
              <h2 className="lg:hidden block ">Logo</h2>
            </Link>
            <div className="md:hidden">
              <button className="p-2 " onClick={() => setNavbar(!navbar)}>
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-[#D00338E5]/90"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="text-[#D00338E5]/90"
                    width="25"
                    height="26"
                    viewBox="0 0 25 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="2.82812"
                      y="5.68213"
                      width="10.0859"
                      height="2.8817"
                      rx="1.44085"
                      fill="#D00338"
                      fillOpacity="0.9"
                    />
                    <rect
                      x="2.82812"
                      y="11.4456"
                      width="20.1719"
                      height="2.8817"
                      rx="1.44085"
                      fill="#D00338"
                      fillOpacity="0.9"
                    />
                    <rect
                      x="2.82812"
                      y="17.209"
                      width="12.9676"
                      height="2.8817"
                      rx="1.44085"
                      fill="#D00338"
                      fillOpacity="0.9"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-3 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
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
                <Link href="/">
                  <Image src={logo} alt="" />
                </Link>
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
