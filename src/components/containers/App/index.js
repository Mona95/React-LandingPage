import { ReactComponent as VectorBackground } from '../../../assets/images/background.svg'
import './index.scss';
import Navbar from '../../UI/Navbar';
import AdSection from '../../UI/AdSection';
import { Container } from '@material-ui/core';
import FeaturesSection from '../../UI/FeaturesSection';

const App = () => {
  return (
    <>
    <Container>
   <VectorBackground className="vector-bg" />
             <div className="content">
        <Navbar />
        <AdSection />
        <FeaturesSection />
      </div>
    </Container>
   
    </>
  );
}

export default App;
