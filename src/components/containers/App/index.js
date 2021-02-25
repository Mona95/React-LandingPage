import { ReactComponent as VectorBackground } from '../../../assets/images/background.svg'
import './index.scss';
import Navbar from '../../UI/Navbar';

const App = () => {
  return (
    <>
      <VectorBackground className="vector-bg" />
      <div className="content">
        <Navbar />
      </div>
    </>
  );
}

export default App;
