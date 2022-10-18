import Image from "next/image";
import Link from "next/link";

// data
import { footerData } from "../../public/assets/data/navigation/footerData";
import {
  paymentMethodsSvg,
  socialIconsSvg,
} from "../../public/assets/data/svgData";

const Footer = () => {
  const Logo = () => {
    return (
      <Link href="/">
        <div className="relative h-[45px] md:h-[54px] w-[126px] md:w-[176px] mx-auto lg:mx-0">
          <Image src="/assets/images/footer/Logo.png" layout="fill" alt="" />
        </div>
      </Link>
    );
  };

  const FooterTitle = (props) => {
    const { label, rightAlign } = props;

    return (
      <div className="mb-6 lg:mb-10">
        <p
          className={`font-nunito font-extrabold text-[#393E50] text-sm lg:text-base leading-5 pb-2.5 ${
            rightAlign && "text-end md:text-start"
          }`}
        >
          {label}
        </p>
        <div
          className={`w-16 h-[1px] bg-[#5C5C5C] ${
            rightAlign && "ml-auto md:ml-0"
          }`}
        />
      </div>
    );
  };

  return (
    <div className="container py-10 lg:pt-16">
      <p className="text-center text-accent text-[32px] lg:text-[64px] font-quentin leading-[48px] lg:leading-[86px]">
        Make memories with us
      </p>

      <div className="grid grid-cols-12 gap-6 py-10 xl:py-20">
        <div className="col-span-12 lg:col-span-4 xl:col-span-5">
          <Logo />
          <p className="text-tertiary font-nunito leading-[20px] lg:pr-6 lg:text-left text-center lg:max-w-[416px]">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </p>
          <div className="flex gap-3 mt-5 lg:mx-0 w-max mx-auto">
            {paymentMethodsSvg.map((item, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-8 xl:col-span-7 grid grid-cols-12">
          {footerData.map(({ id, label, items }) => {
            return (
              <div
                key={id}
                className={`${
                  id === 2
                    ? "col-span-12 md:col-span-4 xl:col-span-4"
                    : "col-span-6 md:col-span-4 xl:col-span-3"
                }`}
              >
                <FooterTitle
                  label={label}
                  rightAlign={id == 1 ? true : false}
                />
                <div
                  className={`text-[#747474] font-poppins leading-[22px] space-y-[14px] ${
                    id !== 2 && "uppercase"
                  }`}
                >
                  {items.map((item, i) => {
                    return (
                      <p
                        key={i}
                        className={`block text-sm xl:text-base hover:text-accent/50 transition-all duration-200 ${
                          id == 1 && "text-end md:text-start"
                        }`}
                      >
                        {item.path ? (
                          <Link href={item.path}>
                            <a>{item.title}</a>
                          </Link>
                        ) : (
                          <>{item}</>
                        )}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-5 justify-between pt-[30px] border-t">
        <p className="text-[#747474] font-nunito font-[600] text-sm leading-[16px]">
          &#169; 2022 Tourelish. All Rights Reserved
        </p>

        <div className="flex gap-4">
          {socialIconsSvg.map((item, i) => {
            return (
              <Link key={i} href={item.path}>
                <a target="_blank" className="h-8 w-8 rounded-full border flex items-center justify-center group cursor-pointer hover:bg-gray-100">
                  <p
                    dangerouslySetInnerHTML={{ __html: item.icon }}
                    className="group-hover:scale-150 transition-all duration-500"
                  />
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
