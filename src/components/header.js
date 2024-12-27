import React from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';

const Header = () => {
  const navigate = useNavigate(); 

  const handleLoginClick = () => {
    navigate('./sign_in'); 
  };

  const handleSignInClick = () => {
    navigate('./login'); 
  };


  return (
    <header className="header">
      <div className="logo">
        <h1>BAŞARIYA KOÇ</h1>
      </div>
      <nav className="navbar">
        <ul>
          
          <li><a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Anasayfa</a></li>
          <li><a href="/about" onClick={(e) => { e.preventDefault(); navigate('/about'); }}>Hakkımızda</a></li>
          <li><a href="/packages" onClick={(e) => { e.preventDefault(); navigate('/packages'); }}>Paketlerimiz</a></li>
          <li><a href="/achievements" onClick={(e) => { e.preventDefault(); navigate('/achievements'); }}>Başarılarımız</a></li>
          <li><a href="/contact" onClick={(e) => { e.preventDefault(); navigate('/contact'); }}>İletişim</a></li>
        </ul>
      </nav>

      <div className="header-buttons">
        {}
        <button className="button_kaydol" onClick={handleLoginClick}>
         Kaydol
        </button>
        <button className="button_giris" onClick={handleSignInClick}>
          Giriş Yap
        </button>
      </div>
    </header>
  );
};

export default Header;
