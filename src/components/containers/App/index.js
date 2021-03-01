import Navbar from "../../UI/Navbar";
import MainBanner from "../../UI/MainBanner";
import FeaturesSection from "../../UI/FeaturesSection";
import { VectorBackground } from "../../../assets/images";

import "./index.scss";

const App = () => {
  return (
    <>
      <Navbar />
      <VectorBackground className="vector-bg" />
      <div className="content">
        <MainBanner />
        <FeaturesSection />
      </div>
    </>
  );
};

export default App;
