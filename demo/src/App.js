import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import PrincipalHeader from './componentes/principalHeader.jsx';
import ImageCarousel from './componentes/imageCarousel.jsx';
import InfoBox from './componentes/infoBox.jsx';
import NewsBox from './componentes/newsBox.jsx';
import VerticalMenu from './componentes/verticalMenu.jsx';
import Footer from './componentes/footerMain.jsx';

import tutorIcon from './iconos/tutor-icon.svg'
import resultIcon from './iconos/result-pass-icon.svg'
import bookIcon from './iconos/read-book-icon.svg'

function App() {
  return (
    <div>
      <PrincipalHeader />
      <ImageCarousel />

      <div className="mt-3 mx-3">
        <div className="row">
          <InfoBox 
            icon={resultIcon}
            color="white" 
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis itaque minus similique eaque suscipit." 
            boxColor="#0D4185"
          />
          <InfoBox 
            icon={bookIcon}
            color="white" 
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis itaque minus similique eaque suscipit." 
            boxColor="#CC0000"
          />
          <InfoBox 
            icon={tutorIcon}
            color="white" 
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis itaque minus similique eaque suscipit." 
            boxColor="#0D4185"
          />
        </div>
      </div>
      <div className="row mt-3 mx-2">
        <div className="col-md-4">
          <VerticalMenu />
        </div>
        <div className="col-md-8">
          <NewsBox />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
