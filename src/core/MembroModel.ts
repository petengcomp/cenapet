export default class MembroModel {

    #nome: string
    #cargo: string
    #grupo: string
    #ies: string
    #foto?: string

    constructor(nome: string, cargo: string, grupo: string, ies: string, foto?: string){

        this.#nome = nome
        this.#cargo = cargo
        this.#grupo = grupo
        this.#ies = ies
        this.#foto = foto
    }

    get nome(){
        return this.#nome
    }

    get cargo(){
        return this.#cargo
    }

    get foto(){
        return this.#foto
    }

    get grupo(){
        return this.#grupo
    }

    get ies(){
        return this.#ies
    }
}