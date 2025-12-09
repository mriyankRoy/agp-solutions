import HomePageSection1 from "./HomePageHeroSection";
import CompanyVideoSection from "./CompanyVideoSection";
import FeaturesSection from "./FeaturesSection";
import AboutSection from "./AboutSection";
import TrustedPartners from "./TrustedPartners";
import GraphiteScrollingFeatures from "./FacilitiesPage";

const HomePage = () => {
  
  return (
    <div>
      <HomePageSection1 />
      <TrustedPartners />
      <CompanyVideoSection />
      <GraphiteScrollingFeatures />
      <FeaturesSection />
      <AboutSection />
    </div>
  );
};

export default HomePage;
