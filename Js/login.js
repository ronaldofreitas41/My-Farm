let entrarBtn = document.getElementById("logBtn");
let regBtn = document.getElementById("regBtn");
let senhaU = document.getElementById("senha").value;
let emailU = document.getElementById("email").value;
const storedObject = JSON.parse(localStorage.getItem("users"));

entrarBtn.addEventListener("click", logar);
regBtn.addEventListener("click", registrar);

function logar() {
  // Recupera o email e senha do local storage
  const senha = storedObject._email;
  const email = storedObject._phoneNumber;
    console.log(senha);
    console.log(senhaU);
    console.log(email);
    console.log(emailU);
   // if (emailU == email && senhaU == senha) {
      // Dados conferem, continue com a autenticação
      location.href = "index.html";
      alert("Login Realizado!");
   // } else {
      // Dados não conferem, trate o erro
    //  alert("Verifique a sua Entrada");
    //}
}

function registrar() {
  location.href = "registration.html";
}
