import GrupoPetModel from "./GrupoPetModel"

export default class EstadoModel {

    #nome: string
    #sigla: string
    #grupos: GrupoPetModel[]

    constructor(nome: string, sigla: string, grupos: GrupoPetModel[]){

        this.#nome = nome
        this.#sigla = sigla
        this.#grupos = grupos
    }

    static vazio(){
        return new EstadoModel('Clique em um estado', 'cl', [])
    }

    adicionaGrupo(grupo: GrupoPetModel){
        this.#grupos.push(grupo)
    }

    get nome(){
        return this.#nome
    }

    get sigla(){
        return this.#sigla
    }

    get grupos(){
        return this.#grupos
    }
}