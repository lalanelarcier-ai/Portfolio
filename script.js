// ========== NAVIGATION ACTIVE ==========
const navLinks = document.querySelectorAll('.nav-links a');

// Smooth scroll au clic
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Empêche le comportement par défaut
    
    // Retire la classe 'active' de tous les liens
    navLinks.forEach(item => item.classList.remove('active'));
    
    // Ajoute la classe 'active' au lien cliqué
    this.classList.add('active');
    
    // Récupère l'ID de la section (ex: #home -> home)
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    
    // Scroll fluide vers la section
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Active automatiquement le lien selon la section visible au scroll
window.addEventListener('scroll', () => {
  let current = '';
  
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    // Vérifie si on est dans cette section (avec marge de 150px)
    if (scrollY >= (sectionTop - 150)) {
      current = section.getAttribute('id');
    }
  });
  
  // Active le lien correspondant
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === current) {
      link.classList.add('active');
    }
  });
});

// ========== EFFET TYPEWRITER ==========
function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

window.addEventListener('load', () => {
  const h1Text = "Hi, I'm Emii-chan !";
  const subtitleText = "Front-end developer and software engineer.";
  const paragraphText = "Building the future, one line of code at a time.";
  
  const h1 = document.querySelector('.hero h1');
  const subtitle = document.querySelector('.subtitle');
  const paragraph = document.querySelector('.hero p');
  
  if (h1 && subtitle && paragraph) {
    typeWriter(h1, h1Text, 80);
    
    setTimeout(() => {
      typeWriter(subtitle, subtitleText, 60);
    }, h1Text.length * 80 + 300);
    
    setTimeout(() => {
      typeWriter(paragraph, paragraphText, 40);
    }, (h1Text.length * 80) + (subtitleText.length * 60) + 600);
  }
});

    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        const hamburger = document.querySelector('.hamburger');
        
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    }

    function closeMenu() {
        const navLinks = document.querySelector('.nav-links');
        const hamburger = document.querySelector('.hamburger');
        
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }