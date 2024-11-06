export default class MembroModel {

    #nome: string
    #cargo: string
    #dataEntrada: string
    #grupo: string
    #ies: string

    constructor(nome: string, cargo: string, dataEntrada: string, grupo: string, ies: string){

        this.#nome = nome
        this.#cargo = cargo
        this.#dataEntrada = dataEntrada
        this.#grupo = grupo
        this.#ies = ies
    }

    get nome(){
        return this.#nome
    }

    get cargo(){
        return this.#cargo
    }

    get dataEntrada(){
        return this.#dataEntrada
    }

    get grupo(){
        return this.#grupo
    }

    get ies(){
        return this.#ies
    }
}