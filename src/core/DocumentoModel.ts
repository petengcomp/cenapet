export default class DocumentoModel {

    #nome: string
    #href: string
    #tipo: 'custeio' | 'legislacao' | 'portaria'

    constructor(nome: string, href: string, tipo: 'custeio' | 'legislacao' | 'portaria'){

        this.#nome = nome
        this.#href = href
        this.#tipo = tipo
    }

    get nome(){
        return this.#nome
    }

    get href(){
        return this.#href
    }

    get tipo(){
        return this.#tipo
    }
}