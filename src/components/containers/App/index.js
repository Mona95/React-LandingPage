import { ReactComponent as VectorBackground } from '../../../assets/images/background.svg'
import './index.scss';
import Navbar from '../../UI/Navbar';
import AdSection from '../../UI/AdSection';
import { Container } from '@material-ui/core';

const App = () => {
  return (
    <>
      <VectorBackground className="vector-bg" />
             <div className="content">
        <Navbar />
        <AdSection />
      </div>
    </>
  );
}

export default App;
