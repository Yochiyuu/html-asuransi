document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('car-insurance-form');
    const btnCalculate = document.getElementById('btn-calculate');
    const resultContainer = document.getElementById('result-premi');
    const premiValue = document.getElementById('premi-value');
    const btnCheckout = document.getElementById('btn-checkout');

    btnCalculate.addEventListener('click', function(event) {
        event.preventDefault(); 

        const tahunPembuatan = parseInt(document.getElementById('tahun_pembuatan').value);
        const hargaMobil = parseFloat(document.getElementById('harga_mobil').value);

        if (isNaN(tahunPembuatan) || isNaN(hargaMobil) || !form.checkValidity()) {
            alert('Mohon lengkapi semua data yang diperlukan.');
            return;
        }

        const tahunSekarang = new Date().getFullYear();
        const umurMobil = tahunSekarang - tahunPembuatan;
        let premi = 0;

        if (umurMobil >= 0 && umurMobil <= 3) {
            premi = 0.025 * hargaMobil;
        } else if (umurMobil > 3 && umurMobil <= 5 && hargaMobil < 200000000) {
            premi = 0.04 * hargaMobil;
        } else if (umurMobil > 3 && umurMobil <= 5 && hargaMobil >= 200000000) {
            premi = 0.03 * hargaMobil;
        } else if (umurMobil > 5) {
            premi = 0.05 * hargaMobil;
        }

        premiValue.textContent = `Rp ${premi.toLocaleString('id-ID')}`;
        resultContainer.style.display = 'block';
        btnCheckout.style.display = 'block';
    });

    btnCheckout.addEventListener('click', function() {
        const produk = "Asuransi Mobil";
        const premi = premiValue.textContent;

        sessionStorage.setItem('produkAsuransi', produk);
        sessionStorage.setItem('premiAsuransi', premi);

        window.location.href = 'checkout.html';
    });
});
