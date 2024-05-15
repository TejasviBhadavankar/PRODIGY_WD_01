window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 100) {
      nav.style.backgroundColor = '#BB8493'; 
  } else {
      nav.style.backgroundColor = '#333'; // Original color
  }
});
