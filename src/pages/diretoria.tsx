import Documento from "@/components/Documento";
import Layout from "@/components/Layout";
import Membro from "@/components/Membro";
import Subtitulo from "@/components/Subtitulo";
import { docsDiretoria } from "@/core/Dados";
import MembroModel from "@/core/MembroModel";
import Link from "next/link";
import { useEffect, useState } from "react";

export async function getStaticProps(){

    const response = await fetch("https://cenapet.vercel.app/api/membros");
    const membros: any[] = await response.json();
  
    return{
      props:{
        membros
      },
      revalidate: 300
    }
}

export default function Diretoria(props: any){

    const [membrosAtuais, setMembrosAtuais] = useState<MembroModel[]>([])

    useEffect(() => {

        const listaModel: MembroModel[] = []

        for(let i = 0; i < props.membros.length; i++){

            const item = props.membros[i]

            const elemento = new MembroModel(item.nome, item.cargo, item.grupo, item.ies);
            listaModel.push(elemento)
        }
        setMembrosAtuais(listaModel)
    }, [])

    function renderizaDocs(){

        return docsDiretoria.map(doc => {
            return <Documento key={doc.href} valor={doc}/>
        })
    }

    return(

        <Layout paginaMarcada="diretoria" Titulo="Diretoria CENAPET">
            
            <p>
            Eleita bienalmente e é composta por um Presidente, um VicePresidente (ambos docentes) e oito Diretores (docentes e discentes) com atribuições específicas, sendo que a composição dessa diretoria envolve dois representantes, um docente e um discente, de cada região do PET do Brasil
            </p>

            <hr className='h-0.5 bg-yellow-400 w-full my-10'/>
            
            <Link target="blank" href="https://docs.google.com/presentation/d/1PQOVTTUsr8bTBi32doKB2NM5kM-1JP_C/edit?usp=sharing&ouid=111027957601787929675&rtpof=true&sd=true">
                <button className="mb-7 p-5 rounded-md bg-blue-500/65 text-lg font-bold hover:bg-blue-300/65 duration-300">
                    Histórico da Diretoria
                </button>
            </Link>

            <Subtitulo valor="Membros"/>

            <div className="flex flex-wrap justify-center w-full">
                {
                    membrosAtuais.map(membro => {

                        return (
                            <Membro key={membro.nome} valor={membro}/>
                        )
                    })
                }
            </div>

            <hr className="h-0.5 bg-yellow-400 w-full my-10"/>
            <Subtitulo valor="Documentos"/>
            <div className="flex gap-8 lg:gap-40 flex-col lg:flex-row">
                {renderizaDocs()}
            </div>
        </Layout>
    )
}