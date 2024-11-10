import Documento from "@/components/Documento";
import Layout from "@/components/Layout";
import Subtitulo from "@/components/Subtitulo";
import DocumentoModel from "@/core/DocumentoModel";
import { listaDocumentos } from "@/core/Dados";


export default function Documentos(){

    function renderizaListaDocumentos(){

        return listaDocumentos.map((documento: DocumentoModel) => (

            <Documento valor={documento}/>
        ))
    }

    return(

        <Layout paginaMarcada="documentos" Titulo="Documentos">

            <span>Arquivos importantes para referência rápida</span>

            <hr className="h-0.5 bg-yellow-400 w-full my-10"/>
            
            <Subtitulo valor="Portaria"/>
            <div className="flex flex-wrap justify-between w-[90%] mx-auto">{renderizaListaDocumentos()}</div>
            <hr className="h-0.5 bg-yellow-400 w-full my-10"/>
        </Layout>
    )
}