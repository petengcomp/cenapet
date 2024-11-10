import Layout from "@/components/Layout";
import Diretrizes from "@/components/Diretrizes";
import DocumentoModel from "@/core/DocumentoModel";
import { useEffect, useState } from "react";

export async function getStaticProps(){

    const response = await fetch("https://cenapet.vercel.app/api/diretrizes");
    const listaDocs: any[] = await response.json();
  
    return{
      props:{
        listaDocs
      },
      revalidate: 300
    }
}

export default function Eventos(props: any){

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

    return(

        <Layout paginaMarcada="eventos" Titulo="Eventos PET">
            
            <span>Objetivos gerais e diretrizes dos encontros do PET realizados em escala nacional e regional.</span>

            <hr className="h-0.5 bg-yellow-400 w-full my-10"/>

            <Diretrizes docs={listaDocumentos}/>
        </Layout>
    )
}