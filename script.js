// Navigation
function toggleMenu () {
    const toggleMenu = document.querySelector(".toggleMenu");
    const navigation = document.querySelector(".navigation");
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");
}
// End Navigation

// Scroll Fixed
window.addEventListener('scroll', function() {
    var sticky = this.document.querySelector('#header'),
    scroll = this.window.pageYOffset;
    if (scroll >= 150) sticky.classList.add('fixed');
    else sticky.classList.remove('fixed');
})
// End Scroll Fixed