import Documento from "@/components/Documento";
import Layout from "@/components/Layout";
import Subtitulo from "@/components/Subtitulo";
import DocumentoModel from "@/core/DocumentoModel";

const ListaDocumentos = [

    new DocumentoModel(
        'Manual de orientações sobre o custeio PET',
        'docs/custeio/1 MANUAL DE ORIENTAÇÕES SOBRE O CUSTEIO PET.pdf',
        'custeio'
    ),
    new DocumentoModel(
        'Manual de orientações sobre o custeio PET',
        'docs/custeio/1 MANUAL DE ORIENTAÇÕES SOBRE O CUSTEIO PET.pdf',
        'custeio'
    ),
    new DocumentoModel(
        'Manual de orientações sobre o custeio PET',
        'docs/custeio/1 MANUAL DE ORIENTAÇÕES SOBRE O CUSTEIO PET.pdf',
        'custeio'
    ),
    new DocumentoModel(
        'Manual de orientações sobre o custeio PET',
        'docs/custeio/1 MANUAL DE ORIENTAÇÕES SOBRE O CUSTEIO PET.pdf',
        'custeio'
    ),
    new DocumentoModel(
        'Manual de orientações sobre o custeio PET',
        'docs/custeio/1 MANUAL DE ORIENTAÇÕES SOBRE O CUSTEIO PET.pdf',
        'custeio'
    ),
    new DocumentoModel(
        'Manual de orientações sobre o custeio PET',
        'docs/custeio/1 MANUAL DE ORIENTAÇÕES SOBRE O CUSTEIO PET.pdf',
        'legislacao'
    ),
    new DocumentoModel(
        'Manual de orientações sobre o custeio PET',
        'docs/custeio/1 MANUAL DE ORIENTAÇÕES SOBRE O CUSTEIO PET.pdf',
        'legislacao'
    ),
    new DocumentoModel(
        'Manual de orientações sobre o custeio PET',
        'docs/custeio/1 MANUAL DE ORIENTAÇÕES SOBRE O CUSTEIO PET.pdf',
        'legislacao'
    ),
    new DocumentoModel(
        'Manual de orientações sobre o custeio PET',
        'docs/custeio/1 MANUAL DE ORIENTAÇÕES SOBRE O CUSTEIO PET.pdf',
        'legislacao'
    ),
    new DocumentoModel(
        'Manual de orientações sobre o custeio PET',
        'docs/custeio/1 MANUAL DE ORIENTAÇÕES SOBRE O CUSTEIO PET.pdf',
        'portaria'
    ),
    new DocumentoModel(
        'Manual de orientações sobre o custeio PET',
        'docs/custeio/1 MANUAL DE ORIENTAÇÕES SOBRE O CUSTEIO PET.pdf',
        'portaria'
    ),
    new DocumentoModel(
        'Manual de orientações sobre o custeio PET',
        'docs/custeio/1 MANUAL DE ORIENTAÇÕES SOBRE O CUSTEIO PET.pdf',
        'portaria'
    ),
]

export default function Documentos(){

    function renderizaListaDocumentos(tipo: string){

        const lista = []
        var docs = []

        for(let i = 0; i < (ListaDocumentos.length / 4); i++){

            for(let j = 0; j < 4; j++){

                if(j + (4*i) >= ListaDocumentos.length) break

                if(ListaDocumentos[j + (4*i)].tipo === tipo){

                    docs.push(
                        <Documento key={j + (4*i)} valor={ListaDocumentos[j + (4*i)]}/>
                    )
                }
            }

            if(docs.length === 4){
                lista.push(<div key={i} className="px-8 flex flex-col lg:flex-row lg:gap-40 gap-8">{docs}</div>)
                docs = []
            }
        }

        if(docs.length > 0)
            lista.push(<div key={176} className="px-8 flex flex-col lg:flex-row lg:gap-40 gap-8">{docs}</div>)

        return lista
    }

    return(

        <Layout paginaMarcada="documentos" Titulo="Documentos">

            <span>Arquivos importantes para referência rápida</span>

            <hr className="h-0.5 bg-yellow-400 w-full my-10"/>
            
            <Subtitulo valor="Portaria"/>
            <div className="flex flex-col justify-center gap-8 lg:gap-16">{renderizaListaDocumentos('custeio')}</div>
            <hr className="h-0.5 bg-yellow-400 w-full my-10"/>

            <Subtitulo valor="Legislação"/>
            <div className="flex flex-col justify-center gap-8 lg:gap-16">{renderizaListaDocumentos('legislacao')}</div>
            <hr className="h-0.5 bg-yellow-400 w-full my-10"/>

            <Subtitulo valor="Custeio"/>
            <div className="flex flex-col justify-center gap-8 lg:gap-16">{renderizaListaDocumentos('portaria')}</div>
            <hr className="h-0.5 bg-yellow-400 w-full my-10"/>
        </Layout>
    )
}