import {Instrumento} from "./instrumentos.ts";

export class insDeSopro extends Instrumento {
    material: string;
    oitavas: number;
    afinado: boolean
    constructor(nome: string, anoDeFabricacao: number, material: string, oitavas: number, afinado: boolean){
        super(nome, anoDeFabricacao, material);
        this.material = material;
        this.oitavas = oitavas;
        this.afinado = afinado;
    }
    tocar(){
        if(this.afinado == true){
            console.log(`Fuiiuuii!`);
        }
        else{
            console.log('úéééehh')
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