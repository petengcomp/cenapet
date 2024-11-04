import { useEffect, useState, useRef } from "react";
import Mapa from "./Mapa";
import Subtitulo from "./Subtitulo";
import EstadoModel from "@/core/EstadoModel";
import { listaEstados } from "@/core/Dados";
import GrupoPetModel from "@/core/GrupoPetModel";
import Universidade from "./Universidade";

interface MapaInterativoProps{
    grupos: any
}

export default function MapaInterativo(props: MapaInterativoProps){

    const [estado, setEstado] = useState(EstadoModel.vazio())
    const [universidades, setUniversidades] = useState<string[]>([])
    const hasFetchedData = useRef(false)
    const componenteRef = useRef<null | HTMLDivElement>(null)

    function selecionaEstado(estado: EstadoModel){
        setEstado(estado)

        const universidadesEstado: string[] = []
        estado.grupos.map(est => {

            if(!universidadesEstado.includes(est.ies)){
                universidadesEstado.push(est.ies)
            }
        })

        setUniversidades(universidadesEstado)

        if (componenteRef.current && window.innerWidth < 1024) {
            componenteRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }

    function renderizaUniversidades(){

        const listaUniversidades = []

        for(let i = 0; i < universidades.length; i++){

            const ies = universidades[i];

            const gruposUniversidade: GrupoPetModel[] = []
            
            estado.grupos.map(grupo => {

                if(grupo.ies === ies) gruposUniversidade.push(grupo)
            })

            listaUniversidades.push(<Universidade key={ies} nome={ies} grupos={gruposUniversidade}/>)
        }

        return listaUniversidades
    }

    function obtemGruposPorEstado() {

        for(let j = 0; j < listaEstados.length; j++){

            listaEstados[j].resetaGrupos()
        }
    
        for(let i = 0; i < props.grupos.length; i++){

            const item = props.grupos[i]

            const grupo = new GrupoPetModel(item.nome, item.link ? item.link : '', item.ies);

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
            obtemGruposPorEstado()
            hasFetchedData.current = true
        }
    }, [])

    return (

            
        <div className="flex justify-center flex-col lg:flex-row">

            <div className="flex-1 flex items-center justify-center">
                <Mapa selecionaEstado={selecionaEstado}/>
            </div>
            
            <div ref={componenteRef} className="flex-1 flex flex-col items-center justify-center pt-20 lg:pt-0">

                <div className="bg-slate-200 p-5 w-[90%] lg:w-3/5 rounded-md lg:h-[600px] lg:overflow-y-scroll transition-all">

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