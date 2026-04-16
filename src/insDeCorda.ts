import {Instrumento} from "./instrumentos.ts";

export class insDeCorda extends Instrumento {
    numeroCordas: number;
    Afinado: boolean;

    constructor(nome: string, anoDeFabricacao: number, material: string, numeroCordas: number, Afinado: boolean){
        super(nome, anoDeFabricacao, material);
        this.numeroCordas = numeroCordas;
        this.Afinado = Afinado;
    }

    tocar(){
        if(this.Afinado == true){
            console.log(`VRUMMMM!!! TCHAAAA!!`)
        }
        else{
            console.log('tututuã')
        }
        
    }
    Afinar(){
        if(this.Afinado == true){
            this.Afinado = false
            console.log(`${this.nome} está desafinado`)
        }
        else{
            this.Afinado = true
            console.log(`${this.nome} está afinado!`)
        }
    }
}

