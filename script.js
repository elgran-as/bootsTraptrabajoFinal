const heroTitles = [
  'Professional Frontend Developer',
  'Desarrollo de Aplicaciones',
  'Diseño e Ilustración'
];

let index = 0;
const heroTitleElement = document.getElementById('hero-title');

function rotateHeroTitle() {
  heroTitleElement.textContent = heroTitles[index];
  index = (index + 1) % heroTitles.length;
}

setInterval(rotateHeroTitle, 5000); // Cambia el título cada 5 segundos
rotateHeroTitle(); // Inicializa el título al cargar la página

  // Mostrar texto en español por defecto
document.querySelectorAll('[data-lang]').forEach((element) => {
    if (element.getAttribute('data-lang') === 'es') {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });
  
  // Agrega un evento de clic al botón de cambio de lenguaje
  const langBtn = document.getElementById('lang-btn');
  langBtn.addEventListener('click', () => {
    const currentLang = langBtn.textContent;
    if (currentLang === 'ES') {
      langBtn.textContent = 'EN';
      document.querySelectorAll('[data-lang]').forEach((element) => {
        if (element.getAttribute('data-lang') === 'en') {
          element.style.display = 'block';
        } else {
          element.style.display = 'none';
        }
      });
    } else {
      langBtn.textContent = 'ES';
      document.querySelectorAll('[data-lang]').forEach((element) => {
        if (element.getAttribute('data-lang') === 'es') {
          element.style.display = 'block';
        } else {
          element.style.display = 'none';
        }
      });
    }
  });