// Sayfadakı bütün ".elan" sinifinə malik elanları seçirik
const elanlar = document.querySelectorAll('.elan');

// Hər bir elanın üzərindən keçirik
elanlar.forEach((elan, index) => {

  // Yeni bir "button" elementi yaradırıq
  const button = document.createElement('button');
  button.innerText = "Ətraflı Məlumat";

  // Yeni bir "a" elementi yaradırıq
  const link = document.createElement('a');

  // Hər bir BMW modelinə uyğun linkləri saxlayan array
  const modelLinks = [
    "https://www.bmw.com.tr/tr/all-models/2-series.html",
    "https://www.bmw.com.tr/tr/all-models/3-series.html",
    "https://www.bmw.com.tr/tr/all-models/4-series.html",
    "https://www.bmw.com.tr/tr/all-models/5-series.html",
    "https://www.bmw.com.tr/tr/all-models/7-series.html",
    "https://www.bmw.com.tr/tr/all-models/8-series.html",
    "https://www.bmw.com.tr/tr/all-models/x1.html",
    "https://www.bmw.com.tr/tr/all-models/x2.html",
    "https://www.bmw.com.tr/tr/all-models/x3.html",
    "https://www.bmw.com.tr/tr/all-models/x4.html",
    "https://www.bmw.com.tr/tr/all-models/x5.html",
    "https://www.bmw.com.tr/tr/all-models/x6.html",
    "https://www.bmw.com.tr/tr/all-models/x7.html",
    "https://www.bmw.com.tr/tr/all-models/xm.html",
    "https://www.bmw.com.tr/tr/all-models/i4.html",
    "https://www.bmw.com.tr/tr/all-models/i5.html",
    "https://www.bmw.com.tr/tr/all-models/i7.html",
    "https://www.bmw.com.tr/tr/all-models/ix1.html",
    "https://www.bmw.com.tr/tr/all-models/ix3.html",
    "https://www.bmw.com.tr/tr/all-models/ix.html",
    "https://www.bmw.com.tr/tr/all-models/m2.html",
    "https://www.bmw.com.tr/tr/all-models/m3.html",
    "https://www.bmw.com.tr/tr/all-models/m4.html",
    "https://www.bmw.com.tr/tr/all-models/m5.html",
    "https://www.bmw.com.tr/tr/all-models/m8.html"
  ];

  // Elan nömrəsinə uyğun linki təyin edirik
  link.href = modelLinks[index] || "#";
  link.innerText = "Ətraflı bax";
  link.target = "_blank";
  link.style.display = "none";

  elan.appendChild(button);
  elan.appendChild(link);

  button.addEventListener('click', () => {
    link.style.display = "inline";
    link.click();
  });
});
