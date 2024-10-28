import Documento from "@/components/Documento";
import Layout from "@/components/Layout";
import Subtitulo from "@/components/Subtitulo";
import DocumentoModel from "@/core/DocumentoModel";
import { listaDocumentos } from "@/core/Dados";

export default function Documentos(){

    function renderizaListaDocumentos(tipo: string){

        const docs = listaDocumentos.filter((doc) => doc.tipo === tipo)

        return docs.map((documento: DocumentoModel) => (

            <Documento valor={documento}/>
        ))
    }

    return(

        <Layout paginaMarcada="documentos" Titulo="Documentos">

            <span>Arquivos importantes para referência rápida</span>

            <hr className="h-0.5 bg-yellow-400 w-full my-10"/>
            
            <Subtitulo valor="Portaria"/>
            <div className="flex flex-wrap justify-between w-[90%] mx-auto">{renderizaListaDocumentos('portaria')}</div>
            <hr className="h-0.5 bg-yellow-400 w-full my-10"/>

            <Subtitulo valor="Legislação"/>
            <div className="flex flex-wrap justify-between w-[90%] mx-auto">{renderizaListaDocumentos('legislacao')}</div>
            <hr className="h-0.5 bg-yellow-400 w-full my-10"/>

            <Subtitulo valor="Custeio"/>
            <div className="flex flex-wrap justify-between w-[90%] mx-auto">{renderizaListaDocumentos('custeio')}</div>
        </Layout>
    )
}