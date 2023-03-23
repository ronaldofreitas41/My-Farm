import Animal from './Animal.js';

export class BovinoLeite extends Animal {
    constructor (name, monName, dadName, gender, birth, breed, earing, photo, matrix, leite){
        super(name, monName, dadName, gender, birth, breed, earing, photo, matrix);
        this._leite = leite; //Quantidade estimada de leite que o animal produz por dia
    }
}