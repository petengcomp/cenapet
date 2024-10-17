import GrupoPetModel from "@/core/GrupoPetModel"
import Link from "next/link"
import { useState } from "react"

interface UniversidadeProps{

    nome: string
    grupos: GrupoPetModel[]
} 

export default function Universidade(props: UniversidadeProps){

    const [visivel, setVisivel] = useState(false)

    function renderizaGrupos(){

        return props.grupos.map(grupo => {

            return (

                <Link href={grupo.link}>
                    <li className="hover:text-blue-500 ml-2" key={grupo.nome}>{grupo.nome}</li>
                </Link>
            )
        })
    }

    return(
        <div className="border-b border-b-black">

            <div className="cursor-pointer p-4 hover:bg-slate-100 rounded-md" onClick={() => setVisivel(!visivel)}>
                <span>{props.nome}</span>
            </div>

            <div className={`${visivel ? 'flex' : 'hidden'} flex-col list-disc px-4 text-zinc-700`}>
                {renderizaGrupos()}
            </div>
        </div>
    )
}