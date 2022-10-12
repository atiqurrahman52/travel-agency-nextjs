import Head from "next/head";
import Image from "next/image";

import Layout from "../components/layout/Layout";
import Africa from "../components/home/Africa";
import Asia from "../components/home/Asia";
import Combo from "../components/home/Combo";
import Europe from "../components/home/Europe";
import EventBanner from "../components/home/EventBanner";
import Featured from "../components/home/Featured";
import Gift from "../components/home/Gift";
import Hero from "../components/home/Hero";
import Inspiration from "../components/home/Inspiration";
import Partners from "../components/home/Partners";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <Hero />
      <Featured />
      <EventBanner />
      <Inspiration />
      <Asia />
      <Combo />
      <Europe />
      <Gift />
      <Africa />
      <Partners />
    </Layout>
  );
}
