import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../hojas-de-estilo/stylesHome.css';

import PrincipalHeader from '../componentes/homeHeader.jsx';
import ImageCarousel from '../componentes/imageCarousel.jsx';
import InfoBox from '../componentes/infoBox.jsx';
import NewsBox from '../componentes/newsBox.jsx';
import VerticalMenu from '../componentes/verticalMenu.jsx';
import MainFooter from '../componentes/footerMain.jsx';
import SocialMedia from '../componentes/socialMedia.jsx';

import GlobalStyles from '../componentes/GlobalStyles';

import tutorIcon from '../iconos/tutor-icon.svg';
import resultIcon from '../iconos/result-pass-icon.svg';
import bookIcon from '../iconos/read-book-icon.svg';

function Home (){
  return(
    <div>
      <GlobalStyles
        backgroundColor="#ffffff" 
        textColor="#ffffff"
      />
      <header>
        <PrincipalHeader />
      </header>
      <body className='home-body'>
        <div>
          <ImageCarousel />
        </div>

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
          <div className="col-xl-3 col-md-5 col-sm-6">
            <VerticalMenu />
            <div className='d-none d-sm-block d-md-block d-lg-block'>
              <SocialMedia />
            </div>
          </div>
          <div className="col-xl-9 col-md-7 col-sm-6">
            <NewsBox />
          </div>
          <div className="d-block d-sm-none d-md-none d-lg-none">
            <SocialMedia />
          </div>
        </div>
      </body>
      <footer>
        <MainFooter />
      </footer>
    </div>
  );
}

export default Home;