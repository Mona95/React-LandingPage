import Navbar from "../../UI/Navbar";
import AdSection from "../../UI/AdSection";
import FeaturesSection from "../../UI/FeaturesSection";
import { VectorBackground } from "../../../assets/images";
import "./index.scss";

const App = () => {
  return (
    <>
      <Navbar />
      <VectorBackground className="vector-bg" />
      <div className="content">
        <AdSection />
        <FeaturesSection />
      </div>
    </>
  );
};

export default App;
