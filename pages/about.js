import AboutUs from "../components/about/AboutUs";
import Package from "../components/about/Package";
import Service from "../components/about/Service";
import Partners from "../components/home/Partners";
import Layout from "../components/layout/Layout";

const About = () => {
    return (
        <Layout>
            <AboutUs />
            <Service />
            <Partners />
            <Package />
        </Layout>
    );
};

export default About;