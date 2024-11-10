import Documento from "@/components/Documento";
import Layout from "@/components/Layout";
import DocumentoModel from "@/core/DocumentoModel";
import { useEffect, useState } from "react";

export async function getStaticProps(){

    const response = await fetch("https://cenapet.vercel.app/api/docsApi");
    const listaDocs: any[] = await response.json();
  
    return{
      props:{
        listaDocs
      },
      revalidate: 300
    }
}

export default function Documentos(props: any){

    const [listaDocumentos, setListaDocumentos] = useState<DocumentoModel[]>([])

    useEffect(() => {

        const listaModel: DocumentoModel[] = []

        for(let i = 0; i < props.listaDocs.length; i++){

            const item = props.listaDocs[i]

            const elemento = new DocumentoModel(item.nome, item.link);
            listaModel.push(elemento)
        }
        setListaDocumentos(listaModel)
    }, [])

    function renderizaListaDocumentos(){

        return listaDocumentos.map((documento: DocumentoModel) => (

            <Documento valor={documento}/>
        ))
    }

    return(

        <Layout paginaMarcada="documentos" Titulo="Documentos">

            <span>Arquivos importantes para referência rápida</span>

            <hr className="h-0.5 bg-yellow-400 w-full my-10"/>
            <div className="flex flex-wrap justify-center w-full gap-10 mx-auto">{renderizaListaDocumentos()}</div>
            <hr className="h-0.5 bg-yellow-400 w-full my-10"/>
        </Layout>
    )
}