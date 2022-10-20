import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
      <Link href="/">
        <a>
          <div className="relative h-[26px] md:h-[54px] w-[84px] md:w-[176px]">
            <Image src="/assets/images/header/logo.svg" layout="fill" alt="" />
          </div>
        </a>
      </Link>
    );
  };

  export default Logo 