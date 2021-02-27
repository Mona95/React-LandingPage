import { ReactComponent as VectorBackground } from "../../../assets/images/background.svg";
import "./index.scss";
import Navbar from "../../UI/Navbar";
import AdSection from "../../UI/AdSection";
import FeaturesSection from "../../UI/FeaturesSection";

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
