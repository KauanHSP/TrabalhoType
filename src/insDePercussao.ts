import {Instrumento} from "./instrumentos.ts";

export class insDePercussao extends Instrumento {
    material: string;
    afinado: boolean;

    constructor(nome: string, anoDeFabricacao: number, material: string, afinado: boolean){
        super(nome, anoDeFabricacao, material);
        this.material = material;
        this.afinado = afinado;
    }
    tocar(){
        if(this.afinado == true){
            console.log(`TUCCHA TUCHA TUTA!!`)
        }
        else{
            console.log('pieãããã')
        }
    }
    Afinar(){
        if(this.afinado == true){
            this.afinado = false
            console.log(`${this.nome} está desafinado`)
        }
        else{
            this.afinado = true
            console.log(`${this.nome} está afinado!`)
        }
    }
}