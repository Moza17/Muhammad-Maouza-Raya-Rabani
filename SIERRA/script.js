document.getElementById('aboutBtn').onclick = function(e) {
    e.preventDefault();
    document.getElementById('aboutOverlay').style.display = 'flex';
};
document.getElementById('closeOverlay').onclick = function() {
    document.getElementById('aboutOverlay').style.display = 'none';
};
window.onclick = function(event) {
    if (event.target == document.getElementById('aboutOverlay')) {
        document.getElementById('aboutOverlay').style.display = 'none';
    }
};

const scrollBtn = document.getElementById('scrollTopBtn');
window.onscroll = function() {
    if (window.scrollY > 200) {
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show');
    }
};
scrollBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.getElementById('darkModeToggle').onclick = function() {
    document.body.classList.toggle('dark');
};

const quote = document.querySelector('.quote');
if (quote) {
    const text = quote.textContent;
    quote.textContent = '';
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            quote.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 35);
        }
    }
    typeWriter();
}

function updateClock() {
    const clock = document.getElementById('digitalClock');
    if (clock) {
        const now = new Date();
        const h = String(now.getHours()).padStart(2, '0');
        const m = String(now.getMinutes()).padStart(2, '0');
        const s = String(now.getSeconds()).padStart(2, '0');
        clock.textContent = `${h}:${m}:${s}`;
    }
}
setInterval(updateClock, 1000);
updateClock();

document.getElementById('skillBtn').onclick = function(e) {
    e.preventDefault();
    document.getElementById('skillOverlay').style.display = 'flex';
};
document.getElementById('closeSkillOverlay').onclick = function() {
    document.getElementById('skillOverlay').style.display = 'none';
};
window.addEventListener('click', function(event) {
    const overlay = document.getElementById('skillOverlay');
    if (event.target === overlay) {
        overlay.style.display = 'none';
    }
});

const motivasiList = [
    "Jangan pernah berhenti bermimpi, karena mimpi hari ini adalah kenyataan esok hari.",
    "Kesuksesan adalah hasil dari kerja keras, belajar dari kegagalan, dan tidak pernah menyerah.",
    "Setiap langkah kecil hari ini adalah awal dari perjalanan besar esok hari.",
    "Percaya pada dirimu sendiri, karena kamu lebih hebat dari yang kamu kira.",
    "Kegagalan adalah kesempatan untuk memulai lagi dengan lebih baik.",
    "Semangat adalah kunci untuk membuka pintu keberhasilan.",
    "Jadilah versi terbaik dari dirimu sendiri, bukan versi orang lain.",
    "Tidak ada kata terlambat untuk belajar dan mencoba hal baru.",
    "Hidup adalah tentang berani melangkah, bukan hanya bermimpi.",
    "Kerja keras hari ini adalah investasi untuk masa depanmu.",
    "Jangan bilang tidak mungkin kepadaku, sebelum kau mati dalam mencobanya."
];

function setRandomMotivasi() {
    const quoteEl = document.querySelector('.quote');
    if (quoteEl) {
        const randomIndex = Math.floor(Math.random() * motivasiList.length);
        quoteEl.textContent = `"${motivasiList[randomIndex]}"`;
    }
}
setRandomMotivasi();