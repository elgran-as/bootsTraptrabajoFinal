function changeTitle() {
    heroTitle.classList.add('fadeOut');
    setTimeout(() => {
      heroTitle.textContent = titles[currentTitleIndex];
      heroTitle.classList.remove('fadeOut');
      heroTitle.classList.add('fadeIn');
      setTimeout(() => {
        heroTitle.classList.remove('fadeIn');
      }, 500);
    }, 500);
    currentTitleIndex = (currentTitleIndex + 1) % titles.length;
  }

  setInterval(changeTitle, 5000); // Cambia el título cada 3 segundos

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