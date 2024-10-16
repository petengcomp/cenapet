import { useEffect, useState, useRef } from "react";
import Mapa from "./Mapa";
import Subtitulo from "./Subtitulo";
import EstadoModel from "@/core/EstadoModel";
import { listaEstados } from "@/core/Dados";
import GrupoPetModel from "@/core/GrupoPetModel";

export default function MapaInterativo(){

    const [estado, setEstado] = useState(EstadoModel.vazio())
    const hasFetchedData = useRef(false)

    function selecionaEstado(estado: EstadoModel){
        setEstado(estado)
    }

    function renderizaGrupos(){

        return estado.grupos.map(grupo => {
            return (
                <li>{grupo.nome}</li>
            )
        })
    }

    async function getData() {
        const response = await fetch("https://api.zerosheets.com/v1/mgu");
        const data: any[] = await response.json();
    
        for(let i = 0; i < data.length; i++){

            const item = data[i]

            const grupo = new GrupoPetModel(item.nome, '');

            for(let j = 0; j < listaEstados.length; j++){

                if(item.uf === listaEstados[j].sigla){
                    listaEstados[j].adicionaGrupo(grupo)
                    break
                }
            }
        }

    }

    useEffect(() => {
        if (!hasFetchedData.current) {
            getData();
            hasFetchedData.current = true;
        }
    }, [])

    return (

            
        <div className="flex justify-center flex-col lg:flex-row">

            <div className="flex-1 flex items-center justify-center">
                <Mapa selecionaEstado={selecionaEstado}/>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center">

                <div className="bg-slate-200 p-5 w-[90%] lg:w-3/5 rounded-md">

                    <div className="flex flex-col items-center mt-5 mb-5">   
                        <Subtitulo valor={estado.nome}/>

                        <p> <span className="font-bold">{estado.grupos.length}</span> GRUPOS PET</p>
                    </div>

                    <ul className="flex flex-col justify-start w-full list-disc ml-6">
                        {renderizaGrupos()}
                    </ul>
                </div>
                
            </div>
        </div>
    )
}