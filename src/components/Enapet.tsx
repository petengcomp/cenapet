import EventoModel from "@/core/EventoModel";
import Subtitulo from "./Subtitulo";
import EdicaoEvento from "./EdicaoEvento";

interface EnapetProps{

    edicoes: EventoModel[]
}

export default function Enapet({ edicoes }: EnapetProps){

    return (

        <div className="w-full md:w-[80%]">

            <Subtitulo valor="Edições"/>

            <div className="flex flex-col mx-auto">

                {
                    edicoes.map(edicao => {

                        return (
                            <EdicaoEvento valor={edicao}/>
                        )
                    })
                }
            </div>
        </div>
    )
}