const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('navber-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});