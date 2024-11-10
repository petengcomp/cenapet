export default class DocumentoModel {

    #nome: string
    #href: string


    constructor(nome: string, href: string){

        this.#nome = nome
        this.#href = href
    }

    get nome(){
        return this.#nome
    }

    get href(){
        return this.#href
    }
}