import { useState } from "react";
import Mapa from "./Mapa";

export default function MapaInterativo(){

    const [estado, setEstado] = useState('Distrito Federal')

    function selecionaEstado(nome: string){
        setEstado(nome)
    }

    return (

            
        <div className="flex justify-center flex-col lg:flex-row">

            <div className="flex-1 flex items-center justify-center">
                <Mapa selecionaEstado={selecionaEstado}/>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center">

                <div className="bg-slate-200 p-5 w-[90%] lg:w-3/5 rounded-md">

                    <div className="flex flex-col items-center mt-5 mb-5">   
                        <h1 className="text-4xl font-bold mb-10">{estado}</h1>

                        <p> <span className="font-bold">13</span> GRUPOS PET</p>
                    </div>

                    <ul className="flex flex-col justify-start w-full list-disc ml-6">
                        <li>PET Eng Comp</li>
                        <li>PET Eng Comp</li>
                        <li>PET Eng Comp</li>
                        <li>PET Eng Comp</li>
                        <li>PET Eng Comp</li>
                        <li>PET Eng Comp</li>
                        <li>PET Eng Comp</li>
                        <li>PET Eng Comp</li>
                        <li>PET Eng Comp</li>
                        <li>PET Eng Comp</li>
                        <li>PET Eng Comp</li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}