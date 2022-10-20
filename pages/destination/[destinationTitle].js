import { useEffect, useState } from "react";
import { useRouter } from "next/router";
// components
import Layout from "../../components/layout/Layout";
import Featured from "../../components/home/Featured";
import SingleDestinationBanner from "../../components/singleDestination/SingleDestinationBanner";
import Tags from "../../components/singleDestination/Tags";
import TourItinerary from "../../components/singleDestination/TourItinerary";
import SingleDestinationFacilities from "../../components/singleDestination/SingleDestinationFacilities";
import Loader from "../../components/shared/Loader";
import SingleDestinationGallery from "../../components/singleDestination/SingleDestinationGallery";

import RelatedDestination from "../../components/singleDestination/RelatedDestination";
import SingleDestinationForm from "../../components/singleDestination/SingleDestinationForm";

import singleDestinationGalleryData from "../../public/assets/data/destination/singleDestinationGalleryData";

const DestinationTitle = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [destinationData, setDestinationData] = useState({});

  useEffect(() => {
    fetch("/assets/data/destination/destinationData.json")
      .then((res) => res.json())
      .then((data) => {
        setDestinationData(data[router.query.destinationTitle]);
        setTimeout(() => {
          setIsLoading(false);
        }, [1000]);
      });
  }, [router.query.destinationTitle]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Layout head={destinationData.location}>
          <SingleDestinationBanner data={destinationData} />
          <div className="container grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-8">
              <SingleDestinationFacilities data={destinationData} />
              <TourItinerary data={destinationData} />
              <SingleDestinationGallery data={destinationData.gallery} />
            </div>
            <div className="col-span-12 lg:col-span-4">
              <SingleDestinationForm />
              <RelatedDestination />
              <Tags />
            </div>
          </div>

          <Featured />
        </Layout>
      )}
    </>
  );
};

export default DestinationTitle;
