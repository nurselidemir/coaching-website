import React from 'react';
import './packages.css'; 



const coaches = [
  { id: 1, name: "AHMET YILMAZ", role: "YKS EĞİTİM DANIŞMANI", img: "/images/k1.png" },
  { id: 2, name: "ELİF KAYA", role: "LGS EĞİTİM DANIŞMANI", img: "/images/k2.png" },
  { id: 3, name: "SÜREYYA ÇELİK", role: "REHBERLİK VE PSİKOLOJİK DANIŞMAN", img: "/images/k3.png" },
  { id: 4, name: "ZEYNEP DEMİR", role: "KPSS EĞİTİM DANIŞMANI", img: "/images/k4.png" },
  { id: 5, name: "MURAT ŞAHİN", role: "LGS EĞİTİM DANIŞMANI", img: "/images/k5.png" },
  { id: 6, name: "AYŞE EZİLMEZ", role: "YKS EĞİTİM DANIŞMANI", img: "/images/k6.png" }
];

const Packages = () => {
  return (
    <div className="packages-container">
      <h2>KOÇLUK PAKETLERİMİZ</h2>

      <div className="package-item">
        <h3> YKS KOÇLUK PAKETİ</h3>
        <p>
          Bu paket, YKS sınavına yönelik özel koçluk ve strateji rehberliği sağlar. <br></br>
          YKS'ye yönelik hazırlık sürecinizi daha verimli hale getirecek seanslar ve çalışma planları içerir.
        </p>
        <ul>
          <li>YKS'ye özgü sınav stratejileri</li>
          <li>Alan bazlı çalışma rehberliği</li>
          <li>Motivasyon ve zaman yönetimi</li>
        </ul>
       
        <p>Bu paketle YKS'ye dair kapsamlı bir hazırlık süreci sunulmaktadır.</p>
        <div className="coaches">
          <h4>Koçlar</h4>
          {coaches.filter(coach => coach.role.includes("YKS")).map(coach => (
            <div key={coach.id} className="coach-item">
              <img src={coach.img} alt={coach.name} />
              <p>{coach.name} - {coach.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="package-item">
        <h3>LGS KOÇLUK PAKETİ</h3>
        <p>
          LGS sınavına hazırlık için özel bir koçluk paketi. <br></br>
          Öğrencilerin sınav sürecini en verimli şekilde geçirmelerini sağlamak için çeşitli çalışma teknikleri ve stratejiler içerir.
        </p>
        <ul>
          <li>LGS'ye özel konu anlatımı ve sınav stratejileri</li>
          <li>Verimli çalışma ve hedef belirleme</li>
          <li>Stres yönetimi ve motivasyon artırma</li>
        </ul>
        <p>Bu paket, LGS öğrencilerinin sınavı geçmek için en iyi yöntemleri kullanmalarını sağlar.</p>
        <div className="coaches">
          <h4>Koçlar</h4>
          {coaches.filter(coach => coach.role.includes("LGS")).map(coach => (
            <div key={coach.id} className="coach-item">
              <img src={coach.img} alt={coach.name} />
              <p>{coach.name} - {coach.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="package-item">
        <h3>KPSS KOÇLUK PAKETİ</h3>
        <p>
          KPSS'ye yönelik özel hazırlık paketimiz, sınavın her aşamasında sizi rehberlik edecek bir yol haritası sunar.
          <br></br> 
          Sınav odaklı çalışma yöntemlerini içerir.
        </p>
        <ul>
          <li>KPSS'ye özel sınav hazırlık stratejileri</li>
          <li>Alan bazlı derinlemesine çalışma</li>
          <li>Zaman yönetimi ve sınav kaygısı yönetimi</li>
        </ul>
  
        <p>KPSS sınavında başarıyı yakalamak için özel bir hazırlık süreci.</p>
        <div className="coaches">
          <h4>Koçlar</h4>
          {coaches.filter(coach => coach.role.includes("KPSS")).map(coach => (
            <div key={coach.id} className="coach-item">
              <img src={coach.img} alt={coach.name} />
              <p>{coach.name} - {coach.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="package-item">
        <h3> REHBERLİK & PSİKOLOJİK DANIŞMANLIK PAKETİ</h3>
        <p>
          Bu paket, sınav kaygısı, stres yönetimi ve kişisel gelişim alanlarında destek sağlar. 
          <br></br> 
          Koçlar, öğrencilerin ve profesyonellerin psikolojik olarak sağlıklı bir süreç geçirmelerini amaçlar.
        </p>
        <ul>
          <li>Stres ve kaygıyı yönetme teknikleri</li>
          <li>Psikolojik danışmanlık ve kişisel gelişim seansları</li>
          <li>Motivasyon artırma ve hedef belirleme</li>
        </ul>
     
        <p>Psikolojik danışmanlık ve rehberlik ile sınav sürecinde daha sağlıklı bir yaklaşım.</p>
        <div className="coaches">
          <h4>Koçlar</h4>
          {coaches.filter(coach => coach.role.includes("REHBERLİK")).map(coach => (
            <div key={coach.id} className="coach-item">
              <img src={coach.img} alt={coach.name} />
              <p>{coach.name} - {coach.role}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Packages;
