const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a');
const backTop = document.getElementById('backTop');
const year = document.getElementById('year');
const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

year.textContent = new Date().getFullYear();

menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
});

navLinks.forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const sections = document.querySelectorAll('main section[id]');
const updateActive = () => {
  let current = 'home';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 180) current = section.id;
  });
  navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + current));
  backTop.classList.toggle('show', window.scrollY > 500);
};
window.addEventListener('scroll', updateActive);
updateActive();

document.querySelectorAll('.reveal').forEach(el => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.12});
  observer.observe(el);
});

backTop.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));

form.addEventListener('submit', (event) => {
  const action = form.getAttribute('action');
  if (action.includes('your-form-id')) {
    event.preventDefault();
    formNote.innerHTML = 'Form is ready. Replace <b>your-form-id</b> in index.html with your Formspree ID to activate email delivery.';
    formNote.style.color = '#1477ff';
  }
});
