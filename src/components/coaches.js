import React from 'react';
import './coaches.css'; 


const coaches = [
  { id: 1, name: "AHMET YILMAZ", role: "YKS EĞİTİM DANIŞMANI", img: "/images/k1.png" },
  { id: 2, name: "ELİF KAYA", role: "LGS EĞİTİM DANIŞMANI", img: "/images/k2.png" },
  { id: 3, name: "SÜREYYA ÇELİK", role: "REHBERLİK VE PSİKOLOJİK DANIŞMAN", img: "/images/k3.png" },
  { id: 4, name: "ZEYNEP DEMİR", role: "KPSS EĞİTİM DANIŞMANI", img: "/images/k4.png" },
  { id: 5, name: "MURAT ŞAHİN", role: "LGS EĞİTİM DANIŞMANI", img: "/images/k5.png" },
  { id: 6, name: "AYŞE EZİLMEZ", role: "YKS EĞİTİM DANIŞMANI", img: "/images/k6.png" },
];

const Coaches = () => {
  return (
    <div className="coaches-container">
      
      <h2>KOÇLARIMIZ</h2>
      <div className="coaches-grid">
        {coaches.map((coach) => (
          <div key={coach.id} className="coach-card">
            <img src={coach.img} alt={coach.name} className="coach-image" />
            <h3 className="coach-name">{coach.name}</h3>
            <p className="coach-role">{coach.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coaches;

