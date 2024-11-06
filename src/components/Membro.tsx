import MembroModel from "@/core/MembroModel";

interface MembroProps {

    valor: MembroModel
}

export default function Membro({valor}: MembroProps){

    return(

        <div className={`
            flex flex-col p-8 sm:mx-10 mb-7
            bg-green-200 rounded-lg w-[430px]
            hover:scale-105 cursor-pointer duration-300
        `}>

            <h2 className="font-bold text-xl sm:text-2xl mb-4">{valor.nome}</h2>

            <div className="flex flex-col justify-center items-center text-lg sm:text-xl">
                <span>{valor.cargo}</span>
                <span>{valor.grupo} - {valor.ies}</span>
                <span>Membro desde {valor.dataEntrada}</span>
            </div>
        </div>
    )
}