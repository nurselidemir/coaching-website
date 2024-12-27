import React from 'react';
import './login.css'; 

const GirisYap = () => {
  const handleKaydolClick = () => {
    window.location.href = '/sign_in'; 
  };

  return (
    <div className="giris-container">
      <div className="form-wrapper">
        <h2>Giriş Yap</h2>
        <form>
          <div className="form-group">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Kullanıcı adınızı girin"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Şifrenizi girin"
              required
            />
          </div>
          <button type="submit" className="submit-btn">Giriş Yap</button>
        </form>
        <div className="alt-text">
          <span>Hesabınız yok mu?</span>
          <button className="register-link" onClick={handleKaydolClick}>
            Kaydol
          </button>
        </div>
      </div>
    </div>
  );
};

export default GirisYap;
