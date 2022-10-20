import { useEffect, useState } from "react";

import AboutUs from "../components/about/AboutUs";
import Package from "../components/about/Package";
import Service from "../components/about/Service";
import Partners from "../components/home/Partners";
import Layout from "../components/layout/Layout";
import Loader from "../components/shared/Loader";

// data
import { partnersData } from "../public/assets/data/home/partnersData";
import { packagesData } from "../public/assets/data/about/packagesData";

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (partnersData && packagesData) {
      setTimeout(() => {
        setIsLoading(false);
      }, [1000]);
    }
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Layout>
          <AboutUs />
          <Service />
          <Partners data={partnersData} />
          <Package data={packagesData} />
        </Layout>
      )}
    </>
  );
};

export default About;
