import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CgMenuLeft, CgClose } from "react-icons/cg";

import { navItems } from "../../public/assets/data/navigation/navbarData";
import Logo from "../shared/Logo";

export default function Navbar() {
  const router = useRouter();

  const [navOpen, setNavOpen] = useState(false);
  const [colorChange, setColorChange] = useState(false);

  const destinationPath = router.pathname === "/destination";
  const singleDestinationPath =
    router.pathname === "/destination/[destinationTitle]";

  // console.log(router);

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
  }, [colorChange]);

  return (
    <div className="mb-16 md:mb-0">
      <nav
        className={`w-full shadow-lg md:shadow-none bg-white text-primary md:pb-5 md:pt-6 fixed top-0 left-0 z-50 transition-all duration-500 ${
          colorChange
            ? "!shadow-lg"
            : !singleDestinationPath && "md:bg-transparent"
        }`}
      >
        <div className="justify-center px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <div className="md:hidden">
                <Logo />
              </div>
              <div className="md:hidden">
                <button className="p-2" onClick={() => setNavOpen(!navOpen)}>
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
              <div className="items-center justify-center space-y-6 md:flex md:space-x-10 md:space-y-0">
                {navItems.map(({ id, label, path }) => {
                  return (
                    <div key={id}>
                      {label ? (
                        <p
                          className={`uppercase font-nunito text-sm md:text-base ${
                            router.pathname === path
                              ? destinationPath && !colorChange
                                ? "md:text-white font-extrabold"
                                : "text-primary font-extrabold"
                              : destinationPath && !colorChange
                              ? "md:text-white font-semibold"
                              : singleDestinationPath
                              ? "text-secondary font-semibold"
                              : "text-primary/40 font-semibold"
                          }`}
                        >
                          <Link href={path}>
                            <a>{label}</a>
                          </Link>
                          <div
                            className={`h-[2px] mt-1 rounded-2xl hidden md:block ${
                              router.pathname === path && "bg-accent"
                            } w-3/5 mx-auto`}
                          />
                        </p>
                      ) : (
                        <p className="hidden md:block">
                          <Logo />
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
