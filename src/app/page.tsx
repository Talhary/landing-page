
import Header from "./components/Header/Header";

import PageIllustration from "./components/PageIllustration/PageIllustration";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import Carousel from "./components/Carousel/Carousel";
import Tabs from "./components/Tabs/Tabs";
import Process from "./components/Process/Process";
import PricingTables from "./components/PricingTables/PricingTables";
import Testimonials from "./components/Testimonials/Testimonials";
import Features from "./components/Features/Features";
import Cta from "./components/Cta/Cta";

import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <main>
        <div className="overflow-hidden"> 
          <Header/>
          <PageIllustration />
          <Hero />
          <Stats />
          <Carousel />
          <Tabs />
          <Process />
          <PricingTables />
          <Testimonials />
          <Features />
          <Cta />
        </div>
      </main>
      <Footer /> 
    </div>
  );
}