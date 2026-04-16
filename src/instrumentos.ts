export class Instrumento{
    nome: string;
    anoDeFabricacao: number;
    material: string;

    constructor(nome: string, anoDeFabricacao: number, material: string){
        this.nome = nome;
        this.anoDeFabricacao = anoDeFabricacao;
        this.material = material;
    }
}