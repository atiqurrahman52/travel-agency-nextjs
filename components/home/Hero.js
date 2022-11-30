import React from "react";
import Image from "next/image";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <div className="curb mb-10 p-1 lg:p-16">
      <div className="container">
        <div className="grid grid-cols-12 mt-5 md:mt-20 ">
          <div className="col-span-12 lg:col-span-6 mb-8">
            <h3 className="font-squarepeg font-normal text-[#FFC921] text-[32px] lg:text-[42px] leading-[48px] text-center lg:text-left mt-16 lg:mt-0 mb-1 lg:mb-2 ">
              Explore the world
            </h3>
            <h3 className="font-nunito font-extrabold text-accent text-2xl lg:text-[48px] leading-[36px] lg:leading-[56px] text-center lg:text-left mb-9">
              We Take Care of all your Dream Tours{" "}
            </h3>
            <p className="font-nunito font-normal text-secondary text-2xl leading-[36px] lg:leading-[38px] text-center lg:text-left">
              Let&rsquo;s start your journey with us, your dream will come
              true...
            </p>
          </div>

          <div className="col-span-12 lg:col-span-6 mb-8">
            <Image
              src="/assets/images/header/hero-section.webp"
              alt=""
              width={636}
              height={497}
            />
          </div>

          <div className="lg:col-span-3 col-span-6 mb-6">
            <div className="flex md:gap-5 gap-2 p-1 flex-col md:flex-row items-center md:items-center justify-center md:justify-center">
              <svg
                className="w-[30px] lg:w-[45px] h-[30px] lg:h-[45px]"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.8"
                  d="M23 38C31.8366 38 39 30.8366 39 22C39 13.1634 31.8366 6 23 6C14.1634 6 7 13.1634 7 22C7 30.8366 14.1634 38 23 38Z"
                  stroke="#D00338"
                  stroke-opacity="0.9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  opacity="0.8"
                  d="M37 29.1919L28.0385 23.7032C27.8843 23.6044 27.7092 23.5426 27.5269 23.5224L23.7476 23.013C23.4656 22.9727 23.1782 23.0266 22.9303 23.1664C22.6824 23.3062 22.4881 23.5239 22.3778 23.7854L20.1168 28.8303C20.0105 29.065 19.9757 29.3256 20.0168 29.5797C20.0578 29.8339 20.1729 30.0704 20.3478 30.26L23.4505 33.5959C23.5907 33.7494 23.6935 33.9331 23.7508 34.1326C23.808 34.3321 23.8182 34.5421 23.7806 34.7462L23.1369 38"
                  stroke="#D00338"
                  stroke-opacity="0.9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  opacity="0.8"
                  d="M12.4704 10L10.1066 13.5291C9.97071 13.8424 9.96451 14.1937 10.0893 14.5113L12.0831 19.6052C12.161 19.8176 12.2944 20.0071 12.4704 20.1558C12.6465 20.3044 12.8594 20.4072 13.0886 20.4542L16.7988 21.22C17.0047 21.26 17.1981 21.3455 17.3637 21.4697C17.5292 21.594 17.6623 21.7536 17.7524 21.9358L18.4112 23.2509C18.5282 23.4732 18.7064 23.6606 18.9265 23.7927C19.1465 23.9247 19.4 23.9964 19.6595 24H22"
                  stroke="#D00338"
                  stroke-opacity="0.9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  opacity="0.8"
                  d="M26.2898 7L27.8364 9.78673C27.9792 10.0487 28.0306 10.3507 27.9824 10.645C27.9342 10.9393 27.7893 11.2092 27.5703 11.4123L23.0968 15.4431C23.0219 15.5145 22.938 15.5758 22.8473 15.6256L20.8018 16.7536C20.6068 16.8568 20.3905 16.9135 20.1698 16.9194H16.611C16.3488 16.9208 16.0927 16.9984 15.8741 17.1427C15.6555 17.2871 15.4839 17.492 15.3803 17.7322L14.6902 19.3661L14 20.5"
                  stroke="#D00338"
                  stroke-opacity="0.9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div className="text-center md:text-left space-y-2">
                <CountUp
                  className="text-accent font-nunito font-extrabold lg:text-xl text-base leading-[28px]"
                  end={100}
                />
                <span className="text-accent font-nunito font-extrabold lg:text-xl text-base leading-[28px]">
                  +
                </span>
                <p className="text-primary font-nunito font-normal lg:text-base text-sm leading-5">
                  Countries
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 col-span-6 mb-6">
            <div className="flex md:gap-5 gap-2 p-1 flex-col md:flex-row items-center md:items-center justify-center md:justify-center">
              {/* <Image
                className="w-[30px] h-[30px] lg:w-10 lg:h-10"
                src="/assets/images/countdown/country.svg"
                alt=""
                width={45} height={45}
              /> */}
              <svg
                className="w-[30px] lg:w-[45px] h-[30px] lg:h-[45px]"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.8">
                  <path
                    d="M14.1049 32.2037C13.6651 31.8696 13.0378 31.9553 12.7037 32.3951C12.3696 32.8349 12.4553 33.4622 12.8951 33.7963L14.1049 32.2037ZM32.1223 33.7827C32.5546 33.439 32.6265 32.81 32.2827 32.3777C31.939 31.9454 31.31 31.8735 30.8777 32.2173L32.1223 33.7827ZM23 36.9952L22.9587 35.996L23 36.9952ZM13.5 33C12.8951 33.7963 12.8953 33.7964 12.8955 33.7966C12.8955 33.7966 12.8958 33.7968 12.8959 33.7969C12.8963 33.7972 12.8967 33.7975 12.8973 33.7979C12.8983 33.7987 12.8997 33.7998 12.9014 33.8011C12.9049 33.8037 12.9096 33.8073 12.9157 33.8118C12.9278 33.8209 12.9451 33.8339 12.9674 33.8503C13.0119 33.8833 13.0764 33.9306 13.1591 33.9901C13.3244 34.1091 13.5628 34.2771 13.8608 34.4775C14.4558 34.8775 15.2934 35.4098 16.2635 35.9381C18.1533 36.9672 20.7372 38.0894 23.0413 37.9943L22.9587 35.996C21.2408 36.067 19.0747 35.1916 17.22 34.1816C16.3179 33.6904 15.5346 33.1928 14.9767 32.8177C14.6983 32.6305 14.4774 32.4748 14.3274 32.3668C14.2524 32.3129 14.1953 32.2709 14.1576 32.243C14.1388 32.2291 14.1248 32.2187 14.116 32.212C14.1115 32.2087 14.1084 32.2063 14.1065 32.2049C14.1056 32.2042 14.105 32.2038 14.1047 32.2036C14.1046 32.2035 14.1045 32.2034 14.1046 32.2034C14.1046 32.2035 14.1047 32.2035 14.1047 32.2035C14.1048 32.2036 14.1049 32.2037 13.5 33ZM23.0413 37.9943C25.1384 37.9077 27.4469 36.7931 29.1314 35.8029C29.9955 35.2949 30.739 34.793 31.2665 34.4181C31.5308 34.2304 31.742 34.0737 31.8883 33.963C31.9616 33.9076 32.0186 33.8637 32.0581 33.833C32.0779 33.8177 32.0932 33.8057 32.104 33.7973C32.1093 33.793 32.1136 33.7897 32.1167 33.7873C32.1182 33.786 32.1194 33.7851 32.1204 33.7843C32.1209 33.7839 32.1213 33.7836 32.1216 33.7833C32.1217 33.7832 32.1219 33.7831 32.122 33.783C32.1222 33.7829 32.1223 33.7827 31.5 33C30.8777 32.2173 30.8778 32.2172 30.8779 32.2171C30.8779 32.2171 30.878 32.217 30.878 32.217C30.878 32.217 30.878 32.217 30.8779 32.2171C30.8776 32.2173 30.8771 32.2177 30.8763 32.2183C30.8747 32.2196 30.872 32.2218 30.8681 32.2248C30.8603 32.2309 30.8481 32.2405 30.8315 32.2534C30.7984 32.2791 30.748 32.3179 30.6819 32.3679C30.5496 32.468 30.3544 32.6128 30.1081 32.7878C29.6146 33.1384 28.9204 33.6069 28.1178 34.0787C26.4686 35.0483 24.5271 35.9312 22.9587 35.996L23.0413 37.9943Z"
                    fill="#D00338"
                    fill-opacity="0.9"
                  />
                  <path
                    d="M22.5 21C24.7091 21 26.5 19.2091 26.5 17C26.5 14.7909 24.7091 13 22.5 13C20.2909 13 18.5 14.7909 18.5 17C18.5 19.2091 20.2909 21 22.5 21Z"
                    stroke="#D00338"
                    stroke-opacity="0.9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M32.5 17C32.5 26 22.5 33 22.5 33C22.5 33 12.5 26 12.5 17C12.5 14.3478 13.5536 11.8043 15.4289 9.92893C17.3043 8.05357 19.8478 7 22.5 7C25.1522 7 27.6957 8.05357 29.5711 9.92893C31.4464 11.8043 32.5 14.3478 32.5 17V17Z"
                    stroke="#D00338"
                    stroke-opacity="0.9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>

              <div className="text-center md:text-left space-y-2">
                <CountUp
                  className="text-accent font-nunito font-extrabold lg:text-xl text-base leading-[28px]"
                  end={35000}
                />
                <span className="text-accent font-nunito font-extrabold lg:text-xl text-base leading-[28px]">
                  +
                </span>
                <p className="text-primary font-nunito font-normal lg:text-base text-sm leading-5">
                  Travel Experiences
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 col-span-6 mb-6">
            <div className="flex md:gap-5 gap-2 p-1 flex-col md:flex-row items-center md:items-center justify-center md:justify-center">
              {/* <Image
                className="w-[30px] h-[30px] lg:w-10 lg:h-10"
                src="/assets/images/countdown/price.svg"
                alt=""
                width={45} height={45}
              /> */}
              <svg
                className="w-[30px] lg:w-[45px] h-[30px] lg:h-[45px]"
                viewBox="0 0 46 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.8">
                  <path
                    d="M23 14V16"
                    stroke="#D00338"
                    stroke-opacity="0.9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M23 30V32"
                    stroke="#D00338"
                    stroke-opacity="0.9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M23 39C31.8366 39 39 31.8366 39 23C39 14.1634 31.8366 7 23 7C14.1634 7 7 14.1634 7 23C7 31.8366 14.1634 39 23 39Z"
                    stroke="#D00338"
                    stroke-opacity="0.9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19.25 30H24.875C25.7038 30 26.4987 29.6313 27.0847 28.9749C27.6708 28.3185 28 27.4283 28 26.5C28 25.5717 27.6708 24.6815 27.0847 24.0251C26.4987 23.3687 25.7038 23 24.875 23H21.125C20.2962 23 19.5013 22.6313 18.9153 21.9749C18.3292 21.3185 18 20.4283 18 19.5C18 18.5717 18.3292 17.6815 18.9153 17.0251C19.5013 16.3687 20.2962 16 21.125 16H26.75"
                    stroke="#D00338"
                    stroke-opacity="0.9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>

              <div className="text-center md:text-left space-y-2">
                <span className="text-accent font-nunito font-extrabold lg:text-xl text-base leading-[28px]">
                  Best Price
                </span>
                <p className="text-primary font-nunito font-normal lg:text-base text-sm leading-5">
                  Best Price
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 col-span-6 mb-6">
            <div className="flex md:gap-5 gap-2 p-1 flex-col md:flex-row items-center md:items-center justify-center md:justify-center">
              {/* <Image 
                className="w-[30px] h-[30px] lg:w-10 lg:h-10"
                src="/assets/images/countdown/member.svg"
                alt=""
                width={45} height={45}
              /> */}
              <svg
                className="w-[30px] lg:w-[45px] h-[30px] lg:h-[45px]"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.8">
                  <path
                    d="M22 31C28.3513 31 33.5 25.6274 33.5 19C33.5 12.3726 28.3513 7 22 7C15.6487 7 10.5 12.3726 10.5 19C10.5 25.6274 15.6487 31 22 31Z"
                    stroke="#D00338"
                    stroke-opacity="0.9"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M6.5 39C8.30433 36.5287 10.7001 34.5117 13.4849 33.1193C16.2697 31.7269 19.3618 31 22.5 31C25.6382 31 28.7303 31.7269 31.5151 33.1193C34.2999 34.5117 36.6957 36.5287 38.5 39"
                    stroke="#D00338"
                    stroke-opacity="0.9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>

              <div className="text-center md:text-left space-y-2">
                <CountUp
                  className="text-accent font-nunito font-extrabold lg:text-xl text-base leading-[28px]"
                  end={54}
                />
                <span className="text-accent font-nunito font-extrabold lg:text-xl text-base leading-[28px]">
                  {" "}
                  Million+
                </span>
                <p className="text-primary font-nunito font-normal lg:text-base text-sm leading-5">
                  User Connected
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
