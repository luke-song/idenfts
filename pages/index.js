import {
  HeroSection,
  Service,
  BigNFTSilder,
} from "../components/componentsindex";

import Style from "../styles/index.module.css";

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSilder />
    </div>
  );
};

export default Home;
