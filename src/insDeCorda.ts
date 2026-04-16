import {Instrumento} from "./instrumentos.ts";

class insDeCorda extends Instrumento {
    numeroCordas: number;
    Afinação: string;

    constructor(nome: string, anoDeFabricacao: number, material: string, numeroCordas: number, Afinação: string){
        super(nome, anoDeFabricacao, material);
        this.numeroCordas = numeroCordas;
        this.Afinação = Afinação;
    }

    tocar(){
        console.log(`VRUMMMM!!! TCHAAAA!!`);
    }
    Afinar(){
        console.log(`${this.nome} afinado!`);
    }
}