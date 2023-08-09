class BovinoCorte extends Animal {
    constructor (name,/* monName, dadName,*/ gender, birth, breed, earing, photo, matrix, peso){
        super(name,/* monName, dadName,*/ gender, birth, breed, earing, photo, matrix);
        this._peso = peso; //Peso do Animal em @
    }
}