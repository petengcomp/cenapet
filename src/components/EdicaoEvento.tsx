import { useState } from "react";
import { IconeSeta, IconeSetaBaixo } from "./Icones";
import EventoModel from "@/core/EventoModel";
import Documento from "./Documento";
import DocumentoModel from "@/core/DocumentoModel";

interface EdicaoEventoProps{

    valor: EventoModel
}

export default function EdicaoEvento({ valor }: EdicaoEventoProps){

    const [open, setOpen] = useState(false);

    return (

        <div className="w-full md:w-[80%] border-yellow-400 border-b-2">

            <div
                className="flex relative hover:cursor-pointer"
                onClick={() => setOpen(!open)}
            >
                <div className="flex items-center pl-2 mr-3">
                    {open ? IconeSetaBaixo : IconeSeta}
                </div>

                <div className="flex-[80%]">
                    <h2 className="p-4 flex-[80%] font-medium">{valor.edicao}</h2>
                </div>
            </div>

            <div className={`${open ? "" : "hidden"} animate__animated animate__fadeInDown flex flex-col`}>
                <h2 className="p-4 text-zinc-700">Local: {valor.local}</h2>
                <h2 className="p-4 text-zinc-700">Data: {valor.data}</h2>
                <Documento valor={new DocumentoModel('Ata do Evento', valor.ata)}/>
            </div>
        </div>
    )
}