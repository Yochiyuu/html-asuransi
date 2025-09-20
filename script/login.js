function login() {
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let oldError = document.querySelector(".error-message");
    if (oldError) oldError.remove();

    let message = document.createElement("p");
    message.classList.add("error-message");

    if (email === "" || password === "") {
        message.textContent = "Email dan kata sandi harus diisi.";
        message.style.color = "red";
        document.querySelector(".form-container").appendChild(message);
        return;
    }

    if (!emailPattern.test(email)) {
        message.textContent = "Format email tidak valid.";
        message.style.color = "red";
        document.querySelector(".form-container").appendChild(message);
        return;
    }

    const dummyEmail = "test@example.com";
    const dummyPassword = "12345678";

    if (email === dummyEmail && password === dummyPassword) {
        message.textContent = "Login berhasil! Selamat datang.";
        message.style.color = "green";
        document.querySelector(".form-container").appendChild(message);

        setTimeout(() => {
            window.location.href = "product.html";
        }, 1500);
    } else {
        message.textContent = "Email atau kata sandi salah.";
        message.style.color = "red";
        document.querySelector(".form-container").appendChild(message);
    }
}
