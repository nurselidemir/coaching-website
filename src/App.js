import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import React from 'react';
import Header from './components/header'; 
import './styles.css'; 
import About from './components/about'; 
import Coaches from './components/coaches'; 
import Packages from './components/packages'; 
import Achievements from './components/achievements'; 
import Contact from './components/contact'; 
import Login from './components/login'; 
import SignIn from './components/signin';

const Home = () => null; 

const MainContent = () => {
  const location = useLocation(); 
  const isHomePage = location.pathname === '/';

  return (
    <>
      {isHomePage && ( 
        <div>
          <div className="firstimage">
            <h1 className="firsttext">
              Başarıya Koç ile sınav kaygısını motivasyona dönüştür <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              daha planlı çalışarak hedeflerine ulaş.
            </h1>
            <h5 className="secondtext">
              Hedefine ulaşıp derece yapmış akademik koçlarımızla sınav sürecinize katkıda bulunuyoruz.
            </h5>
          </div>
          <div className="aboutUsSection">
            <h2>HAKKIMIZDA</h2>
            <h5>
              Eğitim hayatınızda daha başarılı olmanız ve sınav kaygınızı aşmanız için sizlere profesyonel bir destek sunmayı amaçlıyoruz. <br></br>
              Aktif olarak 6 deneyimli eğitim danışmanımızla hizmet vermekteyiz. 
              <br></br>Koçlarımız, çeşitli alanlarda uzmanlaşmış ve her biri kendi
              alanında önemli başarılar elde etmiş profesyonellerdir.
            </h5>
          </div>
          <div className="coaches-section">
            <Coaches />
          </div>
        </div>
      )}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header /> {}
        <MainContent /> {}
        {}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign_in" element={<SignIn />} />
        </Routes>
      </div>
      {}
      <div className="footer-navbar">
        <p className="footer-text">
          <span className="footer-phone">📞 0545 526 74 81</span>
          <span className="footer-email">✉️ info@basariyakoc.com</span>
        </p>
      </div>
    </Router>
  );
};

export default App;

