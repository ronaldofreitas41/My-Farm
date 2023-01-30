let entrarBtn = document.getElementById('logBtn');
let regBtn = document.getElementById('regBtn');

entrarBtn.addEventListener("click", logar);
regBtn.addEventListener("click", registrar);

function logar() {
    location.href = "index.html";
    alert("Login Realizado!");
}

function registrar() {
    location.href = "registration.html";
}
