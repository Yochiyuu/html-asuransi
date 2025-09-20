document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('health-insurance-form');
    const btnCalculate = document.getElementById('btn-calculate');
    const resultContainer = document.getElementById('result-premi');
    const premiValue = document.getElementById('premi-value');
    const btnCheckout = document.getElementById('btn-checkout');

    btnCalculate.addEventListener('click', function(event) {
        event.preventDefault();

        const namaLengkap = document.getElementById('nama_lengkap').value;
        const tanggalLahir = document.getElementById('tanggal_lahir').value;
        const pekerjaan = document.getElementById('pekerjaan').value;
        const merokok = document.getElementById('merokok').value;
        const hipertensi = document.getElementById('hipertensi').value;
        const diabetes = document.getElementById('diabetes').value;
        
        if (!namaLengkap || !tanggalLahir || !pekerjaan || !merokok || !hipertensi || !diabetes) {
            alert('Mohon lengkapi semua data yang diperlukan.');
            return;
        }

        const tanggalLahirObj = new Date(tanggalLahir);
        const tahunLahir = tanggalLahirObj.getFullYear();
        const tahunSekarang = new Date().getFullYear();
        const umur = tahunSekarang - tahunLahir;

        const P = 2000000;
        let m = 0;

        if (umur <= 20) {
            m = 0.1;
        } else if (umur > 20 && umur <= 35) {
            m = 0.2;
        } else if (umur > 35 && umur <= 50) {
            m = 0.25;
        } else if (umur > 50) {
            m = 0.4;
        }

        const k1 = merokok === 'ya' ? 1 : 0;
        const k2 = hipertensi === 'ya' ? 1 : 0;
        const k3 = diabetes === 'ya' ? 1 : 0;

        const totalPremi = P + (m * P) + (k1 * 0.5 * P) + (k2 * 0.4 * P) + (k3 * 0.5 * P);

        premiValue.textContent = `Rp ${totalPremi.toLocaleString('id-ID', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
        resultContainer.style.display = 'block';
        btnCheckout.style.display = 'block';
    });

    btnCheckout.addEventListener('click', function() {
        const produk = "Asuransi Kesehatan";
        const premi = premiValue.textContent;

        sessionStorage.setItem('produkAsuransi', produk);
        sessionStorage.setItem('premiAsuransi', premi);

        window.location.href = 'checkout.html';
    });
});