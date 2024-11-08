export default class FaqModel {

    #categoria: string
    #pergunta: string
    #resposta: string

    constructor(categoria: string, pergunta: string, resposta: string){

        this.#categoria = categoria
        this.#pergunta = pergunta
        this.#resposta = resposta
    }

    get categoria(){
        return this.#categoria
    }

    get pergunta(){
        return this.#pergunta
    }

    get resposta(){
        return this.#resposta
    }
}