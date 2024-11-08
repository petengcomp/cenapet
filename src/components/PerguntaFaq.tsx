import FaqModel from "@/core/FaqModel"
import { useState } from "react";
import { IconeSeta, IconeSetaBaixo } from "./Icones";

interface PerguntaFaqProps{

    valor: FaqModel
}

export default function PerguntaFaq({ valor }: PerguntaFaqProps){

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
                    <h2 className="p-4 flex-[80%] font-medium">{valor.pergunta}</h2>
                </div>
            </div>

            <div className={`${open ? "" : "hidden"} animate__animated animate__fadeInDown`}>
                <h2 className="p-4 text-zinc-700">{valor.resposta}</h2>
            </div>
        </div>
    )
}