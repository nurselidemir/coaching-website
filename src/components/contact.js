import React from 'react';
import './contact.css'; 

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>BİZE ULAŞIN</h2>
    
      <div className="contact-info">
        <div className="contact-item">
          <p>Bize haftanın 7 günü 08:00 ile gece 02:00 saatleri arasında ulaşabilirsiniz.</p>
          <h3><strong>📞 0545 526 74 81</strong></h3>
        </div>
        <div className="contact-item">
         <h3>E-mail</h3>
          <p>Sorularınızı ve taleplerinizi <strong>✉️ info@basariyakoc.com</strong> adresine iletebilirsiniz.
          <br></br> En kısa sürede size geri dönüş yapacağız.</p>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
