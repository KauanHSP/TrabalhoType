import {Instrumento} from "./instrumentos.ts";

class insDePercussao extends Instrumento {
    material: string;
    afinavel: boolean;

    constructor(nome: string, anoDeFabricacao: number, material: string, afinavel: boolean){
        super(nome, anoDeFabricacao, material);
        this.material = material;
        this.afinavel = afinavel;
    }
    tocar(){
        console.log(`TUCCHA TUCHA TUTA!!`);
    }
    Afinar(){
        console.log(`${this.nome} afinado!`);
    }
}