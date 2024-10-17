export default class GrupoPetModel {

    #nome: string
    #link: string
    #ies: string

    constructor(nome: string, link: string, ies: string){

        this.#nome = nome
        this.#link = link
        this.#ies = ies
    }

    get nome(){
        return this.#nome
    }

    get link(){
        return this.#link
    }

    get ies(){
        return this.#ies
    }
}