document.addEventListener('DOMContentLoaded', () => {
    const historyBody = document.getElementById('history-body');

    let history = JSON.parse(localStorage.getItem('riwayatPembelian')) || [];

    if (history.length === 0) {
        historyBody.innerHTML = `
            <tr>
                <td colspan="5">Belum ada riwayat pembelian</td>
            </tr>`;
        return;
    }

    history.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.namaProduk}</td>
            <td>${item.jenis}</td>
            <td>${item.tanggal}</td>
            <td>Rp ${item.harga.toLocaleString('id-ID')}</td>
            <td style="color:green;">${item.status}</td>
        `;
        historyBody.appendChild(row);
    });
});
