import React from 'react';
import './signin.css';

const Kaydol = () => {
  const handleGirisYapClick = () => {
    window.location.href = '/login'; 
  };

  return (
    <div className="register-container">
      <div className="form-wrapper">
        <h2>Kaydol</h2>
        <form>
          <div className="form-group">
            <input
              type="text"
              id="ad"
              name="ad"
              placeholder="Adınızı girin"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="soyad"
              name="soyad"
              placeholder="Soyadınızı girin"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-posta adresinizi girin"
              required
            />
          </div>
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
          <div className="form-group">
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Şifrenizi tekrar girin"
              required
            />
          </div>
          <button type="submit" className="submit-btn">Kaydol</button>
        </form>
        <div className="alt-text">
          <span>Hesabınız var mı?</span>
          <button className="login-link" onClick={handleGirisYapClick}>
            Giriş Yap
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Kaydol;


