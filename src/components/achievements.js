import React from 'react';
import './achievements.css'; 

const Achievements = () => {
  const achievements = [
    { id: 1, img: "/images/basari1.jpg", title: "Melisa Korkmaz", description: "LGS Türkiye 800.'sü" },
    { id: 2, img: "/images/basari3.jpg", title: " Özge Meriç", description: "YKS SAY Türkiye 2543.'sü" },
    { id: 3, img: "/images/basari2.jpg", title: "Mert Demir", description: "LGS Türkiye 2439.'su" },
    { id: 4, img: "/images/basari4.jpg", title: "Poyraz Kırıl", description: "LGS Türkiye 24.'sü" },
    { id: 5, img: "/images/basari10.jpg", title: "Ozan Güleç", description: "KPSS Türkiye 7493.'su" },
    { id: 6, img: "/images/basari6.jpg", title: "Nazlı Serin", description: "YKS Türkiye 101.'si" },
    { id: 7, img: "/images/basari7.jpg", title: "Elif Yüce", description: "YKS Türkiye 3493.'si" },
    { id: 8, img: "/images/basari8.jpg", title: "Petek Güçlü", description: "LGS Türkiye 500.'sü" },
    { id: 9, img: "/images/basari9.jpg", title: "Ayça Serin", description: "KPSS Türkiye 10.345.'si" }
   
  ];

  return (
    <div className="achievements-container">
      <h2>BAŞARILARIMIZ</h2>
      <div className="achievements-gallery">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="achievement-item">
            <img src={achievement.img} alt={achievement.title} className="achievement-img" />
            <h3>{achievement.title}</h3>
            <p>{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
