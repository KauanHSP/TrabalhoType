import {Instrumento} from "./instrumentos.ts";

class insDeSopro extends Instrumento {
    material: string;
    oitavas: number;
    constructor(nome: string, anoDeFabricacao: number, material: string, oitavas: number){
        super(nome, anoDeFabricacao, material);
        this.material = material;
        this.oitavas = oitavas;
    }
    tocar(){
        console.log(`Fuiiuuii!`);
    }
    Afinar(){
        console.log(`${this.nome} afinado!`);
    }
}