import React from "react";
import SectionWrapper from "./components/SectionWrapper";
import assets from "./assets";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <SectionWrapper
        title={"You own store of Nifty NFTs. Start Selling & Growing"}
        description={
          "Buy, store, collect NFTS, exchange & earn crypto. Join 25+ million people using ProNef marketplace"
        }
        showBtn
        mockupImg={assets.homeHero}
        banner={"banner"}
      />

      <SectionWrapper
        title={"Smart User Interface Marketplace"}
        description={
          "Experience a battery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design"
        }
        showBtn={false}
        mockupImg={assets.homeCards}
        banner={""}
        reverse={true}
      />

      <Features />

      <SectionWrapper
        title={"Deployment"}
        description={
          "ProNef is built using Expo which runs natively on all user's devices. You can easily get your app into people's hands"
        }
        showBtn={false}
        mockupImg={assets.feature}
        banner={""}
        reverse={true}
      />

      <SectionWrapper
        title={"Creative way to showcase the store"}
        description={
          "The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT."
        }
        showBtn={false}
        mockupImg={assets.mockup}
        banner={"banner02"}
        reverse={false}
      />

      <Footer />
    </>
  );
}

export default App;
