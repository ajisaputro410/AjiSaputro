// ==========================================
// 1. FITUR FITUR PENGUBAH TEMA (DARK/LIGHT)
// ==========================================
const themeBtn = document.getElementById('theme-btn');
const themeIcon = themeBtn.querySelector('i');

// Cek memori browser, jika sebelumnya user memilih tema terang, langsung aktifkan
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-theme');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

// Logika ketika tombol tema diklik oleh user
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    
    // Ganti ikon bulan/matahari dan simpan pilihan di local storage browser
    if (document.body.classList.contains('light-theme')) {
        themeIcon.classList.replace('fa-moon', 'fa-sun'); // Berubah jadi matahari
        localStorage.setItem('theme', 'light'); // Mengingat pilihan tema terang
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon'); // Berubah jadi bulan
        localStorage.setItem('theme', 'dark');  // Mengingat pilihan tema gelap
    }
});


// ==========================================
// 2. FITUR ACCORDION FAQ (KODE ANDA)
// ==========================================
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const currentItem = question.parentElement;

        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== currentItem) {
                item.classList.remove('active');
            }
        });

        currentItem.classList.toggle('active');
    });
});
