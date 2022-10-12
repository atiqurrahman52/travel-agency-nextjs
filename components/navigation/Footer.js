import React from "react";
// import logo from "../../src/assets/images/footer/Logo.png";
import logo from "../../public/assets/images/footer/Logo.png";
import visa from "../../public/assets/images/footer/VISA.png";
import mastercard from "../../public/assets/images/footer/Mastercard.png";
import amex from "../../public/assets/images/footer/amex.png";
import paypal from "../../public/assets/images/footer/Paypal.png";
import linkedin from "../../public/assets/images/footer/linkedin.png";
import facebook from "../../public/assets/images/footer/Facebook.png";
import instagram from "../../public/assets/images/footer/Instagram.png";
import youtube from "../../public/assets/images/footer/Youtube.png";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mb-4">
      <div className="container ">
        <div>
          <p className="text-center text-accent font-normal text-[32px] lg:text-[64px]  font-quentin leading-[48px]  lg:leading-[86px] lg:mb-[64px] mb-[30px]">
            Make memories with us
          </p>
        </div>

        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-4">
            <div>
              <Image className="lg:mx-0 w-max mx-auto" src={logo} alt="" />
              <p className="text-tertiary text-[16px] font-nunito font-normal leading-[20px] lg:pr-6 lg:text-left text-center">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content.
              </p>
            </div>
            <div className="flex gap-3 mt-5 lg:mx-0 w-max mx-auto">
              <Image src={visa} alt="" srcSet="" />
              <Image src={mastercard} alt="" />
              <Image src={amex} alt="" />
              <Image src={paypal} alt="" />
            </div>
          </div>

          <div className="lg:col-span-3 md:col-span-4 col-span-6 lg:mb-[40px] mb-[24px]">
            <div>
              <p className="font-nunito font-[800] text-[#393E50] lg:text-[16px] text-[14px] leading-[20px] pb-[10px] footer_item">
                Inspiration For Tourcode
              </p>
              <span className="w-[calc(100%-80%)] h-[1px] bg-[#5C5C5C] md:inline-block mb-[32px] hidden"></span>
            </div>

            <ul className="flex flex-col gap-[14px] text-[16px] text-[#747474] font-[400] font-poppins leading-[22px]">
              <Link href=""> Ladhak </Link>
              <Link href=""> Dubai </Link>
              <Link href=""> Edinburgh </Link>
              <Link href=""> Kilimanjaro </Link>
              <Link href=""> Beijing </Link>
              <Link href=""> Miyajima </Link>
              <Link href=""> Sydney </Link>
            </ul>
          </div>

          <div className="lg:col-span-2 md:col-span-4 col-span-6">
            <div>
              <p className="font-nunito font-[800] text-[#393E50] lg:text-[16px] text-[14px] leading-[20px] md:text-left text-right pb-[10px] footer_item">
                Quick Links
              </p>
              <span className="w-[calc(100%-80%)] h-[1px] bg-[#5C5C5C] md:inline-block mb-[32px] hidden"></span>
            </div>

            <ul className="flex flex-col gap-[14px] md:text-left text-right text-[16px] text-[#747474] font-[400] font-poppins leading-[22px]">
              <Link href="/">Home</Link>
              <Link href="/destination">Destinations</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/about">About</Link>
              <Link href="#"> Terms & Conditions </Link>
              <Link href="#"> License </Link>
            </ul>
          </div>

          <div className="lg:col-span-3 md:col-span-4 col-span-12">
            <div>
              <h3 className="font-nunito font-[800] text-[#393E50] lg:text-[16px] text-[14px] leading-[20px] pb-[10px] footer_item">
                Get in touch
              </h3>
              <span className="w-[calc(100%-80%)] h-[1px] bg-[#5C5C5C] md:inline-block mb-[32px] hidden"></span>
            </div>

            <div className="lg:text-[16px] text-[14px] text-[#747474] font-[400] font-poppins gap-[14px] gap-x-16 leading-[32px] mb-[40px]">
              <p>
                Email:
                <Link href="mailto:info@trouelish.com">info@trouelish.com</Link>
              </p>
              <p>
                Phone: <Link href="callto:+12345678900">+1 234 567 89 00</Link>
              </p>
              <p>
                Location: 120/A Street Address, Los Angel,
                <br />
                USA, 1612
              </p>
            </div>
          </div>
        </div>
        <hr />

        <div className="flex flex-col lg:flex-row items-center gap-5 justify-between mt-[30px]">
          <p className="text-[#747474] font-nunito font-[600] text-[14px] leading-[16px]">
            © 2022 Tourelish. All Rights Reserved
          </p>

          <div className="flex gap-3">
            <Link href="#">
              <Image src={linkedin} alt="" />
            </Link>
            <Link href="#">
              <Image src={facebook} alt="" />
            </Link>
            <Link href="#">
              <Image src={instagram} alt="" />
            </Link>
            <Link href="#">
              <Image src={youtube} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
