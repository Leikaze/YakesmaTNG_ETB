// script.js
window.onscroll = function () {
    const backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block"; // Tampilkan tombol
    } else {
        backToTopButton.style.display = "none"; // Sembunyikan tombol
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Gulir dengan halus
    });
}
