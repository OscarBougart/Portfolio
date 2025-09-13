import { brainwave } from "../assets";
import { navigation } from "../constants";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

//
//<a href="https://www.flaticon.com/free-icons/letter-o" title="letter o icons">Letter o icons created by prinda895 - Flaticon</a>
//<a href="https://www.flaticon.com/free-icons/alphabet" title="alphabet icons">Alphabet icons created by Rohim - Flaticon</a>

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl 
      }`}
    >
      <div className=" flex items-center  justify-between px-5 lg:px-7.5 xl:px-10 max-lg:px-4">
        <a
          href="#hero"
          onClick={handleClick}
          className=" tracking-wider font-light h4 font-playfair uppercase text-ls-6 "
          alt="My name"
        >
          Oscar Bougart
        </a>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed  top-[5rem] left-0 right-0 bottom-0  lg:static lg:flex lg:bg-transparent`}
        >
          <div className="relative  z-2 flex flex-col items-center  justify-center lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`p-4 m-5  tracking-wider block relative text-sm font-medium font-grotesk uppercase text-ls-6  transition-colors hover:text-color-17 `}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>
        {/*<a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          new account
        </a>
        <Button className="hidden lg:flex href='#login'">Sign In</Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
        
         ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-base  lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-18"
                    : "lg:text-n-1"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`
        
        */}
      </div>
    </div>
  );
};

export default Header;
