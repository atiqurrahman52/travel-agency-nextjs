import { useEffect, useState } from "react";

import AllDestination from "../../components/destination/AllDestination";
import DestinationHeader from "../../components/destination/DestinationHeader";
import Location from "../../components/destination/Location";
import EventBanner from "../../components/home/EventBanner";
import Layout from "../../components/layout/Layout";
import Loader from "../../components/shared/Loader";

const Destination = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/assets/data/destination/destinationData.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
  }, []);

  return (
    <Layout head="Destination">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <DestinationHeader />
          <Location data={data} />
          <EventBanner />
          <AllDestination data={data} />
        </>
      )}
    </Layout>
  );
};

export default Destination;
