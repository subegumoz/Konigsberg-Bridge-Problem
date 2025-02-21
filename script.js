document.addEventListener("DOMContentLoaded", function () {
    // Sayfa yüklendiğinde aktif linki kontrol et
    highlightActiveLink();

    // Menüdeki tüm bağlantıları seç
    const navLinks = document.querySelectorAll("nav ul li a");

    // Her bağlantıya tıklanınca aktif sınıfı ekleyelim
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Tüm bağlantılardan aktif sınıfını kaldır
            navLinks.forEach(l => l.classList.remove("active"));

            // Tıklanan bağlantıya aktif sınıfını ekle
            this.classList.add("active");
        });
    });
});

// Aktif sayfayı belirleyip linki vurgulayan fonksiyon
function highlightActiveLink() {
    const navLinks = document.querySelectorAll("nav ul li a");
    const currentLocation = window.location.hash; // URL'deki bölüm (örn. #problem)

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentLocation) {
            link.classList.add("active");
        }
    });
}
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");

    function setActive(link) {
        navLinks.forEach(nav => nav.classList.remove("active"));
        link.classList.add("active");
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            setActive(this);
        });
    });

    // Get Started butonu tıklanınca Problem sekmesini aktif yap
    const getStartedButton = document.getElementById("getStarted");
    if (getStartedButton) {
        getStartedButton.addEventListener("click", function () {
            const problemLink = document.querySelector("nav ul li a[href='#problem']");
            if (problemLink) {
                setActive(problemLink);
            }
        });
    }
});
