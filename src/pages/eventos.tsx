import Layout from "@/components/Layout";
import Diretrizes from "@/components/Diretrizes";
import DocumentoModel from "@/core/DocumentoModel";
import { useEffect, useState } from "react";
import EventoModel from "@/core/EventoModel";
import Enapet from "@/components/Enapet";

export async function getStaticProps(){

    const response = await fetch("https://cenapet.vercel.app/api/diretrizes");
    const listaDocs: any[] = await response.json();

    const respEnapet = await fetch("https://cenapet.vercel.app/api/enapet");
    const edicoesEnapet: any[] = await respEnapet.json()
  
    return{
      props:{
        listaDocs,
        edicoesEnapet
      },
      revalidate: 300
    }
}

const paginas = [
    'Diretrizes',
    'ENAPET'
]

export default function Eventos(props: any){

    const [listaDocumentos, setListaDocumentos] = useState<DocumentoModel[]>([])
    const [listaEdicoesEnapet, setListaEdicoesEnapet] = useState<EventoModel[]>([])
    const [selecionada, setSelecionada] = useState('Diretrizes')

    useEffect(() => {

        const listaModel: DocumentoModel[] = []

        for(let i = 0; i < props.listaDocs.length; i++){

            const item = props.listaDocs[i]

            const elemento = new DocumentoModel(item.nome, item.link);
            listaModel.push(elemento)
        }
        setListaDocumentos(listaModel)

        const listaModelEnapet: EventoModel[] = []

        for(let i = 0; i < props.edicoesEnapet.length; i++){

            const itemEnapet = props.edicoesEnapet[i]

            const elementoEnapet = new EventoModel(itemEnapet.edicao, itemEnapet.local, itemEnapet.data, itemEnapet.ata);
            listaModelEnapet.push(elementoEnapet)
        }
        setListaEdicoesEnapet(listaModelEnapet)
    }, [])

    return(

        <Layout paginaMarcada="eventos" Titulo="Eventos PET">
            
            <span>Objetivos gerais e diretrizes dos encontros do PET realizados em escala nacional e regional.</span>

            <hr className="h-0.5 bg-yellow-400 w-full my-10"/>

            <div className="flex items-center text-2xl justify-center w-max mx-auto my-10">

                {
                        
                    paginas.map(pagina => (

                        <button className={`
                            p-5
                            ${selecionada === pagina ? 'border-b-2 border-blue-500' : ''}
                        `} key={pagina} onClick={() => setSelecionada(pagina)}>
                            {pagina}
                        </button>
                    ))   
                }
            </div>

            {
                selecionada === 'Diretrizes' ?
                    <Diretrizes docs={listaDocumentos}/>
                : selecionada === 'ENAPET' ? 
                    <Enapet edicoes={listaEdicoesEnapet}/>
                : false    
            }
        </Layout>
    )
}