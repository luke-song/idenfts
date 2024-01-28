import {
  HeroSection,
  Service,
  BigNFTSilder,
  Subscribe,
} from "../components/componentsindex";

import Style from "../styles/index.module.css";

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSilder />
      <Subscribe />
    </div>
  );
};

export default Home;
