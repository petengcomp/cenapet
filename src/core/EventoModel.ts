export default class EventoModel {

    #edicao: string
    #local: string
    #data: string
    #ata?: string

    constructor(edicao: string, local: string, data: string, ata?: string){

        this.#edicao = edicao
        this.#local = local
        this.#data = data
        this.#ata = ata
    }

    get edicao(){
        return this.#edicao
    }

    get local(){
        return this.#local
    }

    get data(){
        return this.#data
    }

    get ata(){
        return this.#ata
    }
}