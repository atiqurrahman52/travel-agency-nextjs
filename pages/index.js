import { useEffect, useState } from "react";

import Layout from "../components/layout/Layout";
import Combo from "../components/home/Combo";
import EventBanner from "../components/home/EventBanner";
import Featured from "../components/home/Featured";
import Gift from "../components/home/Gift";
import Hero from "../components/home/Hero";
import Inspiration from "../components/home/Inspiration";
import Partners from "../components/home/Partners";
import Loader from "../components/shared/Loader";
import TourPackageSlider from "../components/home/TourPackageSlider";
 
import { comboData } from "../public/assets/data/home/comboData";
import { inspirationData } from "../public/assets/data/home/inspirationData";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [destinationData, setDestinationData] = useState([]);

  const asiaData = destinationData.filter(item => item.category === "asia")
  const europeData = destinationData.filter(item => item.category === "europe")
  const africaData = destinationData.filter(item => item.category === "africa")

  useEffect(() => {
    fetch("/assets/data/destination/destinationData.json")
      .then((res) => res.json())
      .then((data) => {
        setDestinationData(data);
        setTimeout(() => {
          setIsLoading(false);
        }, [1000]);
      });
  }, [destinationData]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Layout>
          <Hero />
          <Featured />
          <EventBanner />
          <Inspiration data={inspirationData} />
          <TourPackageSlider data={asiaData} sectionTitle="Asia" />
          <Combo data={comboData} />
          <TourPackageSlider data={europeData} sectionTitle="Europe" />
          <Gift />
          <TourPackageSlider data={africaData} sectionTitle="Africa" />
          <Partners />
        </Layout>
      )}
    </>
  );
}
