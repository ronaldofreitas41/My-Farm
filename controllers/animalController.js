const racas = [
  "Selecione uma raça",
  "Angus",
  "Brangus",
  "Brahman",
  "Caracu",
  "Charoles",
  "Gir",
  "Girolando 1/2",
  "Girolando 3/4G",
  "Girolando 3/4H",
  "Girolando 5/8G",
  "Girolando 5/8H",
  "Girolando 7/8G",
  "Girolando 7/8H",
  "Holandes",
  "Hereford",
  "Guzera",
  "Jersey",
  "Nelore",
  "Senepol",
  "Sindi",
  "Tabapua",
  "Wagyu",
];

for (let i = 0; i < racas.length; i++) {
  let option = document.createElement("option");
  option.value = racas[i];
  option.text = racas[i];
  document.getElementById("selectRacas").appendChild(option);
}
let form = document.getElementById("form-user-create");

form.addEventListener("click", () => {
  let nome = document.getElementById("inputName").value;
  let nomePai = document.getElementById("inputNameF").value;
  let nomeMae = document.getElementById("inputNameM").value;
  let genero = document.getElementById("inputGenderM").checked;
  let brinco = document.getElementById("inputEaring").value;
  let nascimento = document.getElementById("imputBirth").value;
  let raca = document.getElementById("selectRacas").value;
  let matriz = document.getElementById("matriz").value;
  let photo;

  if (genero == true) {
    genero = "Macho";
  } else {
    genero = "Fêmea";
  }
  let foto = document.getElementById("inputFile");

  foto.addEventListener("change", () => {
    photo = foto.files[0];
  });
  let btn = document.getElementById("saveBTN");

  btn.addEventListener("click", () => {
    console.log(
      "nome",
      nome,
      "nomePai:",
      nomePai,
      "nomeMae:",
      nomeMae,
      "Genero:",
      genero,
      "Brinco:",
      brinco,
      "nascimento:",
      nascimento,
      "Raca:",
      raca,
      "Matriz:",
      matriz,
      "Foto:",
      photo
    );
  });
});
