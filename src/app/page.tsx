import { Hero } from "../../components/Hero/Hero";
import Destinations from "../../components/Destinations/Destinations";
import Services from "../../components/Services/Services";
// import InteractiveMap from "../../components/InteractiveMap/InteractiveMap";
import AboutUs from "../../components/AboutUs/About";
import Contact from "../../components/Contact/Contact";
import WhyUs from "../../components/WhyUs/WhyUs";
import Roadmap from "../../components/Roadmap/Roadmap";


export default function Home() {
  return (
    <>
      <Hero />
      <Destinations/>
      <Services />
      <AboutUs />
      <Roadmap />
      <WhyUs />
      {/* <InteractiveMap /> */}
      <Contact />  
    </>
  );
}
