document.addEventListener('DOMContentLoaded', () => {
    const produk = sessionStorage.getItem('produkAsuransi');
    const premi = sessionStorage.getItem('premiAsuransi');

    const produkToPayElement = document.getElementById('produk-to-pay');
    const premiToPayElement = document.getElementById('premi-to-pay');

    if (produk && premi) {
        produkToPayElement.innerText = produk;
        premiToPayElement.innerText = premi;
    } else {
        produkToPayElement.innerText = 'Tidak Ditemukan';
        premiToPayElement.innerText = 'Rp0';
        console.error('Data produk atau premi tidak ditemukan di sessionStorage.');
    }

    const payButton = document.getElementById('pay-button');

    payButton.addEventListener('click', () => {
        const pembelianBaru = {
            namaProduk: produk,
            jenis: "Asuransi",
            tanggal: new Date().toLocaleDateString('id-ID'),
            harga: parseInt(premi.replace(/[^0-9]/g, "")) || 0,
            status: "Lunas"
        };

        let history = JSON.parse(localStorage.getItem('riwayatPembelian')) || [];
        history.push(pembelianBaru);
        localStorage.setItem('riwayatPembelian', JSON.stringify(history));

        sessionStorage.removeItem('produkAsuransi');
        sessionStorage.removeItem('premiAsuransi');

        alert('Pembayaran berhasil! Anda akan diarahkan ke halaman riwayat pembelian.');
        window.location.href = 'history.html';
    });
});
