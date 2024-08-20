window.addEventListener('scroll', function() {
    const overlayPage = document.querySelector('.overlay-page');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition < window.innerHeight) {
        overlayPage.style.top = `calc(100% - ${scrollPosition}px)`;
    } else {
        overlayPage.style.top = '0';
    }
});
