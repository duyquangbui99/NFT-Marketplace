const menuToggle = document.getElementById('menu-toggle');
const navSections = document.querySelector('.nav-sections');

menuToggle.addEventListener('click', () => {
    navSections.classList.toggle('active');
});