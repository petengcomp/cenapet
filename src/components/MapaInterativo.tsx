import { useEffect, useState, useRef } from "react";
import Mapa from "./Mapa";
import Subtitulo from "./Subtitulo";
import EstadoModel from "@/core/EstadoModel";
import { listaEstados } from "@/core/Dados";
import GrupoPetModel from "@/core/GrupoPetModel";
import Universidade from "./Universidade";

export default function MapaInterativo(){

    const [estado, setEstado] = useState(EstadoModel.vazio())
    const [universidades, setUniversidades] = useState<string[]>([])
    const hasFetchedData = useRef(false)

    function selecionaEstado(estado: EstadoModel){
        setEstado(estado)

        const universidadesEstado: string[] = []
        estado.grupos.map(est => {

            if(!universidadesEstado.includes(est.ies)){
                universidadesEstado.push(est.ies)
            }
        })

        setUniversidades(universidadesEstado)
    }

    function renderizaUniversidades(){

        const listaUniversidades = []

        for(let i = 0; i < universidades.length; i++){

            const ies = universidades[i];

            const gruposUniversidade: GrupoPetModel[] = []
            
            estado.grupos.map(grupo => {

                if(grupo.ies === ies) gruposUniversidade.push(grupo)
            })

            listaUniversidades.push(<Universidade nome={ies} grupos={gruposUniversidade}/>)
        }

        return listaUniversidades
    }

    async function getData() {
        const response = await fetch("api/grupospet");
        const data: any[] = await response.json();

        console.log(data)
    
        for(let i = 0; i < data.length; i++){

            const item = data[i]

            const grupo = new GrupoPetModel(item.nome, '', item.ies);

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

                        <p> <span className="font-bold text-3xl">{estado.grupos.length}</span> GRUPOS PET</p>
                        <p> <span className="font-bold text-3xl">{universidades.length}
                        </span>{universidades.length === 1 ? ' UNIVERSIDADE' : ' UNIVERSIDADES'}</p>
                    </div>

                    <div className="flex flex-col justify-start w-full">
                        {renderizaUniversidades()}
                    </div>
                </div>
                
            </div>
        </div>
    )
}