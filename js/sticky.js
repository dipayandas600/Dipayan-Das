const navber = document.querySelector('.navber-section');
let top = navber.offsetTop;
function stickynavber() {
    if (window.scrollY >= top) {
        navber.classList.add('sticky');
    } else {
        navber.classList.remove('sticky');
    }
}
window.addEventListener('scroll', stickynavber);