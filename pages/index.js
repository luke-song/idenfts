import {
  HeroSection,
  Service,
  BigNFTSilder,
  Subscribe,
  Title,
  Category,
} from "../components/componentsindex";

import Style from "../styles/index.module.css";

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSilder />
      <Title
        heading="Browsse by Category"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <Category />
      <Subscribe />
    </div>
  );
};

export default Home;
