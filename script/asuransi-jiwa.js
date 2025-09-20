document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('life-insurance-form');
    const btnCalculate = document.getElementById('btn-calculate');
    const resultContainer = document.getElementById('result-premi');
    const premiValue = document.getElementById('premi-value');
    const btnCheckout = document.getElementById('btn-checkout');

    btnCalculate.addEventListener('click', function(event) {
        event.preventDefault();

        const namaLengkap = document.getElementById('nama_lengkap').value;
        const tanggalLahir = document.getElementById('tanggal_lahir').value;
        const besaranPertanggungan = document.getElementById('besaran_pertanggungan').value;
        
        if (!namaLengkap || !tanggalLahir || !besaranPertanggungan) {
            alert('Mohon lengkapi semua data yang diperlukan.');
            return;
        }

        const tanggalLahirObj = new Date(tanggalLahir);
        const tahunLahir = tanggalLahirObj.getFullYear();
        const tahunSekarang = new Date().getFullYear();
        const umur = tahunSekarang - tahunLahir;
        const t = parseInt(besaranPertanggungan);

        let m = 0;

        if (umur <= 30) {
            m = 0.002;
        } else if (umur > 30 && umur <= 50) {
            m = 0.004;
        } else if (umur > 50) {
            m = 0.01;
        }


        const totalPremi = m * t;

        premiValue.textContent = `Rp ${totalPremi.toLocaleString('id-ID', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
        resultContainer.style.display = 'block';
        btnCheckout.style.display = 'block';
    });

    btnCheckout.addEventListener('click', function() {
        const produk = "Asuransi Jiwa";
        const premi = premiValue.textContent;

        sessionStorage.setItem('produkAsuransi', produk);
        sessionStorage.setItem('premiAsuransi', premi);


        window.location.href = 'checkout.html';
    });
});
