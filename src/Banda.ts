import { insDeCorda } from "./InsDeCorda.ts";
import { insDePercussao } from "./insDePercussao.ts";
import { insDeSopro } from "./insDeSopro.ts";


const guitarra = new insDeCorda("guitarra", 2021, "aço", 7, false)
const faluta = new insDeSopro("flauta", 2018, "madeira", 3, false)
const violao = new insDeCorda("violão", 2019, "carvalho", 6, false)
const bateria = new insDePercussao("bateria", 2020, "aço", false)

console.log("\nbanda desafinada:\n")
guitarra.tocar()
faluta.tocar()
violao.tocar()
bateria.tocar()

console.log("\nafinando banda...\n")
guitarra.Afinar()
faluta.Afinar()
violao.Afinar()
bateria.Afinar()

console.log("\nbanda afinada:\n")
guitarra.tocar()
faluta.tocar()
violao.tocar()
bateria.tocar()






