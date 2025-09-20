document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault(); 

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorMessage = document.getElementById("error-message");

    errorMessage.textContent = "";

    if (fullname.length < 3 || fullname.length > 32) {
        errorMessage.textContent = "Nama lengkap harus 3-32 karakter.";
        return;
    }
    if (/\d/.test(fullname)) {
        errorMessage.textContent = "Nama lengkap tidak boleh mengandung angka.";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = "Format email tidak valid.";
        return;
    }

    if (!/^08\d{8,14}$/.test(phone)) {
        errorMessage.textContent = "Nomor HP harus diawali 08 dan 10-16 digit.";
        return;
    }

    if (password.length < 8) {
        errorMessage.textContent = "Password minimal 8 karakter.";
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = "Konfirmasi password tidak sesuai.";
        return;
    }

    alert("Registrasi berhasil!");
    window.location.href = "login.html";
});
