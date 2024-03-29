class Animal {
  constructor(
    name,
//    monName,
//    dadName,
    gender,
    birth,
    breed,
    earing,
    photo,
    matrix
  ) {
    this._id; //Id do animal no BD
    this._name = name; // Nome do Animal
//    this._nameM = monName; // Nome da Mãe
//    this._nameP = dadName; // Nome do Pai
    this._gender = gender; // Genero do Animal
    this._birth = birth; //Data de Nascimento
    this._earing = earing; //Brinco do animal
    this._breed = breed; //Raça do Animal
    this._photo = photo; //Foto do Animal
    this._matrix = matrix; //Se o Animal é Matriz ou Reprodutor
    this._register = new Date(); //Data de registro
  }

  get id() {
    return this._id;
  }

  get register() {
    return this._register;
  }

  get name() {
    return this._name;
  }
/*
  get nameMon() {
    return this._nameMon;
  }

  get nameDad() {
    return this._nameDad;
  }
*/
  get gender() {
    return this._gender;
  }

  get birth() {
    return this._birth;
  }

  get earing() {
    return this._earing;
  }

  get breed() {
    return this._breed;
  }

  get photo() {
    return this._photo;
  }

  get matrix() {
    return this._matrix;
  }

  set photo(value) {
    this._photo = value;
  }

  loadFromJSON(json) {
    for (let name in json) {
      switch (name) {
        case "_register":
          this[name] = new Date(json[name]);
          break;
        default:
          this[name] = json[name];
      }
    }
  }

  static getAnimalStorage(tipo) {
    let animals = [];
    if (tipo == "C") {
      if (localStorage.getItem("animalC")) {
        animals = JSON.parse(localStorage.getItem("animalC"));
      }
    } else if (tipo == "L") {
      if (localStorage.getItem("animalL")) {
        animals = JSON.parse(localStorage.getItem("animalL"));
      }
    }

    return animals;
  }

  getNewID() {
    let animalID = parseInt(localStorage.getItem("animalID"));

    if (!animalID > 0) animalID = 0;

    animalID++;

    localStorage.setItem("animalID", animalID);

    return animalID;
  }

  save(tipo) {
    if (tipo == "C") {
      let animal = Animal.getAnimalStorage(tipo);

      if (this.id > 0) {
        animal.map((u) => {
          if (u._id == this._id) {
            Object.assign(u, this);
          }

          return u;
        });
      } else {
        this._id = this.getNewID();

        animal.push(this);
      }

      localStorage.setItem("animalC", JSON.stringify(animal));
    } else if (tipo == "L") {
      let animal = Animal.getAnimalStorage(tipo);

      if (this.id > 0) {
        animal.map((u) => {
          if (u._id == this._id) {
            Object.assign(u, this);
          }

          return u;
        });
      } else {
        this._id = this.getNewID();

        animal.push(this);
      }

      localStorage.setItem("animalL", JSON.stringify(animal));
    }
  }

  remove(tipo) {
    if (tipo == "C") {
      let animal = Animal.getAnimalStorage(tipo);

      animal.forEach((animalData, index) => {
        if (this._id == animalData._id) {
          animal.splice(index, 1);
        }
      });

      localStorage.setItem("animalC", JSON.stringify(animal));
    } else if (tipo == "L") {
      let animal = Animal.getAnimalStorage(tipo);

      animal.forEach((animalData, index) => {
        if (this._id == animalData._id) {
          animal.splice(index, 1);
        }
      });

      localStorage.setItem("animalL", JSON.stringify(animal));
    }
  }
}
