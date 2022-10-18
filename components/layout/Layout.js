import Head from "next/head";

import Footer from "../navigation/Footer";
import NavBar from "../navigation/Navbar";

const Layout = ({ children, head }) => {
  return (
    <>
      <Head>
        <title>{head ? head : "Tourelish"}</title>
      </Head>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
