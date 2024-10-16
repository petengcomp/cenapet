export default class GrupoPetModel {

    #nome: string
    #link: string

    constructor(nome: string, link: string){

        this.#nome = nome
        this.#link = link
    }

    get nome(){
        return this.#nome
    }

    get link(){
        return this.#link
    }
}